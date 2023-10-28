import React, { useState } from 'react';
import MethodButton from '../components/MethodButton';

const VendingMachine = () => {

    const [availableItems, setAvailableItems] = useState([
        { name: 'Water', price: 0.65, count: 5 },
        { name: 'Juice', price: 1.00, count: 3 },
        { name: 'Soda', price: 1.50, count: 7 },
    ]);
    
    const [availableChange, setAvailableChange] = useState({
        0.05: 10,
        0.10: 10,
        0.25: 10,
        1: 10,
    });

    const coinButtons = [
        { label: 'Insert $0.05', value: 0.05 },
        { label: 'Insert $0.10', value: 0.10 },
        { label: 'Insert $0.25', value: 0.25 },
        { label: 'Insert $1', value: 1 },
    ];

    const [insertedMoney, setInsertedMoney] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);
    const [customerMoney, setCustomermoney] = useState(0);

    const handleSelectItem = (item) => {
        if (insertedMoney >= item.price && item.count > 0) {
        setSelectedItem(item);
        setInsertedMoney(insertedMoney - item.price);
        const updatedItems = availableItems.map((i) =>
            i.name === item.name ? { ...i, count: i.count - 1 } : i
        );
        setAvailableItems(updatedItems);
        }
    };

    const handleReturnCoin = () => {
        setCustomermoney(prev => prev + insertedMoney);
        setInsertedMoney(0);

    };

    const handleInsertMoney = (amount) => {
        setInsertedMoney(insertedMoney + amount);
        console.log('item selected');
    };

    const insertedMoneyRounded = insertedMoney.toFixed(2);
    const customerMoneyRounded = customerMoney.toFixed(2);
    const calculateChange = (changeAmount) => {
        const change = {};
        const availableCoins = [1, 0.25, 0.10, 0.05];
        
        // Create a copy of the availableChange state to avoid directly modifying it
        const updatedAvailableChange = { ...availableChange };
        
            for (const coin of availableCoins) {
            if (changeAmount >= coin && updatedAvailableChange[coin] > 0) {
                const count = Math.floor(changeAmount / coin);
                const numCoinsToUse = Math.min(count, updatedAvailableChange[coin]);
                
                change[coin] = numCoinsToUse;
                changeAmount -= numCoinsToUse * coin;
        
                // Update the availableChange state
                updatedAvailableChange[coin] -= numCoinsToUse;
            }
            }
        
            // Update the availableChange state with the modified object
            setAvailableChange(updatedAvailableChange);
        
            return change;
        };

    const vendItem = () => {
        if (selectedItem) {
            return (
                <div>
                <p>{selectedItem.name}</p>
                {calculateChange(insertedMoney - selectedItem.price)}
                </div>
            );
            }
        };
    

    return (
        <div>
            <h1>Vending Machine</h1>
            <div>
            {availableItems.map((item) => (
                <div key={item.name}>
                    <MethodButton 
                        text={item.name} 
                        disabled={insertedMoney < item.price || item.count === 0} 
                        onClick={() => handleSelectItem(item)} 
                    />
                </div>
            ))}
            </div>
            <div>
                {coinButtons.map((coinButton) => (
                    <MethodButton
                        key={coinButton.value}
                        text={coinButton.label}
                        onClick={() => handleInsertMoney(coinButton.value)}
                    />
                    ))
                }
            </div>
            <div>
                <p>Inserted Money</p>
                <p>{insertedMoneyRounded}</p>
            </div>
            <div>
                <p>Customer Money</p>
                <p>{customerMoneyRounded}</p>
            </div>
            <div>
                <MethodButton 
                    onClick={handleReturnCoin} 
                    text="Return Coin" 
                />
            </div>
            {vendItem()}
        </div>
    )
};

export default VendingMachine;

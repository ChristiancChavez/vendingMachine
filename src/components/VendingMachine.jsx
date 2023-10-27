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
        setInsertedMoney(0);
    };

    const handleInsertMoney = (amount) => {
        setInsertedMoney(insertedMoney + amount);
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
                        onClick={handleSelectItem} 
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

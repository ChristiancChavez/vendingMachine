import React, { useEffect, useState } from 'react';
import MethodButton from './MethodButton';
import Product from './Product';
import { Box, Grid } from '@mui/material';
import { useRef } from 'react';


const VendingMachine = () => {

    const [availableProducts, setAvailableProducts] = useState([
        { name: 'Water', price: 0.65, count: 5 },
        { name: 'Juice', price: 1.00, count: 3 },
        { name: 'Soda', price: 1.50, count: 7 },
    ]);
    
    const [availableChange, setAvailableChange] = useState({
        0.05: 10,
        0.10: 10,
        0.25: 10,
        1.00: 10,
    });

    const coinButtons = [
        { label: 'Insert $0.05', value: 0.05 },
        { label: 'Insert $0.10', value: 0.10 },
        { label: 'Insert $0.25', value: 0.25 },
        { label: 'Insert $1.00', value: 1.00 },
    ];

    const [insertedMoney, setInsertedMoney] = useState(0.0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [customerMoney, setCustomermoney] = useState(0);

    const handleSelectItem = (item) => {
        if (insertedMoney >= 0 && item.count > 0) {
            //setSelectedProduct(item);
            const updateInsertedMoneyFixed = (insertedMoney.toFixed(2) * 100 - item.price.toFixed(2) * 100) / 100;
            console.log(updateInsertedMoneyFixed, 'updateInsertedMoneyFixed');
            setInsertedMoney(updateInsertedMoneyFixed);
            // const updatedItems = availableProducts.map((i) =>
            //   i.name === item.name ? { ...i, count: i.count - 1 } : i
            // );
            // Remove this line: setAvailableProducts(updatedItems);
        }
    };

    //const selectItemRef = useRef((item) => handleSelectItem(item));

    const handleReturnCoin = () => {
        setCustomermoney(prev => prev + insertedMoney);
        setInsertedMoney(0.0);
    };

    const handleInsertedMoney = (amount) => {
        const fixedInsertedMoney = (insertedMoney.toFixed(2) * 100 + amount.toFixed(2) * 100) / 100;
        setInsertedMoney(fixedInsertedMoney);
    };

    const insertedMoneyRounded = insertedMoney.toFixed(2);
    const customerMoneyRounded = customerMoney.toFixed(2);
    const calculateChange = (changeAmount) => {
        const change = {};
        const availableCoins = [1.00, 0.25, 0.10, 0.05];
        
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

    // const vendItem = () => {
    //     if (selectedProduct) {
    //         return (
    //             <div>
    //                 <p>{selectedProduct.name}</p>
    //                 {calculateChange(insertedMoney - selectedProduct.price)}
    //             </div>
    //             );
    //         }
    //     };
    

    return (
        <Box>
            <h1>Vending Machine</h1>
            <Grid 
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={6}
            >
                {availableProducts.map((item) => (
                    <Grid item key={item.name}>
                        <Product 
                            item={item}
                            disabled={insertedMoney < item.price || item.count === 0} 
                            onClick={handleSelectItem}
                        />
                    </Grid>
                ))}
            </Grid>
            <div>
                {coinButtons.map((coinButton) => (
                    <MethodButton
                        key={coinButton.value}
                        text={coinButton.label}
                        onClick={() => handleInsertedMoney(coinButton.value)}
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
            {selectedProduct &&
                <div>
                    <p>{selectedProduct.name}</p>
                    {calculateChange(insertedMoney - selectedProduct.price)}
                </div>
            }
        </Box>
    )
};

export default VendingMachine;

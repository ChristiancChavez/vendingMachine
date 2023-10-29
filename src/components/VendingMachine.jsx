import React, { useEffect, useState } from 'react';
import MethodButton from './MethodButton';
import Product from './Product';
import { Box, Grid } from '@mui/material';
import ProductSelected from './ProductSelected';


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
        { value: 0.05, coins: 10 },
        { value: 0.10, coins: 10 },
        { value: 0.25, coins: 10 },
        { value: 1.00, coins: 10 },
    ];

    const [insertedMoney, setInsertedMoney] = useState(0.0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [customerMoney, setCustomermoney] = useState(0);

    const handleSelectItem = (item) => {
        if (insertedMoney >= 0 && item.count > 0) {
            //setSelectedProduct(item);
            const updateInsertedMoneyFixed = (insertedMoney.toFixed(2) * 100 - item.price.toFixed(2) * 100) / 100;
            setInsertedMoney(updateInsertedMoneyFixed);
            const updatedItems = availableProducts.map((i) =>
                i.name === item.name ? { ...i, count: i.count - 1 } : i
            );
            setAvailableProducts(updatedItems);
        }
    };

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
            <Box container spacing={2}>
                <Grid 
                    container  
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: 1 }}
                >
                    {coinButtons.map((coinButton) => (
                        <Grid item >
                            <MethodButton
                                price={coinButton.value}
                                count={coinButton.coins}
                                onClick={() => handleInsertedMoney(coinButton.value)}
                            />
                        </Grid>
                        ))
                    }
                </Grid>
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
                    <ProductSelected selectedProduct={selectedProduct} />
                }
            </Box>
        </Box>
    )
};

export default VendingMachine;

import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Button } from '@material-ui/core';
import CoinMethods from '../components/coinMethods/CoinMethods';
import Product from '../components/product/Product';
import ProductSelected from '../components/productSelected/ProductSelected';

const VendingMachine = () => {

    const [availableProducts, setAvailableProducts] = useState([
        { name: 'Water', price: 0.65, count: 5 },
        { name: 'Juice', price: 1.00, count: 3 },
        { name: 'Soda', price: 1.50, count: 7 },
    ]);

    const [coinButtons, setCoinButtons] = useState([
        { value: 0.05, coins: 10, text: '$0.05' },
        { value: 0.10, coins: 10, text: '$0.10'},
        { value: 0.25, coins: 10 ,text: '$0.25'},
        { value: 1.00, coins: 10, text: '$1.00'}
    ])    
    
    const [insertedMoney, setInsertedMoney] = useState(0);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [customerMoney, setCustomermoney] = useState(0);

    const initialCoinButtons = [
        { value: 0.05, coins: 10 },
        { value: 0.10, coins: 10 },
        { value: 0.25, coins: 10 },
        { value: 1.00, coins: 10 },
    ];

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

    const resetCoins = () => {
        setCoinButtons(initialCoinButtons);
    };

    const handleReturnCoin = () => {
        setCustomermoney(prev => prev + insertedMoney);
        setInsertedMoney(0);
        resetCoins();
    };

    const handleInsertedMoney = (amount) => {
        const fixedInsertedMoney = (insertedMoney.toFixed(2) * 100 + amount.toFixed(2) * 100) / 100;
        setInsertedMoney(fixedInsertedMoney);
    };

    const insertedMoneyRounded = insertedMoney.toFixed(2);

    const customerMoneyRounded = customerMoney.toFixed(2);
    const updateBadge = (coinValue) => {
        setCoinButtons((prevButtons) =>
            prevButtons.map((button) => {
                if (button.value === coinValue) {
                return { ...button, coins: button.coins - 1 };
                }
                return button;
            })
        );
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
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {coinButtons.map((coinButton) => (
                    <Grid item key={coinButton.value}>
                        <CoinMethods
                            price={coinButton.value}
                            coinCount={coinButton.coins}
                            onClick={() => handleInsertedMoney(coinButton.value)}
                            updateBadge={updateBadge}
                            text={coinButton.text}
                        />
                    </Grid>
                    ))
                }
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{ marginTop: 2 }}
            >
                <Grid item>
                    <Typography sx={{ fontSize: 20 }}>Inserted Money</Typography>
                    <Typography data-testid='inserted-money' sx={{ fontSize: 20 }}>{insertedMoneyRounded}</Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{ fontSize: 20 }}>Customer Money</Typography>
                    <Typography data-testid='customer-money' sx={{ fontSize: 20 }}>{customerMoneyRounded}</Typography>
                </Grid>
                <Grid item>
                    <Button
                        onClick={handleReturnCoin} 
                        size="large" 
                        variant="contained" 
                        disabled={insertedMoney === 0}
                        data-testid='return-money-button'
                    >
                        Return inserted money
                    </Button>
                </Grid>
            </Grid>
            {selectedProduct && <ProductSelected selectedProduct={selectedProduct} />}
        </Box>
    )
};

export default VendingMachine;

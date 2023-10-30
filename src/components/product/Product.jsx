import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = ({ item, disabled, onClick } ) => {
    const { name, price, count } = item;
    const handleProductOnClick = () =>{
        onClick(item);
    };
    
    return (
        <Card 
            sx={{ width: 250, margin: 1, background: disabled ? 'lightGray' : 'lightBlue' }}
        >
            <CardContent>
                <Typography variant="h4" color="text.primary">
                    {name}
                </Typography>
                <Typography sx={{ fontSize: 18 }}>
                    ${price}
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary">
                    {count} unit
                </Typography>
                <Button 
                    onClick={handleProductOnClick} 
                    sx={{ marginTop: 1 }} 
                    size="small" 
                    variant="contained" 
                    disabled={disabled} 
                    data-testid="get-button"
                    >
                    Get
                </Button>
            </CardContent>
        </Card>
    );
}

export default Product;

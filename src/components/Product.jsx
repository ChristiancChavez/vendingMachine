import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = ({ text, price, amount, onClick, disabled }) => {
    return (
        <Card sx={{ width: 250, margin: 1, padding: 1, background: disabled ? 'lightGray' : 'lightBlue' }}>
            <CardContent>
                <Typography variant="h4" color="text.primary" gutterBottom>
                    {text}
                </Typography>
                <Typography sx={{ fontSize: 18 }}>
                    ${price}
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary">
                    {amount} unit
                </Typography>
                <Button onClick={onClick} sx={{ marginTop: 1 }} size="small" variant="contained" disabled={disabled}>Get</Button>
            </CardContent>
        </Card>
    );
}

export default Product;

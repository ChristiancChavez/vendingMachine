import React from 'react'
import { Alert, Button, AlertTitle } from '@mui/material';

const ProductSelected = ({ selectedProduct }) => {
    return (
        <Alert 
            severity="success" 
            action={
                <Button color="inherit" size="small" data-testid="close-button">
                    Close
                </Button>
            }
        >
            <AlertTitle>
                You get this product: <strong>{selectedProduct.name}</strong>
            </AlertTitle>
        </Alert>
    )
}

export default ProductSelected;

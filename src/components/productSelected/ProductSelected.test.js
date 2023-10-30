import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better matching
import ProductSelected from './ProductSelected';

test('ProductSelected displays selected product name', () => {
    const selectedProduct = { name: 'Soda' };
    
    render(<ProductSelected selectedProduct={selectedProduct} />);

    const alertTitle = screen.getByText(/You get this product:/i);
    const productName = screen.getByText(/Soda/i);
    const closeButton = screen.getByText(/Close/i);

    expect(alertTitle).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
});

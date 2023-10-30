import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VendingMachine from './VendingMachine';

test('VendingMachine renders correctly with initial values', () => {
    render(<VendingMachine />);
    
    // Ensure the title is rendered
    const title = screen.getByText('Vending Machine');
    expect(title).toBeInTheDocument();
    
    // Ensure product cards are rendered
    const waterCard = screen.getByText('Water');
    const juiceCard = screen.getByText('Juice');
    const sodaCard = screen.getByText('Soda');
    expect(waterCard).toBeInTheDocument();
    expect(juiceCard).toBeInTheDocument();
    expect(sodaCard).toBeInTheDocument();

    // Ensure coin buttons are rendered
    const coin005Button = screen.getByTestId('coin-$0.05');
    const coin010Button = screen.getByTestId('coin-$0.10');
    const coin025Button = screen.getByTestId('coin-$0.25');
    const coin100Button = screen.getByTestId('coin-$1.00');
    expect(coin005Button).toBeInTheDocument();
    expect(coin010Button).toBeInTheDocument();
    expect(coin025Button).toBeInTheDocument();
    expect(coin100Button).toBeInTheDocument();

    // Ensure initial money values are displayed
    const insertedMoney = screen.getByTestId('inserted-money');
    const customerMoney = screen.getByTestId('customer-money');
    expect(insertedMoney).toHaveTextContent('0.00');
    expect(customerMoney).toHaveTextContent('0.00');
    
    // Ensure the "Return inserted money" button is disabled initially
    const returnMoneyButton = screen.getByTestId('return-money-button');
    expect(returnMoneyButton).toBeDisabled();
});

test('VendingMachine allows selecting a product and updating money', () => {
    render(<VendingMachine />);
    
    // Select a product (e.g., Water) and click the "Get" button
    const waterButton = screen.getByTestId('get-button-Water');
    fireEvent.click(waterButton);    
    
    // Ensure the inserted money is updated
    const insertedMoney = screen.getByTestId('inserted-money');
    expect(insertedMoney).toHaveTextContent('0.00');
    
    // Ensure the selected product is displayed
    const selectedProduct = screen.getByText('You get this product: Water');
    expect(selectedProduct).toBeInTheDocument();
    
    // Ensure the "Return inserted money" button is enabled
    const returnMoneyButton = screen.getByTestId('return-money-button');
    expect(returnMoneyButton).not.toBeDisabled();
});

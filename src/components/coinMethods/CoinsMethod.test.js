import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoinMethods from './CoinMethods';

test('CoinMethods renders with initial coin count', () => {
    const onClick = jest.fn();
    const price = 0.25;
    const coinCount = 5;

    const { getByText, getByTestId } = render(
        <CoinMethods onClick={onClick} price={price} coinCount={coinCount} />
    );

    // Assert that the price and coin count are displayed.
    expect(getByText('$0.25')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();

    // Assert that the button is not disabled.
    expect(getByTestId('coin-method-button')).not.toHaveAttribute('disabled');
});

test('CoinMethods is disabled when coin count is 0', () => {
    const onClick = jest.fn();
    const price = 0.25;
    const coinCount = 0;

    const { getByTestId } = render(
        <CoinMethods onClick={onClick} price={price} coinCount={coinCount} />
    );

    // Assert that the button is disabled when coin count is 0.
    expect(getByTestId('coin-method-button')).toHaveAttribute('disabled');
});

test('CoinMethods onClick is called when clicked', () => {
    const onClick = jest.fn();
    const price = 0.25;
    const coinCount = 5;
    
    // Mock the updateBadge function
    const updateBadge = jest.fn();

    const { getByTestId } = render(
    <CoinMethods onClick={onClick} price={price} coinCount={coinCount} updateBadge={updateBadge} />
    );

    const button = getByTestId('coin-method-button');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(updateBadge).toHaveBeenCalledWith(price);
});

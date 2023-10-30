import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Product from './Product';

test('Product component renders correctly', () => {
    const item = {
        name: 'Water',
        price: 0.65,
        count: 5,
    };
    const disabled = false;
    const onClick = jest.fn();

    const { getByText, getByTestId } = render(
        <Product item={item} disabled={disabled} onClick={onClick} />
    );

    const productName = getByText('Water');
    const productPrice = getByText('$0.65');
    const productCount = getByText('5 unit');
    const getButton = getByTestId('get-button');

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productCount).toBeInTheDocument();
    expect(getButton).toBeInTheDocument();
    expect(getButton).not.toHaveAttribute('disabled');
});

test('Product component renders correctly when disabled', () => {
    const item = {
        name: 'Water',
        price: 0.65,
        count: 0,
    };
    const disabled = true;
    const onClick = jest.fn();

    const { getByText, getByTestId } = render(
        <Product item={item} disabled={disabled} onClick={onClick} />
    );

    const productName = getByText('Water');
    const productPrice = getByText('$0.65');
    const productCount = getByText('0 unit');
    const getButton = getByTestId('get-button');

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productCount).toBeInTheDocument();
    expect(getButton).toBeInTheDocument();
    expect(getButton).toHaveAttribute('disabled');
    });

    test('Product component onClick is called when Get button is clicked', () => {
    const item = {
        name: 'Water',
        price: 0.65,
        count: 5,
    };
    const disabled = false;
    const onClick = jest.fn();

    const { getByTestId } = render(
        <Product item={item} disabled={disabled} onClick={onClick} />
    );

    const getButton = getByTestId('get-button');
    fireEvent.click(getButton);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(item);
});

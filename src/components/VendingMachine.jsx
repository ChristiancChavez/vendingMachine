// src/components/VendingMachine.js
import React, { useState } from 'react';

const VendingMachine = () => {

  const [availableItems, setAvailableItems] = useState([
    { name: 'Water', price: 0.65, count: 5 },
    { name: 'Juice', price: 1.00, count: 3 },
    { name: 'Soda', price: 1.50, count: 7 },
  ]);
  const [availableChange, setAvailableChange] = useState({
    0.05: 10,
    0.10: 10,
    0.25: 10,
    1: 10,
  });

};

export default VendingMachine;

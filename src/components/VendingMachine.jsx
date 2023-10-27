import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

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

  return (
    <div>
        <h1>Vending Machine</h1>
        <div>
        {availableItems.map((item) => (
          <div key={item.name}>
            <Button>
              {item.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )

};

export default VendingMachine;

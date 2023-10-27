import React, { useState } from 'react';
import MethodButton from '../components/MethodButton';

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

  const [insertedMoney, setInsertedMoney] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    if (insertedMoney >= item.price && item.count > 0) {
      setSelectedItem(item);
      setInsertedMoney(insertedMoney - item.price);
      const updatedItems = availableItems.map((i) =>
        i.name === item.name ? { ...i, count: i.count - 1 } : i
      );
      setAvailableItems(updatedItems);
    }
  };


  return (
    <div>
        <h1>Vending Machine</h1>
        <div>
        {availableItems.map((item) => (
          <div key={item.name}>
            <MethodButton text={item.name} disabled="disabled" onClick={handleSelectItem} />
          </div>
        ))}
      </div>
    </div>
  )

};

export default VendingMachine;

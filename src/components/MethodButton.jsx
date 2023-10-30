import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { Typography, Badge, Card } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const MethodButton = ({ onClick, disabled=false, price,initialCount, updateBadge }) => { 
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    if (count > 0) {
      setCount(count - 1);
      onClick();
      // Update the badge content
      updateBadge(price);
    }
  };

  return (
    <Card sx={{ width: 130, p: 1, m: 2, background: 'lightBlue' }}>
      <Typography variant="h6" color="black" gutterBottom>
        ${price}
      </Typography>
      <Badge sx={{marginTop: 2, marginBottom: 2 }} color="primary" overlap="circular" badgeContent={count} showZero>
        <CurrencyExchangeIcon color='action' fontSize='large' />
      </Badge>
      <Button 
        onClick={handleClick}
        variant="contained"
        disabled={disabled}
      >
        Insert Coin
      </Button>
    </Card>
  )
}

export default MethodButton;

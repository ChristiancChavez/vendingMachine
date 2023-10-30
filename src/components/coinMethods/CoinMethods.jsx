import React from 'react'
import Button from '@material-ui/core/Button';
import { Typography, Badge, Card } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const CoinMethods = ({ onClick, price, updateBadge, coinCount }) => { 

  const handleClick = () => {
    if (coinCount > 0) {
      onClick();
      updateBadge(price);
    }
  };

  const updateBadgeContent = (coinCount) => {
    if (coinCount === 0) {
      return "/";
    } else {
      return coinCount; // Show the number of coins remaining
    }
  };

  return (
    <Card sx={{ width: 130, p: 1, m: 2, background: 'lightBlue' }}>
      <Typography variant="h6" color="black" gutterBottom>
        ${price}
      </Typography>
      <Badge sx={{marginTop: 2, marginBottom: 2 }} color="primary" overlap="circular" badgeContent={updateBadgeContent(coinCount)} showZero>
        <CurrencyExchangeIcon color='action' fontSize='large' />
      </Badge>
      <Button 
        onClick={handleClick}
        variant="contained"
        disabled={coinCount === 0}
      >
        Insert Coin
      </Button>
    </Card>
  )
}

export default CoinMethods;

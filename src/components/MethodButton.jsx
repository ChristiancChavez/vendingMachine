import React from 'react'
import Button from '@material-ui/core/Button';
import { Typography, Badge, Card } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const MethodButton = ({ onClick, disabled= false, price, count }) => (
    <Card sx={{ width: 130, p: 1, m: 2, background: 'darkBlue' }}>
      <Typography variant="h6" color="white" gutterBottom>
        ${price}
      </Typography>
      <Badge sx={{marginTop: 2, marginBottom: 2 }} color="primary" overlap="circular" badgeContent={count} showZero>
        <CurrencyExchangeIcon color='action' fontSize='large' />
      </Badge>
      <Button 
        onClick={onClick}
        variant="contained"
        disabled={disabled}
      >
        Insert Coin
      </Button>
    </Card>
  )

export default MethodButton;

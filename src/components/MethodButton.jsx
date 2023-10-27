import React from 'react'
import Button from '@material-ui/core/Button';

const MethodButton = ({text, userMethod, disabled}) => {
  return (
    <Button 
        onClick={userMethod}
        variant="contained"
        disabled={disabled}
    >
      {text}
    </Button>
  )
}

export default MethodButton;

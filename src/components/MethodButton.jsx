import React from 'react'
import Button from '@material-ui/core/Button';

const MethodButton = ({text, onClick, disabled=false}) => {
  return (
    <Button 
        onClick={onClick}
        variant="contained"
        disabled={disabled}
    >
      {text}
    </Button>
  )
}

export default MethodButton;

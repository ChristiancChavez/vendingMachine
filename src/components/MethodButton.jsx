import React from 'react'
import Button from '@material-ui/core/Button';

const MethodButton = ({ text, onClick, disabled= false, subText= 0 }) => {
  return (
    <Button 
        onClick={onClick}
        variant="contained"
        disabled={disabled}
    >
      {text}
      {subText > 0 && (` $${subText}`)}
    </Button>
  )
}

export default MethodButton;

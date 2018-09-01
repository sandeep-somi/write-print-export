import React from 'react';
import { Button } from '@material-ui/core';

const FormButton = props => {
  const { clr = ''} = props;

  return (
    <Button
      {...props}
      style={{
        border: `2px solid ${clr}`,
        borderRadius: 0,
        backgroundColor: '#fff',
        color: clr,
        margin: '0px 2px'
      }}
    >
    {props.children}
    </Button>
  )
}

export default FormButton;
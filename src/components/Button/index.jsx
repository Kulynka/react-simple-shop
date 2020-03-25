import React from 'react';
import Button from '@material-ui/core/Button';

const CardButton = (props) => {
    if (props.available === true) {
        return (
            <Button variant="contained" color="primary">
                {props.buttonName}
            </Button>
        )
    } else {
      return (
        <Button variant="contained" color="primary" disabled>
            {props.buttonName}
        </Button>
      )
    }
  };
  
  export default CardButton;
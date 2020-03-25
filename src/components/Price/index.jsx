import React from 'react';
import './style.css';

const Price = (props) => {
    if (props.priceWithDiscount !== null) {
        return (
            <div>
                <s className="priceWithoutDiscount">{props.priceWithoutDiscount}</s>
                {props.priceWithDiscount}
            </div>
        )
    } else {
        return (
            <div>
                {props.priceWithoutDiscount}
            </div>
        )
    }
  };
  
  export default Price;
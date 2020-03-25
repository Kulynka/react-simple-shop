import React from 'react';
import Rating from '@material-ui/lab/Rating';
import './style.css';

export default function SimpleRating(props) {
  
    return (
      <div>
        <Rating name={props.rankingName} defaultValue={2.5} precision={0.5} />
      </div>
    );
  }
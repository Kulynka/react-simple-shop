import React from 'react';
import './style.css';

const Comments = (props) => {
  if (props.amount === 1) {
    return <p>1 відгук</p>
  } else if (props.amount === 2 || props.amount === 3 || props.amount === 4) {
    return <p>{props.amount} відгуки</p>
  } else {
      return <p>{props.amount} відгуків</p>
  }
};

export default Comments;


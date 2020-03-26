import React from 'react';
import './cart.css';

export default () => {
  return (
    <div className="Cart">
      <header>
        <div className="cart-title-wrapper">
        <h2>Корзина</h2>
        <span class="closeCart"><a href="/">&times;</a></span>
        </div>
      </header>
      <main>
        <div className="cart-product-wrapper">
          
        </div>
      </main>
      

      <a href="/">to home</a>
    </div>
  )
}
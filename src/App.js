import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
// Components
import ProductCard from './components/product-card/index';
import Cart from './components/Cart/cart';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductCard/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
      </Switch>
    </Router>
  );
}

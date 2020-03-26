import React from 'react';
import './home.css';
//Material-designe
import Card from '@material-ui/core/Card';
//Data
import products from '../data/data';
// Components
import Available from '../components/available/available';
import NotAvailable from '../components/not-available/not-available';
import Comments from '../components/Comments/index';
import Button from '../components/Button/index';
import Price from '../components/Price/index';
import Raiting from '../components/Rating/index';
import cartImg from '../img/cart.png';

function ProductCard(props){
    return (
        <div className="product-card-container">
            <header>
                <ul>
                    <li><a href="/cart"><img src={cartImg} alt=""/></a></li>
                </ul>
            </header>
            {products.map((product, index) => 
                <Card className="card" key={index}>
                    <div key={product.name}>
                        <img src={product.productImage} alt='' className="card-image"/>
                        <h4 className="card-product-name">{product.productName}</h4>
                        <div>{ product.available ? <Available/> : <NotAvailable/> }</div>
                        <p className="product-code">Код товару: {product.productCode}</p>
                        <div>
                            <div className="product-rating">
                                <Raiting rankingName={product.productName}/>
                            </div>
                            <div>
                                <a href=""><Comments amount={product.amountComments}/></a>
                            </div>
                        </div>
                        <div>
                            <Price 
                                priceWithDiscount={product.discount} 
                                priceWithoutDiscount={product.price}
                            />
                        </div>
                        <div>
                            <Button buttonName="Купити" available={product.available}/>
                        </div>
                    </div>
                </Card>
            )}
        </div>
    )
}

export default ProductCard;
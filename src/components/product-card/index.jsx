import React from 'react';
import './style.css';
//Material-designe
import Card from '@material-ui/core/Card';
//Data
import products from '../../data/data';
// Components
import Available from '../available/available';
import NotAvailable from '../not-available/not-available';
import Comments from './../Comments/index';
import Button from './../Button/index';
import Price from './../Price/index';
import Raiting from './../Rating/index';

function ProductCard(props){
    return (
        <div className="product-card-container">
            {products.map(product => 
                <Card className="card">
                    <div key={product.name}>
                        <img src={product.productImage} alt='' className="card-image"/>
                        <h4 className="card-product-name">{product.productName}</h4>
                        <p>{ product.available ? <Available/> : <NotAvailable/> }</p>
                        <p className="product-code">Код товару: {product.productCode}</p>
                        <div>
                            <div className="product-rating">
                                <Raiting rankingName={product.productCode}/>
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
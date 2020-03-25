import React from 'react';
import './style.css';
import Card from '@material-ui/core/Card';

import products from './../../data/data';

import Available from '../available/available';
import NotAvailable from '../not-available/not-available';

function ProductCard(props){
    return (
        <div>
            {products.map(product => 
                <Card className="card">
                    <div key={product.name}>
                        <img src={product.productImage} alt='' className="card-image"/>
                        <p className="card-product-name">{product.productName}</p>
                        <p>{ product.available ? <Available/> : <NotAvailable/> }</p>
                    </div>
                </Card>
            )}
        </div>
    )
}

export default ProductCard;
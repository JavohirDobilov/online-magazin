import React from 'react'
import "../ProductCard/productCard.css";
import like from '../../img/like3.svg';
import product1 from '../../img/rectangle.png';

const ProductCard = () => {
    return (
        <div className='product-card'>
            <div className='card'>
                <div className='product-card-novinka'>
                    Новинка
                </div>
                <div className='product-icon-favorite'>
                    <img src={like} />
                </div>
                <div className='product-image'>
                    <img src={product1} />
                </div>
            </div>
            <div className='product-title'>

            </div>
        </div>
    )
}

export default ProductCard
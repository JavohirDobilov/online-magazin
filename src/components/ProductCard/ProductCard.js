import React from 'react'
import "../ProductCard/productCard.css";
import like from '../../img/like3.svg';
import product1 from '../../img/rectangle.png';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ProductCard = ({ product }) => {
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
                    <img src={product.image} />
                </div>
                <div className="product-stars">
                    <StarBorderIcon style={{ fill: '#ffc478' }} />
                    <StarBorderIcon style={{ fill: '#ffc478' }} />
                    <StarBorderIcon style={{ fill: '#ffc478' }} />
                    <StarBorderIcon style={{ fill: '#ffc478' }} />
                    <StarBorderIcon style={{ fill: '#cdd0cb' }} />
                </div>
            </div>
            <div className='product-title'>
                {product.title}
            </div>
            <div className='product-prices'>
                <div className='product-price'>
                    {product.price}
                </div>
                {product.oldPrice &&
                    <div className='product-oldprice'>
                        {product.oldPrice}
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductCard
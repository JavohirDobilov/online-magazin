import React from 'react'
import "../ProductCard/productCard.css";
import like from '../../img/like3.svg';
import cart from '../../img/Buy 2.svg';
import product1 from '../../img/rectangle.png';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch } from "react-redux"
import { addProduct } from '../../redux/actions/productAction';
import ProductsList from '../../pages/ProductsList/ProductsList';

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()


    // const handleClick=(e) =>{
    //     e.stopPagination();
    //     dispatch(addProduct(product))
    // }
    return (
        <div className='product-card'>
            <div className='card'>
                <div className='product-card-novinka'>
                    Новинка
                </div>
                <div className='product-icon-favorite'>
                    <img src={like} />
                </div>
                <div onClick={() => dispatch(addProduct(product))} className='product-icon-cart'>
                    <img src={cart} />
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
                <div className='product-title-row'>
                    {product.companiy}
                </div>


            </div>
            <div className='product-prices'>
                <div className='product-price'>
                    {product.price} ₽
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
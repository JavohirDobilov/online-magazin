import React from 'react'
import "../ProductsList/productsList.css"
import ProductFilterBar from '../../components/ProductFilterBar/ProductFilterBar'

const ProductsList = () => {
  return (
    <div className='productlist'>
        <div className='container'>
            <ProductFilterBar/>
        </div>
    </div>
  )
}

export default ProductsList
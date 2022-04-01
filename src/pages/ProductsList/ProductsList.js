import React from 'react'
import "../ProductsList/productsList.css"
import xitpro4 from "../../img/xitpro/3.png"

import ProductFilterSidebar from '../../components/ProductFilterBar/ProductFilterBar'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useState } from "react"

const ProductsList = () => {

  const [filtersCheck, setFiltersCheck] = useState([])

 console.log(filtersCheck);
  const handleCheck = (item,filtersCheck)=>{
    
    if(filtersCheck.includes(item)){
      const newFiltersCheck = [...filtersCheck]
      const index = newFiltersCheck.indexOf(item)
      newFiltersCheck.splice(index,1)
      setFiltersCheck(newFiltersCheck)
    }else{
      setFiltersCheck([...filtersCheck,item])
    }
  }

  const products = [
    {
      id: 1,
      image: "https://pngimg.com/uploads/refrigerator/refrigerator_PNG101555.png",
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽",
      oldPrice: "40 990 ₽"
    },
    {
      id: 2,
      image: "https://pngimg.com/uploads/refrigerator/refrigerator_PNG101546.png",
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽"
    },
    {
      id: 3,
      image: "https://pngimg.com/uploads/refrigerator/refrigerator_PNG101536.png",
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽",
      oldPrice: "40 990 ₽"
    },
    {
      id: 4,
      image: "https://pngimg.com/uploads/refrigerator/refrigerator_PNG9048.png",
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽"
    }, {
      id: 5,
      image: "https://pngimg.com/uploads/refrigerator/refrigerator_PNG9046.png",
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽",
      oldPrice: "40 990 ₽"
    }, {
      id: 6,
      image: "https://pngimg.com/uploads/refrigerator/refrigerator_PNG9044.png",
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽"
    }, {
      id: 7,
      image: "https://pngimg.com/uploads/refrigerator/refrigerator_PNG9042.png",
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽"
    },
    {
      id: 8,
      image: "https://pngimg.com/uploads/refrigerator/refrigerator_PNG9041.png",
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽",
      oldPrice: "40 990 ₽"
    },
    {
      id: 9,
      image:"https://pngimg.com/uploads/refrigerator/refrigerator_PNG9033.png",
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽"
    },
    {
      id: 10,
      image: "https://pngimg.com/uploads/refrigerator/refrigerator_PNG9028.png",
      title: 'Диван "Ergonomic Rubber Shoes”',
     
      price: "35 990 ₽"
    },
    {
      id: 11,
      image: " https://pngimg.com/uploads/refrigerator/refrigerator_PNG101553.png",
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽",
      oldPrice: "40 990 ₽"
    },
    
  ];

  return (
    <div className='productlist'>
      <div className='container'>
        <div className='row-product-sidebar'>
          <div className='left-row'>
            <ProductFilterSidebar state={filtersCheck} handleCheck={handleCheck}/>
          </div>

          <div className='right-row'>
            {products.map(item => (
              <div key={item.id} className='products-container-full'>
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsList
import React, { useMemo } from 'react'
import "../ProductsList/productsList.css"
import { filteredProducts } from '../../utils/filterSortProducts'


import ProductFilterSidebar from '../../components/ProductFilterBar/ProductFilterBar'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useState, useEffect} from "react"
import axios from 'axios'

const ProductsList = () => {

  const [products, setProducts] = useState([])
  
  const [vid,setVid] = useState([])
  const [companies, setCompanies] = useState([])
  const [cameras,setCameras] = useState([])

  const [vidFilter,setVidFilter] = useState([])
  const [companiesFilter, setCompaniesFilter] = useState([])
  const [camerasFilter,setCamerasFilter] = useState([])

  async function getData (){
    await axios.get("https://amock.io/api/Javohirlal./xolodil")
    .then(response => {
      setProducts(response.data.products)
      setCameras(response.data.cameras)
      setVid(response.data.vids)
      setCompanies(response.data.companies)
      // console.log(response.data.cameras)
      // console.log(response.data)
    })
  }

  useEffect(() =>{
    getData()
  },[])

 


  const handleCompaniesCheck = (item,companiesFilter)=>{
    
    if(companiesFilter.includes(item)){
      const newFiltersCheck = [...companiesFilter]
      const index = newFiltersCheck.indexOf(item)
      newFiltersCheck.splice(index,1)
      setCompaniesFilter(newFiltersCheck)
    }else{
      setCompaniesFilter([...companiesFilter,item])
    }
  }
  const handleVidCheck = (item,vidFilter)=>{
    
    if(vidFilter.includes(item)){
      const newFiltersCheck = [...vidFilter]
      const index = newFiltersCheck.indexOf(item)
      newFiltersCheck.splice(index,1)
      setVidFilter(newFiltersCheck)
    }else{
      setVidFilter([...vidFilter,item])
    }
  }
  const handleCamerasCheck = (item,camerasFilterk)=>{
    
    if(camerasFilter.includes(item)){
      const newFiltersCheck = [...camerasFilter]
      const index = newFiltersCheck.indexOf(item)
      newFiltersCheck.splice(index,1)
      setCamerasFilter(newFiltersCheck)
    }else{
      setCamerasFilter([...camerasFilter,item])
    }
  }

  const filterCheck = {
    handleCamerasCheck, 
    handleVidCheck,
    handleCompaniesCheck,
    vidFilter, camerasFilter, companiesFilter,
    vid, cameras, companies
    
  }


  
  const filterPro  = useMemo(
    () => filteredProducts(products,vidFilter,companiesFilter,camerasFilter)
  ,[products,vidFilter,companiesFilter,camerasFilter])

  return (
    <div className='productlist'>
      <div className='container'>
        <div className='row-product-sidebar'>
          <div className='left-row'>
            <ProductFilterSidebar {...filterCheck}/>
          </div>

          <div className='right-row'>
            {filterPro.map(item => (
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
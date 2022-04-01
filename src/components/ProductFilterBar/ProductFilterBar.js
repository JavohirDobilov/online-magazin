import React from 'react'
import { useState } from "react"
import "../ProductFilterBar/productFilterBar.css"
import CheckIcon from '@mui/icons-material/Check';
import { BiCheck } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";




const ProductFilterSidebar = (...props) => {
    const {handleCamerasCheck, handleVidCheck,handleCompaniesCheck,} = props[0]
    const {vid,cameras,companies} = props[0]
    const {vidFilter, camerasFilter, companiesFilter} = props[0]
   


   

    
    // console.log(inputValue)

    return (
        <div className='products-filtered'>
            <div className='products-filtered-box'>
                <div className='filtered-brand'>
                    <div className='filtered-brand-title'>
                        Производитель ({companies.length})
                    </div>
                    <div className='brand-dropdown'>
                        <img src='' />
                    </div>

                    {companies.map(item => (
                        <div key={item} className='brand-checklist'>
                            <div onClick={()=>handleCompaniesCheck(item,companiesFilter)} className={(companiesFilter?.includes(item) && "active")+(" brand-check")}>
                                <BiCheck color="white" />
                            </div>
                            <div className='brand-name'>
                                {item}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='products-vid'>
                    <div className='products-filterd-title'>
                        Вид холодильника ({vid.length})
                    </div>
                    {vid.map(item => (
                        <div key={item} className='brand-checklist'>
                            <div onClick={()=>handleVidCheck(item,vidFilter)} className={(vidFilter?.includes(item) && "active") + (" brand-check")}>
                                <BiCheck color="white"/>
                            </div>
                            <div className='brand-name'>
                                {item}
                            </div>
                        </div>
                    ))}

                </div>


                <div className='products-kamera'>
                    <div className='products-filterd-title'>
                        Морозильная камера ({cameras.length})
                    </div>
                    {cameras.map(item => (
                        <div key={item} className='brand-checklist'>
                            <div onClick={()=>handleCamerasCheck(item,camerasFilter)} className={(camerasFilter?.includes(item) && "active")+(" brand-check")}>
                                <BiCheck color="white" />
                            </div>
                            <div className='brand-name'>
                                {item}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProductFilterSidebar
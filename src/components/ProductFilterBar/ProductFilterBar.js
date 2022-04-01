import React from 'react'
import { useState } from "react"
import "../ProductFilterBar/productFilterBar.css"
import CheckIcon from '@mui/icons-material/Check';
import { BiCheck } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";




const ProductFilterSidebar = ({state,handleCheck}) => {

    const brendOptions = ["Atlant", "Samsung", "LG", "Persone", "Liebherr"]
    const vid = ['С морозильной камерой', 'Без морозильной камеры']
    const camera = ["Сбоку", "Снизу", "Сверху", "Отсутствует"]


   

    
    // console.log(inputValue)

    return (
        <div className='products-filtered'>
            <div className='products-filtered-box'>
                <div className='filtered-brand'>
                    <div className='filtered-brand-title'>
                        Производитель (245)
                    </div>
                    <div className='brand-dropdown'>
                        <img src='' />
                    </div>

                    {brendOptions.map(item => (
                        <div key={item} className='brand-checklist'>
                            <div onClick={()=>handleCheck(item,state)} className={(state?.includes(item) && "active")+(" brand-check")}>
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
                        Вид холодильника (245)
                    </div>
                    {vid.map(item => (
                        <div key={item} className='brand-checklist'>
                            <div onClick={()=>handleCheck(item,state)} className={(state?.includes(item) && "active") + (" brand-check")}>
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
                        Морозильная камера 
                    </div>
                    {camera.map(item => (
                        <div key={item} className='brand-checklist'>
                            <div onClick={()=>handleCheck(item,state)} className={(state?.includes(item) && "active")+(" brand-check")}>
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
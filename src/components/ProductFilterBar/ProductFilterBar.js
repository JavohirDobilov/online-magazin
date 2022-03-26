import React from 'react'
import { useState } from "react"
import "../ProductFilterBar/productFilterBar.css"
import CheckIcon from '@mui/icons-material/Check';
import { BiCheck } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import 'antd/dist/antd.css';
import { Slider, InputNumber, Col } from 'antd';


const ProductFilterBar = () => {

    const brendOptions = ["Atlant", "Samsung", "LG", "Persone", "Liebherr"]


    const [inputValue, setInputValue] = useState({ min: 0, max: 0 })

    const handleChange = (value) => {
        setInputValue({ min: value[0], max: value[1] })
    }
    console.log(inputValue)

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
                            <div className='brand-check'>
                                <BiCheck color="white" />
                            </div>
                            <div className='brand-name'>
                                {item}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='products-pricing'>
                    <div className='products-pricing-title'>
                        Цена
                    </div>
                    <Col span={4}>
                        <Slider
                            min={1}
                            max={100000}
                            onChange={handleChange}
                            range defaultValue={[0, 1000000]}

                        />

                    </Col>
                    <div className='limit-value-pricing'>
                        oт {inputValue.min} ruble
                        <br></br>
                        до {inputValue.max} ruble

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductFilterBar
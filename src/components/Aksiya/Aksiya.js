import React from 'react'
import "../Aksiya/aksiya.css"
import aksiyaImg from "../../img/xitpro/AppleNaushnik.png"
import arrow from "../../img/arrow.svg"

const Aksiya = () => {
    return (
        <div className='aksiya'>
            <div className='aksiya-box'>
                <div className='aksiya-row'>
                    <div className='aksiya-content'>
                        <div className='aksiya-title'>
                            Акции
                        </div>
                        <div className='aksiya-text'>
                            Apple Airpods
                            Denim White color   
                        </div>
                        <div className='aksiya-button'>
                            Показать Все
                            <img src={arrow} />
                        </div>
                    </div>
                    <div className='aksiya-image'>
                        <img src={aksiyaImg} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aksiya
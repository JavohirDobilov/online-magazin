import React from 'react'
import "../Aksiya/aksiya.css"
import aksiyaImg from "../../img/image 8.svg"
import arrow from "../../img/arrow.svg"

const Aksiya = () => {
    return (
        <div className='aksiya'>
            <div className='aksiya-box'>
                <div className='aksiya-row'>
                    <div className='aksiya-content'>
                        <div className='aksiya-title'>
                            Коллекция
                        </div>
                        <div className='aksiya-text'>
                            Новый Стул
                            Denim Green
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
import React, { useState } from 'react'
import "../HomePage/homePage.css"
import Aksiya from "../../components/Aksiya/Aksiya"
import Banner from "../../components/Banner/Banner"
import ProductCard from '../../components/ProductCard/ProductCard'

import image2 from "../../img/image 2.png"
import image3 from "../../img/image 3.png"
import image4 from "../../img/image 4.png"
import image5 from "../../img/image 5.png"
import image6 from "../../img/image 6.png"
import image7 from "../../img/image 7.png"
import prev from "../../img/left2.svg"
import next from "../../img/left3.svg"
// import xitpro1 from "../../img/xitpro/1.png"
import xitpro2 from "../../img/xitpro/2.png"
import xitpro3 from "../../img/xitpro/3.png"
import xitpro4 from "../../img/xitpro/3.png"
import Podrasilka from '../../components/PodRasilkaFooter/Podrasilka'

const HomePage = () => {
    const [xitpage, setXitPage] = useState(1)

    const [newpage, setNewPage] = useState(1)

    const xitprodaj = [
        {
            id: 1,
            image: xitpro3,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽",
            oldPrice: "40 990 ₽"
        },
        {
            id: 2,
            image: xitpro3,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        },
        {
            id: 3,
            image: xitpro3,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽",
            oldPrice: "40 990 ₽"
        },
        {
            id: 4,
            image: xitpro3,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        }, {
            id: 5,
            image: xitpro3,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽",
            oldPrice: "40 990 ₽"
        }, {
            id: 6,
            image: xitpro3,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        }, {
            id: 7,
            image: xitpro3,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        },
        {
            id: 8,
            image: xitpro3,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽",
            oldPrice: "40 990 ₽"
        },
        {
            id: 9,
            image: xitpro3,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        },
        {
            id: 10,
            image: xitpro3,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        }
    ];

    const newprodaj = [
        {
            id: 1,
            image: xitpro4,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽",
            oldPrice: "40 990 ₽"
        },
        {
            id: 2,
            image: xitpro4,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        },
        {
            id: 3,
            image: xitpro4,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽",
            oldPrice: "40 990 ₽"
        },
        {
            id: 4,
            image: xitpro4,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        }, {
            id: 5,
            image: xitpro4,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽",
            oldPrice: "40 990 ₽"
        }, {
            id: 6,
            image: xitpro4,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        }, {
            id: 7,
            image: xitpro4,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        },
        {
            id: 8,
            image: xitpro4,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽",
            oldPrice: "40 990 ₽"
        },
        {
            id: 9,
            image: xitpro4,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        },
        {
            id: 10,
            image: xitpro4,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        }
    ];


    const sliderXitbody = {
        width: `${(100 / 5) * xitprodaj.length}%`,
        display: 'flex',
        transform: `translateX(-${100 * (xitpage - 1) / xitprodaj.length}%)`,
        transition: 'all 0.4s ease'
    }
    const sliderNewbody = {
        width: `${(100 / 5) * newprodaj.length}%`,
        display: 'flex',
        transform: `translateX(-${100 * (newpage - 1) / xitprodaj.length}%)`,
        transition: 'all 0.4s ease'

    }
    const sliderXitItem = {
        width: `${(100 / xitprodaj.length)}%`,
    }
    const sliderNewItem = {
        width: `${(100 / xitprodaj.length)}%`,
    }





    return (
        <div className='home'>
            <div className='container'>

                <Banner />
                <div className='home-catalog-title'>
                    Каталог
                </div>
               


                <div className='home-xit-prodaj'>
                    <div className='home-xit-prodaj-title'>
                        Хиты продаж
                        <div className='home-next-prev'>
                            <div className='home-next-1' onClick={() => xitpage > 1 && setXitPage(xitpage - 1)}>
                                <img src={prev} />
                            </div>
                            <div className='home-prev-1' onClick={() => xitpage < xitprodaj.length - 6 && setXitPage(xitpage + 1)}>
                                <img src={next} />
                            </div>

                        </div>
                    </div>

                    <div className='home-xit-prodaj-slider'>
                        <div style={sliderXitbody}>
                            {xitprodaj.map(item => (
                                <div style={sliderXitItem} key={item.id} className="home-xit-prodaj-slider-item">
                                    <ProductCard product={item} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div className='home-aksiya-content'>
                    <div className='home-aksiya-content-title'>
                        Новости и акции
                    </div>
                    <div className='home-aksiya-content-box'>
                        <div className='home-aksiya-content-box-1'>
                            <Aksiya />
                        </div>
                    </div>
                </div>

                <div className='home-xit-prodaj'>
                    <div className='home-xit-prodaj-title'>
                        Наши Новинки
                        <div className='home-next-prev'>
                            <div className='home-next-1' onClick={() => newpage > 1 && setNewPage(newpage - 1)}>
                                <img src={prev} />
                            </div>
                            <div className='home-prev-1' onClick={() => newpage < xitprodaj.length - 6 && setNewPage(newpage + 1)}>
                                <img src={next} />
                            </div>

                        </div>
                    </div>
                    <div className='home-xit-prodaj-slider'>
                        <div style={sliderNewbody}>
                            {newprodaj.map(item => (
                                <div style={sliderNewItem} key={item.id} className="home-xit-prodaj-slider-item">
                                    <ProductCard product={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

               

                <Podrasilka/>

            </div>
           
        </div>
    )
}

export default HomePage
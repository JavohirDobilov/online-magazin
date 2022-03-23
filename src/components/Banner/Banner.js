import React, { useState } from 'react'
import "../Banner/banner.css"
import slider1 from "../../img/bannerItem3.jpg"
import slider2 from "../../img/ban.jpeg"
import prev from "../../img/left2.svg"
import next from "../../img/left3.svg"

const Banner = () => {

  const [page, setPage] = useState(1)
  const bannerItems = [
    {
      id: 1,
      title: "Финальная распродажа",
      text: "Только 30 моделей можно забрать домой со скидкой до 45%",
      image: slider1
    },
    {
      id: 2,
      title: "Финальная распродажа",
      text: "Только 30 моделей можно забрать домой со скидкой до 45%",
      image: slider2
    },
    {
      id: 3,
      title: "Финальная распродажа",
      text: "Только 30 моделей можно забрать домой со скидкой до 45%",
      image: slider1
    },
    {
      id: 4,
      title: "jФинальная распродажа",
      text: "Только 30 моделей можно забрать домой со скидкой до 45%",
      image: slider2
    },
    {
      id: 5,
      title: "Финальная распродажа",
      text: "Только 30 моделей можно забрать домой со скидкой до 45%",
      image: slider1
    },
    {
      id: 6,
      title: "Финальная распродажа",
      text: "Только 30 моделей можно забрать домой со скидкой до 45%",
      image: slider2
    },

  ]

  const bannerBody = {
    width: `${100 * bannerItems.length}%`,
    display: 'flex',
    transform: `translateX(-${100 * (page - 1) / bannerItems.length}%)`,
    transition: 'all 0.4s ease'
  }
  const bannerItem = {
    width: `${100 / bannerItems.length}%`,
    height: `400px`
  }
  return (
    <div>
      <div className='banner-items'>
        <div style={bannerBody} className='banner-body'>
          {bannerItems.map(item => (
            <div style={bannerItem} key={item.id} className='banner-item'>
              <div className='banner-item-body'>
                <div className='banner-image'>
                  <img src={item.image} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='circle-button'>
          {bannerItems.map(item => (
            <button onClick={() => setPage(item.id)} className={(page === item.id && 'active') + (' btn')}></button>
          ))}
        </div>
        <div className='banner-prev-next-slider'>
          <div className='banner-prev'>
            <button className="banner-prev-style" onClick={() => page > 0 && setPage(page - 1)}>
              <div className='banner-prev-icon'>
                <img src={prev} />
              </div>
            </button>
          </div>
          <div className='banner-next'>
            <button className="banner-next-style" onClick={() => page < bannerItems.length && setPage(page + 1)}>
              <div className='banner-prev-icon'>
                <img src={next} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
import React from 'react'
import "../PodRasilkaFooter/podrasilka.css"
import podIcon1 from "../../img/messagePodpis.svg"
import podIcon2 from "../../img/pospisadMessage2.svg"

const Podrasilka = () => {
  return (
    <div className='podrasilka'>
      <div className='podrasilka-box'>
        <div className='pod-icon1'>
          <img src={podIcon1} />
        </div>
        <div className='pod-icon2'>
          <img src={podIcon2} />
        </div>
        <div className='podrasilka-title'>
          <div className='podrasilka-title1'>
            Подпишитесь на рассылку
          </div>
          <div className='podrasilka-title2'>
            Узнавайте первыми о выгодных предложениях !
          </div>
        </div>

        <div className='podrasilka-box-input'>
          <div className='podrasilka-input'>
            <input type="email" placeholder='  Введите e-mail' />
          </div>
          <div className='podrasilka-box-input-content'>
            вы принимаете условия обработки персональных данных
          </div>
        </div>
        <div className='podrasilka-podpisatsiya-boxs'>
          <div className='podrasilka-click'>
            Подписаться
          </div>
          <div className='podpisatsiya-title'>
            Подписаться
          </div>
        </div>
      </div>
    </div>
  )
}

export default Podrasilka
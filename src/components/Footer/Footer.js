import React from 'react'
import "../Footer/footer.css"
import logo from '../../img/logo2.svg';
import call from '../../img/Call.svg';
import location from '../../img/Location.svg';
import message from '../../img/message.svg';
import instagram from '../../img/Group (3).svg';
import facebook from "../../img/Subtract (1).svg";
import twitter from "../../img/Vector (1).svg";
import youtube from "../../img/Vector (2).svg";
import telegram from "../../img/Subtract.svg";
import footermap from "../../img/map.png";
import payments from "../../img/payments.svg"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-link'>
          <div className='footer-link-1'>
            <div className='footer-link-1-logo'>
              <img src={logo} />
            </div>
            <div className='footer-link-tel'>
              <img src={call} />
              <div className='footer-limk-tel-num'>
                +38093-717-29-29
              </div>
            </div>
            <div className='footer-link-mail'>
              <img src={message} />
              <div className="footer-link-mail-text">
                kharkivmebelinfo@gmail.com
              </div>
            </div>
            <div className='footer-link-location'>
              <img src={location} />
              <div className='footer-link-location-text'>
                Харьков
              </div>
            </div>
            <div className='footer-link-socials'>
              <div className='footer-social-row'>
                <img src={instagram} />
                <img src={facebook} />
                <img src={twitter} />
                <img src={youtube} />
                <img src={telegram} />
              </div>
            </div>
          </div>

          <div className='footer-link-1'>
            <div className='footer-link-text-1'>
              Наш магазин
            </div>
            <div className='footer-link-text-2'>
              О магазине
            </div>
            <div className='footer-link-text-2'>
              Наши вакансии
            </div>
            <div className='footer-link-text-2'>
              Контакты
            </div>
            <div className='footer-link-text-2'>
              Мебель в рассрочку
            </div>
            <div className='footer-link-text-2'>
              Бренды
            </div>
            <div className='footer-link-text-2'>
              Возврат товара
            </div>
            <div className='footer-link-text-2'>
              Сертификаты
            </div>
            <div className='footer-link-text-2'>
              Обзоры
            </div>
          </div>

          <div className='footer-link-1'>
            <div className='footer-link-text-1'>
              Сервис
            </div>
            <div className='footer-link-text-2'>
              Доставка и оплата
            </div>
            <div className='footer-link-text-2'>
              Сборка мебели
            </div>
            <div className='footer-link-text-2'>
              Хочу в подарок
            </div>
            <div className='footer-link-text-2'>
              Мебель в рассрочку
            </div>
            <div className='footer-link-text-2'>
              Список сравнения
            </div>
            <div className='footer-link-text-2'>
              Карта сайта
            </div>
          </div>

          <div className='footer-link-1'>
            <div className='footer-link-text-1'>
              Помощь
            </div>
            <div className='footer-link-text-2'>
              Статьи
            </div>
            <div className='footer-link-text-2'>
              Вопрос ответ
            </div>
            <div className='footer-link-text-2'>
              Производители
            </div>

          </div>

          <div className='footer-map'>
            <div className='footer-map-title'>
              Как найти нас ?
            </div>
            <div className='footer-map-png'>
              <img src={footermap} />
            </div>
          </div>
        </div>

        <div className='footer-liner'>

        </div>

        <div className='footer-copyryter'>
          <div className='footer-copyryter'>
            ©"Kharkivmebel, 2005 - 2021.
          </div>
          <div className='footer-payments'>
            <img src={payments} />
          </div>
          <div className='footer-create-text'>
            Created & Powered by
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
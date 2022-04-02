import React, { useState } from "react";
import truck from "../../img/truck.svg";
import message from '../../img/message.svg';
import location from '../../img/Location.svg';
import logo from '../../img/logoExp.svg';
import menu from '../../img/menu.svg';
import search from '../../img/searches.svg';
import like from '../../img/like.svg';
import cart from '../../img/Buy 2.svg';
import user from '../../img/Profile 1.svg';
import '../Header/header.css';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




const Header = ({ scroll }) => {

    const [navbtn, setNavBtn] = useState(1);

   






    const items = useSelector(state=>state.productsAll.cart)
    const quantity = items.reduce((cc,item) =>cc+=+item.number,0)
   
    return (
        <div className="header">

            <div className="header-one">
                <div className="header_notification">

                    <div className="header-icon-truck">
                        <img src={truck} />
                    </div>
                    <div className="header-truck-text">Доставка и сборка по Украину бесплатно! </div>

                </div>
            </div>

            {/* <div className="header-two">
                    <div className="container">
                        <div className="header_location">
                            <div className="header-location-text">kharkivmebel - интернет-магазин качественной мебели</div>
                            <div className="location-h">
                                <div className="header-icon-location">
                                    <img src={location} />
                                </div>
                                <div className="header-location-icon-title">Харьков</div>
                                <div className="header-icon-message">
                                    <img src={message} />
                                </div>
                                <div className="header-location-message-title">kharkivmebelinfo@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
          */}

            {scroll ?
                <div className="header-scroll">
                    <div className="header-three">

                        <div className="container">
                            <div className="header-three-flex">
                                <div className="header-three-logo">
                                    <img src={logo} />
                                </div>
                                <Link to="/products">
                                <div className=" header-katalog-btn">
                                    <img src={menu} />
                                   <div className="catalog-menu-title">Каталог</div>
                                </div>
                                </Link>
                                <div className="header-search">
                                    <input type="text" />
                                    <img src={search} />
                                </div>
                                <div className="header-tel">
                                    +38093-717-29-29
                                </div>

                                <Badge badgeContent={1} color="primary">
                                    <div className="header-icon-favorite">
                                        <img src={like} />
                                    </div>
                                </Badge>
                                <Badge badgeContent={quantity} color="primary">
                                    <div className="header-icon-cart">
                                    <Link to="/cart"><img src={cart} /></Link>
                                    </div>
                                </Badge>
                                <div className="header-icon-user">
                                    <img src={user} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="header-three">

                    <div className="container">
                        <div className="header-three-flex">
                            <div className="header-three-logo">
                                <img src={logo} />
                            </div>
                            <Link to="/products">
                                <div className=" header-katalog-btn">
                                    <img src={menu} />
                                   <div className="catalog-menu-title">Каталог</div>
                                </div>
                                </Link>
                            <div className="header-search">
                                <input type="text" />
                                <img src={search} />
                            </div>
                            <div className="header-tel">
                                +38093-717-29-29
                            </div>

                            <Badge badgeContent={1} color="primary">
                                <div className="header-icon-favorite">
                                    <img src={like} />
                                </div>
                            </Badge>
                            <Badge badgeContent={quantity} color="primary">
                                <div className="header-icon-cart">
                                    <Link to="/cart"><img src={cart} /></Link>
                                </div>
                            </Badge>
                            <div className="header-icon-user">
                                <img src={user} />
                            </div>
                        </div>
                    </div>
                </div>
                
            }

            <div className="header-fourth">
                <div className="container">
                    <div className="navbar-link">
                        <div onClick={() => setNavBtn(1)} className={(navbtn === 1 && ("active") + (" nav-link"))}>
                            <Link to="/" >Главная</Link>
                        </div>
                        <div onClick={() => setNavBtn(2)} className={(navbtn === 2 && ("active") + (" nav-link"))}>
                            <Link to="" >Про нас</Link>
                        </div>
                        <div onClick={() => setNavBtn(3)} className={(navbtn === 3 && ("active") + (" nav-link"))}>
                            <Link to="">Техника под заказ</Link>
                        </div>
                        <div onClick={() => setNavBtn(4)} className={(navbtn === 4 && ("active") + (" nav-link"))}>
                            <Link to="">Шкафы купе</Link>
                        </div>
                        <div onClick={() => setNavBtn(5)} className={navbtn === 5 && ("active") + (" nav-link")}>
                            <Link to="">Доставка і оплата</Link>
                        </div>
                        <div onClick={() => setNavBtn(6)} className={(navbtn === 6 && ("active") + (" nav-link"))}>
                            <Link to="">Контакты</Link>
                        </div>
                        <div onClick={() => setNavBtn(7)} className={(navbtn === 7 && ("active") + (" nav-link"))}>
                            <Link to="">Письмо директору</Link>
                        </div>
                        <div onClick={() => setNavBtn(8)} className={(navbtn === 8 && ("active") + (" nav-link"))}>
                            <Link to="">Бренды</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
import React, { useEffect } from 'react'
import "../MyOrdersPage/ordersPage.css"
import img from "../../img/xitpro/product1.png"
import removeIcon from "../../img/xitpro/removeIcon.svg"
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, numberDec, numberInc } from '../../redux/actions/productAction';
import FlipMove from 'react-flip-move';



const OrdersPage = () => {


  const dispatch = useDispatch()


  useEffect(()=>{

  },[])

  const orderItems = useSelector(state => state.productsAll.cart)
  console.log(orderItems)

  const totalPrice = orderItems.reduce((acc, item) => acc += +item.price * item.number, 0)

  console.log(totalPrice)


  console.log(orderItems)
  return (
    <div className='order-page'>
      <div className='container'>
        <div className='order-page-title'>
          Корзина
        </div>
        <div className='order-page-row'>

          <div className="order-page-left">
            <FlipMove>
              {orderItems.map(item => (

                <div key={item.id} className='order-page-left-card-position'>
                  <div className='order-page-card'>
                    <div className='order-page-card-image-product-title'>
                      <img src={img} />
                      <div className='order-page-card-product-title'>
                        Холодильник Electrolux EWH 80 Formax
                        <div className='product-title-past'>
                          Код товара: 519868.0
                        </div>
                      </div>
                    </div>
                    <div className='order-page-product-inc-dec'>
                      <div onClick={() => dispatch(numberDec(item))} className='order-page-product-dec'>
                        -
                      </div>
                      <div className='order-page-number-total'>
                        {item.number}
                      </div>
                      <div onClick={() => dispatch(numberInc(item))} className='order-page-product-inc'>
                        +
                      </div>

                      <div className='order-page-product-total-price'>
                        <div className='order-page-product-total-price-1'>
                          {item.price} ₽
                        </div>
                        <div className='order-page-product-total-price-2'>

                        </div>
                        <div onClick={() => dispatch(deleteProduct(item))} className='order-page-product-remove'>

                          Удалить
                          <div className='order-page-product-remove-icon'>
                            {/* <img src={removeIcon} /> */}
                            <DeleteIcon />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='liner-order-page'></div>
                </div>

              ))}
            </FlipMove>
          </div>
          <div className='order-page-product-content-prices'>
            <div className='order-page-product-content-pricing-total'>
              <div className='order-page-content-pricing-total-title'>
                Общая сумма
              </div>
              <div className='order-page-content-pricing-total-full-price'>
                {totalPrice} ₽
              </div>
            </div>
            <div className='order-page-product-full-dostavka'>
              <div className='order-page-product-dostavka-title'>
                Доставка
              </div>
              <div className='order-page-product-dostavka-title'>
                <div className='order-page-product-dostavka-text'>
                  бесплатно
                </div>
              </div>
            </div>
            <div className='dostavka-button'>
              Оформить заказ
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrdersPage
import React from 'react'
import smile from '../assets/img/icons/smile.png';
import shoping_cart from '../assets/img/cart/shopping-cart.png';
import { Button } from '../utils/Button';
import { Link } from 'react-router-dom';

export const CartEmpty = () => {
   return (
      <div className="cart-empty">
         <div className="cart-empty__body">
            <div className="cart-empty__title">Корзина пустая
               <span className="cart-empty__smile">
                  <img src={smile} alt="smile" />
               </span>
            </div>
            <div className="cart-empty__text">
               Вероятней всего, вы не заказывали ещё пиццу.
               Для того, чтобы заказать пиццу, перейдите на главную страницу.
            </div>
            <div className="cart-empty__image">
               <img src={shoping_cart} alt="" />
            </div>
            <Link to={'/'}>
               <Button className="goback__btn--active">Вернуться назад</Button>
            </Link>
         </div>
      </div>
   )
}

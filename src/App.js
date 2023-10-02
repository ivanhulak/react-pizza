import React from 'react';
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
   const {totalCount, totalPrice, cart_items} = useSelector(({cartReducer}) => cartReducer)

   const addedPizzas = Object.keys(cart_items).map(key => cart_items[key].items[0])

   return (
      <div className="wrapper">
         <div className="content">
            <Header totalCount={totalCount} totalPrice={totalPrice}/>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/cart" element={
                  <CartPage 
                     addedPizzas={addedPizzas} 
                     totalCount={totalCount} 
                     totalPrice={totalPrice}
                     cart_items={cart_items}/>} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
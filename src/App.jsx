import React from 'react';
import './App.css';
import Nav from './components/NAV/Nav';
import Slide from './components/MAIN/slide';
import plus from "./assets/svg/icon-plus.svg"
import minus from "./assets/svg/icon-minus.svg"
import Cart from  "./assets/svg/icon-cart-white.svg"
import { useState,useEffect } from 'react';

function App() {
  const [Counter, setCounter] = useState(0);
  const [AddCard, setAddCard] = useState(false);

   useEffect(() => {
      if(AddCard == true && Counter > 0){
        document.getElementById('DeleteCARD').addEventListener("click",()=>{setCounter(Counter - Counter)})
      }
   });

  return (
    <>
      <header>
        <Nav Counter={Counter} AddCard={AddCard}/>
      </header>
      <main>
        <Slide />
        <article className='article-2'>
          <p className='Company'>Sneaker Company</p>
          <h1 className='h1-article-2'>Fall Limited Edition Sneakers</h1>
          <p className='p-article-2'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className='container-price'>
            <div>
              <span className='Result'>$125.00</span>
              <span className='Discount'>50%</span>
            </div>
            <p className='Primary-price'>$250.00</p>
          </div>
            <div className='container-BUY'>
              <div className='container-Counter'>
                <div className='BTN-Counter minus' onClick={()=>{if(Counter>0){setCounter(Counter - 1)}}}><img src={minus} alt=""/></div>
                <p>{Counter}</p>
                <div className='BTN-Counter plus' onClick={()=>setCounter(Counter + 1)}><img src={plus} alt=""/></div>
              </div>
              <button className='AddToCard' onClick={()=>{(Counter>0)?(setAddCard(true)):(setAddCard(false))}}><img src={Cart} alt="Cart"/> Add to cart</button>
            </div>
        </article>
      </main>
    </>      
  );
}

export default App;

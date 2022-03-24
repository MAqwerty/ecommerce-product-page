import './Nav.css';
import Logo from "./../../assets/svg/logo.svg"
import Cart from  "./../../assets/svg/icon-cart.svg"
import Avatar from "./../../assets/images/image-avatar.png"
import Imagebuy from "./../../assets/images/image-product-3-thumbnail.jpg"
import Delete from "./../../assets/svg/icon-delete.svg"
import { useEffect } from "react";

function Nav(props) {

  useEffect(() => {

    let BOXul = document.getElementById("NAV-mobile")
    let hamburger = document.getElementById("BTNMenu")
    let BTNClose = document.getElementById("BTNClose")

    hamburger.addEventListener("click",()=>{BOXul.style.display='block';})
    BTNClose.addEventListener("click",()=>{BOXul.style.display='none';})

  }, []);

  return (
    <nav className="Nav">
      <ul className='Nav-ul'>
        <svg id='BTNMenu' className="icon Menu" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd"/></svg>
        <img src={Logo} className="logo" alt="logo" />
        <li><a className='Nav-item' href="">Collections</a></li>  
        <li><a className='Nav-item' href="">Men</a></li>
        <li><a className='Nav-item' href="">Women</a></li>
        <li><a className='Nav-item' href="">About</a></li>
        <li><a className='Nav-item' href="">Contact</a></li>
      </ul>  

      <nav className='NAV-mobile' id='NAV-mobile'>
        <ul className='Nav-ul-mobile'>
          <svg id='BTNClose' className='icon Close' width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg>          <li className='li-mobile'><a className='Nav-item-mobile' href="">Collections</a></li>  
          <li className='li-mobile'><a className='Nav-item-mobile' href="">Men</a></li>
          <li className='li-mobile'><a className='Nav-item-mobile' href="">Women</a></li>
          <li className='li-mobile'><a className='Nav-item-mobile' href="">About</a></li>
          <li className='li-mobile'><a className='Nav-item-mobile' href="">Contact</a></li>
        </ul>  
      </nav>   

      <article className='article-Nav-card'>
          <div className="dropdown">
              <img src={Cart} alt="" />
              {(props.AddCard == true && props.Counter > 0) ? (<p className='NUM-BUY'>{props.Counter}</p>):(<></>)}
              <div className="dropdown-content">
                <p className='title-dropdown-content'>Card</p>
                <hr />
                <div className='dropdown-content-CARD'>
                    {(props.AddCard == true && props.Counter > 0)?(
                      <>
                        <div className='container-buy'>
                          <img src={Imagebuy} alt="" className='imagebuy-dropdown-content-CARD' />
                          <div>
                            <p className='p-dropdown-content-CARD'>Fall Limited Edition Sneakers</p>
                            <p className='p-dropdown-content-CARD'>125$ × {props.Counter} <span className='bold-NUM'>{(125*props.Counter).toFixed(2)}$</span></p>
                          </div>
                          <img src={Delete} alt="" className='Delete-dropdown-content-CARD' id='DeleteCARD' />
                        </div>
                        <button className='checkout'>checkout</button>
                      </> 
                       ):(
                         <>
                           <p className='p-dropdown-content-CARD'>Your card is empty</p>
                           <p className='Guide'>First select the number and add it to the cart with the Add Card button</p>
                         </>
                      )}
                </div>
              </div>
          </div>
          <img src={Avatar} alt="" className='avatar' />
      </article> 
    </nav>
  );
}

export default Nav;

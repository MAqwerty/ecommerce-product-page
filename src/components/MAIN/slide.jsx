import React from 'react';
import './slide.css';
import BTNslide1 from "./../../assets/images/image-product-1-thumbnail.jpg"
import BTNslide2 from "./../../assets/images/image-product-2-thumbnail.jpg"
import BTNslide3 from "./../../assets/images/image-product-3-thumbnail.jpg"
import BTNslide4 from "./../../assets/images/image-product-4-thumbnail.jpg"
import Slide1 from "./../../assets/images/image-product-1.jpg"
import Slide2 from "./../../assets/images/image-product-2.jpg"
import Slide3 from "./../../assets/images/image-product-3.jpg"
import Slide4 from "./../../assets/images/image-product-4.jpg"

import Next from "./../../assets/svg/icon-next.svg"
import Previous from "./../../assets/svg/icon-previous.svg"

import { useEffect } from 'react';

function Slide() {

    useEffect(() => {
        window.onload=()=>{
            let BTNs = document.querySelectorAll(".back-chang")
            let slides = document.querySelectorAll(".slide")
            let slideIMG = document.querySelectorAll(".slideIMG")
            slides[0].style.display = 'block'
            slideIMG[0].style.opacity=".35"
            BTNs[0].style.border="2px #ff7e19 solid"
            for(let i = 0 ; i < BTNs.length ; i++){   
                BTNs[i].addEventListener('click',()=>{
                    for(let i=0 ; i<slides.length;i++){
                        slides[i].style.display = "none"
                        slideIMG[i].style.opacity="1"
                        BTNs[i].style.border="none"
                    }
                    slides[i].style.display = 'block'
                    slideIMG[i].style.opacity=".35"
                    BTNs[i].style.border="2px #ff7e19 solid"
                })
            }

            let slideIndex = 0;
            ShowSlides();
            function ShowSlides() {
                for(let i=0;i< slides.length;i++){
                    slides[i].style.display="none";
                    slideIMG[i].style.opacity="1"
                    BTNs[i].style.border="none"
                }
                slideIndex++;
                if(slideIndex > slides.length){           
                    slideIndex = 1;
                }    
                slides[slideIndex - 1].style.display = "block"; 
                slideIMG[slideIndex - 1].style.opacity=".35"
                BTNs[slideIndex - 1].style.border="2px #ff7e19 solid"
                setTimeout(ShowSlides,2500);
            }

            function prevSlides() {
                switch(slideIndex){
                    case 1:
                        slideIndex=4
                    break;
                    case 2:
                        slideIndex--
                    break;
                    case 3:
                      slideIndex--
                    break;
                    case 4:
                        slideIndex--
                    break;
                }
                for(let i=0;i< slides.length;i++){
                    slides[i].style.display = "none";
                    slideIMG[i].style.opacity="1"
                    BTNs[i].style.border="none"
                }
                slides[slideIndex - 1].style.display = "flex";
                slideIMG[slideIndex - 1].style.opacity=".35"
                BTNs[slideIndex - 1].style.border="2px #ff7e19 solid"
            }
    
            function nextSlides() {
                switch(slideIndex){
                    case 1:
                        slideIndex++
                    break;
                    case 2:
                        slideIndex++
                    break;
                    case 3:
                        slideIndex++
                    break;
                    case 4:
                        slideIndex=1
                    break;
                }
                for(let i=0;i< slides.length;i++){
                    slides[i].style.display = "none";
                    slideIMG[i].style.opacity="1"
                    BTNs[i].style.border="none"
                }
                slides[slideIndex - 1].style.display = "flex";
                slideIMG[slideIndex - 1].style.opacity=".35"
                BTNs[slideIndex - 1].style.border="2px #ff7e19 solid"
            }
                document.getElementById('prevSVG').addEventListener('click',prevSlides);
                document.getElementById('nextSVG').addEventListener('click',nextSlides);
        }
    });

  return (
   <> 
        <article className='container-slide-main'>
            <div className='display-slider'>
                <img src={Slide1} className='slide fade' alt="" />
                <img src={Slide2} className='slide fade' alt="" />
                <img src={Slide3} className='slide fade' alt="" />
                <img src={Slide4} className='slide fade' alt="" />
                <div className='BTNnextPC' id='nextSVG'><img src={Next} alt="" /></div>
                <div className='BTNprevPC' id='prevSVG'><img src={Previous} alt="" /></div>
            </div>
            <div className="back-frem">
                <div className="back-chang"><img src={BTNslide1} className="slideIMG" alt=""/></div>
                <div className="back-chang"><img src={BTNslide2} className="slideIMG" alt=""/></div>
                <div className="back-chang"><img src={BTNslide3} className="slideIMG" alt=""/></div>
                <div className="back-chang"><img src={BTNslide4} className="slideIMG" alt=""/></div>
            </div>
        </article>
   </>
  );
}

export default Slide;


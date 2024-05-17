import React, { useState } from 'react'
import './headerLeft.css'

const HeaderLeft = () => {
  const [data, setData] = useState(
    [
      {
          src : "https://www.shesbirdie.com/cdn/shop/files/AquaB.png?v=1697909060&%3Bwidth=823&em-format=avif&em-width=823",
          alt : "img-1" 
      },
      {
          src : "https://www.shesbirdie.com/cdn/shop/products/app_1_c54a1c71-5668-40c8-b541-f27351915662.png?v=1698957185&%3Bwidth=823&em-format=avif&em-width=823",
          alt : "img-2" 
      },
      {
          src : "https://www.shesbirdie.com/cdn/shop/products/aqua-3_474e9fc2-bdcb-4874-8fb0-cd040f6bc31f.jpg?v=1698957185&%3Bwidth=823&em-format=avif&em-width=823",
          alt : "img-3" 
      },
      {
          src : "https://www.shesbirdie.com/cdn/shop/products/charcoal-2_678ea555-67d3-48ef-b730-405c3275c285.jpg?v=1698957185&%3Bwidth=823&em-format=avif&em-width=823",
          alt : "img-4" 
      },
      {
          src : "https://www.shesbirdie.com/cdn/shop/products/charcoal-3_0fcb6cf2-6799-4efc-b65c-b559ba3c271a.jpg?v=1698957185&%3Bwidth=823&em-format=avif&em-width=823",
          alt : "img-5" 
      },
      {
          src : "https://www.shesbirdie.com/cdn/shop/products/coral-3_36e3aff4-e1bb-4d86-b9cd-e63fcafab4c6.jpg?v=1698957185&%3Bwidth=823&em-format=avif&em-width=823",
          alt : "img-6" 
      },
      {
          src : "https://www.shesbirdie.com/cdn/shop/products/lavender-2_f08e5266-b174-4760-b6df-1597ff8ba8ba.jpg?v=1698957185&%3Bwidth=823&em-format=avif&em-width=823",
          alt : "img-7" 
      },
      {
          src : "https://www.shesbirdie.com/cdn/shop/products/lavender-3_2ef5ea20-2540-4ef9-845b-8d81f0d5b5c9.jpg?v=1698957185&%3Bwidth=823&em-format=avif&em-width=823",
          alt : "img-8" 
      }
  ]
  )
  const [slide, setSlide] = useState(0)
  return (
    <>
        <div className="header-left-section">
            {/* <div className="save-div">
                <p>SAVE UP TO $61 OFF THIS MOTHER’S DAY SALE</p>
            </div> */}
            <div className='carousel'>    
              {data.map((item, idx)=>{
                return <img 
                src={item.src} 
                alt={item.alt} 
                key={idx} 
                className={
                    slide === idx ? 
                    "slider" : "slider-hidden"
                }/>
              })}
            </div>
            <div className='sm-img-row'>
              {data.map((img,idx)=>{
                return (
                    <div onClick=
                        {()=>{
                            setSlide(idx)
                        }} 
                        className={
                            slide === idx ? 
                                "sm-img-active" : "sm-img-hover"
                            }>
                        <img 
                        src={img.src} 
                        alt={img.alt} 
                        key={idx} 
                        className="sm-img"/>             
                    </div>
                ) 
              })}
            </div>
        </div>
    </>
  )
}

export default HeaderLeft

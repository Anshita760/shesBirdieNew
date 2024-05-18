import "../CSS/headerRight.css"
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"
import Step1 from "./Step1"
import Step2 from "./Step2"

const HeaderRight = () => {
  const [open, setopen] = useState(true)
  const [isActive, setActive] = useState('features') // handle offered services 

  const [handleBorder1, setBorder1] = useState(false)
  function handleHighlightDiv1(){   // handles services border color
    setBorder1(!handleBorder1)
    setBorder2(true)
    setBorder3(true)
  }
  const [handleBorder2, setBorder2] = useState(true)
  function handleHighlightDiv2(){   // handles services border color
    setBorder2(!handleBorder2)
    setBorder1(true)
    setBorder3(true)
  }
  const [handleBorder3, setBorder3] = useState(true)
  function handleHighlightDiv3(){   // handles services border color
    setBorder3(!handleBorder3)
    setBorder1(true)
    setBorder2(true)

  }
  
  return (
    <>
      <div className='header-right-section'>
        <div className="heading-desc">
          <NavLink className="ratings">
            <span className="material-symbols-outlined">star_rate</span>
            <span className="material-symbols-outlined">star_rate</span>
            <span className="material-symbols-outlined">star_rate</span>
            <span className="material-symbols-outlined">star_rate</span>
            <span className="material-symbols-outlined">star_rate</span>
            <p className='rate-count'>(225)</p>
          </NavLink>
          <h1>BIRDIE+</h1>
          <p>The personal safety alarm loved by 1 million women got an upgrade</p>
        </div>
        <div className='services'>
          <div className='offered-services'>
            <div className={handleBorder1 ? 'services-heading' : 'services-heading-active'} onClick={()=>{handleHighlightDiv1(); setActive('features')}}><h5>FEATURES YOU'LL LOVE</h5></div>
            <div className={handleBorder2 ? 'services-heading' : 'services-heading-active'} onClick={()=>{handleHighlightDiv2(); setActive('benefits')}}><h5>BENEFITS</h5></div>
            <div className={handleBorder3 ? 'services-heading' : 'services-heading-active'} onClick={()=>{handleHighlightDiv3(); setActive('works')}}><h5>HOW IT WORKS</h5></div>
          </div>
          <div className='services-content'>
            {isActive === 'features' && 
              <ul className='features'>
              <li>
                <span className="material-symbols-outlined">support_agent</span>
                <p>Instant, 24/7 Access to a live emergency Support Rep</p>
              </li>
              <li>
                <span className="material-symbols-outlined">phone_callback</span>
                <p>Receive Fake “Excuse-to-Leave" Calls</p>
              </li>
              <li>
                <span className="material-symbols-outlined">distance</span>
                <p>Instantly alert emergency contacts with your exact location</p>
              </li>
              </ul>
            }
            {isActive === 'benefits' &&
              <ul className='benefits'>
              <li>
                <img src="https://www.shesbirdie.com/s/files/1/0259/5808/8792/files/easy-to-use_96x_2.svg?v=1697610927&em-origin=cdn.shopify.com&em-format=avif" alt="" />
                <p><span>Easy to Use: </span>Just pull the Birdie alarm to activate</p>
              </li>
              <li>
                <img src="https://www.shesbirdie.com/cdn/shop/files/peace-of-mind_96x.png?v=1626102441&em-format=avif" alt="" />
                <p><span>Bluetooth Connected: </span>A bluetooth connection enables 24/7 access to an emergency support line</p>
              </li>
              <li>
                <img src="https://www.shesbirdie.com/s/files/1/0259/5808/8792/files/non-violent_96x_1_42770657-bb50-4926-ae9f-9e8b41cd2a9a.svg?v=1697611474&em-origin=cdn.shopify.com&em-format=avif" alt="" />
                <p><span>Non-Violent: </span>Designed to deter attackers without fighting</p>
              </li>
              <li>
                <img src="https://www.shesbirdie.com/s/files/1/0259/5808/8792/files/plane_96x_1_7fdd1e70-6056-40f7-adad-5914c370e0a7.svg?v=1697611494&em-origin=cdn.shopify.com&em-format=avif" alt="" />
                <p><span>Travel Safe: </span>Take Birdie with you wherever you go</p>
              </li>
              </ul>
            }
            {isActive === 'works' && 
              <ul className='how-it-works'>
              <li>
                <p><span>24/7 On Call Rep: </span>Press 2X, our live rep calls and can stay on the phone until you reach your destination or dispatch 1st responders if needed.</p>
              </li>
              <li>
                <p><span>Receive Fake Call: </span>Press the button 1x to receive a pre-recorded call giving you a tactful excuse to leave.</p>
              </li>
              <li>
                <p><span>Alert Emergency Contacts: </span>Press and hold for 3 seconds to instantly send your location to your emergency contacts.</p>
              </li>
              <li>
                <p><span>When in Doubt, Pull It: </span>Pull the Top to start the LOUD siren and flashing strobe light, bringing all eyes on you. </p>
              </li>
              </ul>
            }
          </div>
        </div>
        {open ? (
          <Routes>
            <Route path="/" element = {<Step1/>}/> {/* Set default route to Step1 */}
            <Route path="/Step1" element = {<Step1/>}/>
            <Route path="/Step2" element={<Step2 />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Step2 />} /> {/* Set default route to Step2 */}
            <Route path="/Step1" element={<Step1 />} />
            <Route path="/Step2" element = {<Step2/>}/>
          </Routes>
        )}
        {/* {open ? <Step1/> : <Step2/>} */}
      </div>
    </>
  )
}

export default HeaderRight
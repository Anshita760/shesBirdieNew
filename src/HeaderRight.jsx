import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./headerRight.css"

const HeaderRight = (props) => {
  const [open, setopen] = useState(true)
  const [add, setAdditem] =  useState([
    {
      src : "https://www.shesbirdie.com/cdn/shop/files/AquaB_100x.png?v=1697909060",
      alt : "Img-1"
    },
    {
      src : "https://www.shesbirdie.com/cdn/shop/files/B_100x.jpg?v=1698957185",
      alt : "Img-2"
    },
    {
      src : "https://www.shesbirdie.com/cdn/shop/files/CharcoalB_100x.png?v=1698957185",
      alt : "Img-3"
    },
    {
      src : "https://www.shesbirdie.com/cdn/shop/files/IndigoB_100x.png?v=1698957185",
      alt : "Img-4"
    },
    {
      src : "https://www.shesbirdie.com/cdn/shop/files/CoralB_100x.png?v=1698957185",
      alt : "Img-5"
    }
  ])

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

  const [bgColor, setbgColor] = useState(1)
  function handleBundlesColor(dividx){   // handle the background color of the selected bundles in step-1
    setbgColor(dividx)
  }

  const [isChecked1, setChecked1] = useState(true)
  function handleRadioChange1(){  // handle the radio checks to open the items for checked bundles
    setChecked1(true)
    setChecked2(false)
    setChecked3(false)
  }
  const [isChecked2, setChecked2] = useState(false)
  function handleRadioChange2(){  // handle the radio checks to open the items for checked bundles
    setChecked2(true)
    setChecked1(false)
    setChecked3(false)
  }
  const [isChecked3, setChecked3] = useState(false)
  function handleRadioChange3(){  // handle the radio checks to open the items for checked bundles
    setChecked3(true)
    setChecked1(false)
    setChecked2(false)
  }


  const [value, setValue] = useState(5);
  // Function to handle bundle selection to show the pack value
  const handleBundleChange = (bundle) => {
    // Update the value based on the selected bundle
    switch (bundle) {
      case 5:
        setValue(5);
        break;
      case 3:
        setValue(3);
        break;
      case 1:
        setValue(1);
        break;
      default:
        setValue(0); // Default value if an invalid bundle is selected
    }
  };

  const [price, setPrice] = useState("$148.55")
  const [lineOverPrice, setLineoverprice] = useState("$174.75")

  const handleBundlePrice = (bundleprice) => {
    switch (bundleprice) {
      case 5:
        setLineoverprice("$174.75");
        setPrice("$148.55");
        break;
      case 3:
        setLineoverprice("$104.85");
        setPrice("$94.38");
        break;
      case 1:
        setLineoverprice("$");
        setPrice("$34.95");
        break;
      default:
        setLineoverprice("");
        setPrice(""); // Default value if an invalid bundle is selected
    }
  }

  const [img1, setImg1] = useState([])
  const [img2, setImg2] = useState()
  const [img3, setImg3] = useState()

  var idx1 = 0
  const addImage = (image)=>{
    if(idx1 < 5){
      setImg1(image.src)
      return idx1+1;
    }
    console.log(img1) 
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
          <div className="step-1">
            <div className='color-swatch'>
              <div className='color' data-color = "aqua"></div>
              <div className='color' data-color = "lavender"></div>
              <div className='color' data-color = "charcoal"></div>
              <div className='color' data-color = "coral"></div>
              <div className='color' data-color = "indigo"></div>
            </div>
            <div className='select-bundle'>
              <h4>Step 1: Choose Your Bundle</h4>
              <div className="bundle-options">
                <div className={bgColor === 1 ? 'bundles-active' : 'bundles'} onClick={()=>{handleBundlePrice(5); handleBundleChange(5); handleBundlesColor(1)}}>
                  <input type="radio" id='bundle5' name='radio' checked = {isChecked1} onChange={handleRadioChange1}/>
                  <label htmlFor='bundle5'>
                  <div className="top-bottom-value">
                    <span>15% OFF</span>
                  </div>
                  <div className="size-option">
                    <span>5 Birdies+</span>
                  </div>
                  <div className="option-img">
                    <img src="https://cdn.shopify.com/s/files/1/0259/5808/8792/files/bplus5.png?v=1715707394" alt="" />
                  </div>
                  <div className="value-comparison">
                    <span className='line-over'>$34.95</span>
                    <span className='bold-price-text'>$29.71 each</span>
                  </div>
                  </label>
                </div>
                <div className={bgColor === 2 ? 'bundles-active' : 'bundles'} onClick={()=>{handleBundlePrice(3); handleBundleChange(3); handleBundlesColor(2)}}>
                  <input type="radio" id='bundle3' name='radio' checked = {isChecked2} onChange={handleRadioChange2}/>
                  <label htmlFor="bundle3">
                  <div className="top-bottom-value">
                    <span>10% OFF</span>
                  </div>
                  <div className="size-option">
                    <span>3 Birdies+</span>
                  </div>
                  <div className="option-img">
                    <img src="https://cdn.shopify.com/s/files/1/0259/5808/8792/files/bplus3.png?v=1715707394" alt="" />
                  </div>
                  <div className="value-comparison">
                    <span className='line-over'>$34.95</span>
                    <span className='bold-price-text'>$31.46 each</span>
                  </div>
                  </label>
                </div>
                <div className={bgColor === 3 ? 'bundles-active' : 'bundles'} onClick={()=>{handleBundlePrice(1); handleBundleChange(1); handleBundlesColor(3)}}>
                <input type="radio" id="bundle1" name="radio" checked = {isChecked3} onChange={handleRadioChange3}/>
                <label htmlFor="bundle1">
                  <div className="size-option">
                    <span>1 Birdie+</span>
                  </div>
                  <div className="option-img">
                    <img src="https://cdn.shopify.com/s/files/1/0259/5808/8792/files/1-birdie-plus.png?v=1715086084" alt="" />
                  </div>
                  <div className="value-comparison">
                    {/* <span className='line-over'>$34.95</span> */}
                    <span className='bold-price-text'>$34.95</span>
                  </div>
                </label>
                </div>
                </div>
            </div>
            <div className="next-btn" onClick={()=>{setopen(!open)}}>
            <p>Next: Choose Your Colors</p>
            </div>
          </div>
        ) : (
        <div className="step-2">
          <h4>Step 2: Choose Your Colors</h4>
          <div className='add-item'>
            {add.map((add, index)=>{
              return (
                <div className="select-item" key={index}>
                  <img 
                    onClick={()=>{addImage(add) }}
                    src={add.src} 
                    alt={add.alt} 
                  />
                  <button>Add</button>
                </div>
              ) 
            })}
          </div>
          <div className='selected-items'>
            <div className='num-item-selected-text'>
              <p>Your {value}-pack includes:</p>
              <div className="selected-text-price">
                <span className='items-line-over'>{lineOverPrice}</span>
                <span>{price}</span>
              </div>
            </div>
            <div className='all-selected-items'>
              <div className={isChecked1 ? 'dotted' : 'dotted-inactive'} id='active5' onChange={handleRadioChange1}>
                <div className="dotted-box" id='dup1'>
                  <div className='dotted-box-img'>
                    <img src={img1} alt="" className='dotted-img'/>
                  </div>
                  <span>Birdie #1</span>
                </div>
              </div>
              <div className={isChecked2 ? 'dotted' : 'dotted-inactive'} id='active3' onChange={handleRadioChange2}>
                <div className="dotted-box">
                  <div className='dotted-box-img'></div>
                  <span>Birdie #2</span>
                </div>
                <div className="dotted-box">
                  <div className='dotted-box-img'></div>
                  <span>Birdie #2</span>
                </div>
                <div className="dotted-box">
                  <div className='dotted-box-img'></div>
                  <span>Birdie #2</span>
                </div>
              </div>
              <div className={isChecked3 ? 'dotted' : 'dotted-inactive'} id='active1' onChange={handleRadioChange3}>
                <div className="dotted-box">
                  <div className='dotted-box-img'></div>
                  <span>Birdie #3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="back-addTocart-btn">
            <button className='back-btn' onClick={()=>{setopen(!open)}}>Back</button>
            <button className='addTocart-btn'>Add Bundle To Cart</button>
          </div>
        </div>
        )}
      </div>
    </>
  )
}

export default HeaderRight

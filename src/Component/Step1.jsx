import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom/dist'
import StepContext from './StepContext'

const Step1 = () => {
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
  const handleBundlePrice = (bundleprice) => {   // handle the price based on selected bundle
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

  return (
    <div>
      <StepContext.Provider value={{
        value, lineOverPrice, price, isChecked1, isChecked2, isChecked3,
        handleRadioChange1,
        handleRadioChange2,
        handleRadioChange3,
      }}>
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
            <NavLink to={{pathname: `/Step2`}} className="next-btn">
              Next: Choose Your Colors
            </NavLink>
          </div>
      </StepContext.Provider>
    </div>
  )
}

export default Step1
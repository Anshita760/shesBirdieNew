import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Step1 from './Step1'

const Step2 = (props) => {
    const add = [
        {
          id: 1,
          src : "https://www.shesbirdie.com/cdn/shop/files/AquaB_100x.png?v=1697909060",
          dataTitle: "Aqua"
        },
        {
          id: 2,
          src : "https://www.shesbirdie.com/cdn/shop/files/B_100x.jpg?v=1698957185",
          dataTitle: "Lavender"
        },
        {
          id: 3,
          src : "https://www.shesbirdie.com/cdn/shop/files/CharcoalB_100x.png?v=1698957185",
          dataTitle: "Charcoal"
        },
        {
          id: 4,
          src : "https://www.shesbirdie.com/cdn/shop/files/IndigoB_100x.png?v=1698957185",
          dataTitle: "Indigo"
        },
        {
          id: 5,
          src : "https://www.shesbirdie.com/cdn/shop/files/CoralB_100x.png?v=1698957185",
          dataTitle: "Coral"
        }
      ]

      const [img1, setImg1] = useState(Array(5).fill(null))
      const [img2, setImg2] = useState(Array(3).fill(null))
      const [img3, setImg3] = useState(Array(1).fill(null))
      const [idx1, setidx1] = useState(0)
      const [idx2, setidx2] = useState(0)
      const [idx3, setidx3] = useState(0)
    
      const addImage = (image)=>{
        if(idx1 < img1.length){
          const newImages = [...img1]
          newImages[idx1] = image.src
          setImg1(newImages)
          setidx1(idx1 + 1)
        }
        else if(idx2 < img2.length){
          const newImages = [...img2]
          newImages[idx2] = image.src
          setImg2(newImages)
          setidx2(idx2 + 1)
        } 
        else if(idx3 < img3.length){
          const newImages = [...img3]
          newImages[idx3] = image.src
          setImg3(newImages)
          setidx3(idx3 + 1)
        }
      }
    
  return (
    <div>
        <div className="step-2">
          <h4>Step 2: Choose Your Colors</h4>
          <div className='add-item'>
            {add.map((add, index)=>{
              return (
                <div className="select-item" key={index}>
                  <img 
                    onClick={()=>{addImage(add)}}
                    src={add.src} 
                    alt=''
                  />
                  <button onClick={()=>{addImage(add)}}>Add</button>
                </div>
              ) 
            })}
          </div>
          <div className='selected-items'>
            <div className='num-item-selected-text'>
              <p>Your {props.value}-pack includes:</p>
              <div className="selected-text-price">
                <span className='items-line-over'>{props.lineOverprice}</span>
                <span>{props.price}</span>
              </div>
            </div>
            <div className='all-selected-items'>
              <div className={props.isChecked1 ? 'dotted' : 'dotted-inactive'} id='active5' onChange={props.handleRadioChange1}>
                {img1.map((img,idx)=>(
                  <div className="dotted-box">
                      <span className="material-symbols-outlined cancel-item">close</span>
                      <div className='dotted-box-img' key={idx}>
                        <img src={img} alt="" className='dotted-img'/>
                      </div>
                    <span>Birdie #{idx+1}</span>
                  </div>
                ))} 
              </div>
              <div className={props.isChecked2 ? 'dotted' : 'dotted-inactive'} id='active3' onChange={props.handleRadioChange2}>
                {img2.map((img,idx)=>(
                  <div className="dotted-box">
                      <span className="material-symbols-outlined cancel-item">close</span>
                    <div className='dotted-box-img' key={idx}>
                      <img src={img} alt="" className='dotted-img'/>
                    </div>
                    <span>Birdie #{idx+1}</span>
                  </div>
                ))} 
              </div>
              <div className={props.isChecked3 ? 'dotted' : 'dotted-inactive'} id='active1' onChange={props.handleRadioChange3}>
                {img3.map((img,idx)=>(
                  <div className="dotted-box">
                      <span className="material-symbols-outlined cancel-item">close</span>
                    <div className='dotted-box-img' key={idx}>
                      <img src={img} alt="" className='dotted-img'/>
                    </div>
                    <span>Birdie #{idx+1}</span>
                  </div>
                ))} 
              </div>
            </div>
          </div>
          <div className="back-addTocart-btn">
            <NavLink to="/Step1" className='back-btn'>Back</NavLink>
            <button className='addTocart-btn'>Add Bundle To Cart</button>
          </div>
        </div>
    </div>
  )
}

export default Step2

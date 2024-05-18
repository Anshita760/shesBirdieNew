import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div className="nav-section">
            {/* <NavLink className="nav-top">
                <p>Mother’s Day Sale l Up To $61 Off l Shop Now</p>
                <span className="material-symbols-outlined">arrow_right_alt</span>
            </NavLink> */}
            <div className="nav-bar">
                <NavLink className='logo'>
                    <img src="https://www.shesbirdie.com/cdn/shop/files/birdie-logo.png?v=1690897129&%3Bwidth=150&em-format=avif&em-width=150" alt="" />
                </NavLink>
                <div className="nav-links">
                    <NavLink className="shop-nav-link">
                        <span>SHOP BIRDIE+</span>
                    </NavLink>
                    <NavLink className="col-nav-links">ABOUT US</NavLink>
                    {/* <NavLink className="col-nav-links">BULK ORDERS</NavLink>
                    <NavLink className="col-nav-links">HOW IT WORKS</NavLink> */}
                </div>
                <div className="user-cart-btn">
                    <span className="material-symbols-outlined user">person</span>
                    <span className="material-symbols-outlined cart">local_mall</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar

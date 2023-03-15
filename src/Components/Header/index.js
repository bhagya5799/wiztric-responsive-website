import React from 'react'
import {Link } from 'react-router-dom'
import { BsBoxArrowInRight, BsFillBellFill } from 'react-icons/bs'
import './index.css'

const Header = () => {
    const date = new Date();
    const showTime = date.toLocaleString('default', { month: 'long' })+" "+date.getDate()+" "+date.getFullYear()
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  
  return (
    <div className='header'>
        <nav className='nav-bar'>
            <div className='nav-title-div'>
                  <Link to="/" className='navigate-link'>
                      <button className='nav-btn'>WASP</button>
                  </Link>
                  <Link to="/" className='navigate-link'>
                      <button className='dashboard-btn'>Dashboard </button>
                      
                  </Link>

            </div>
              <div className='nav-title-div'>
                      <div className='bell-div'><BsFillBellFill/> <span className='bell-count'>1</span></div>
                  <p>{showTime} &nbsp; &nbsp;{time}</p>
                  
                  <Link to="/login" className='navigate-link'>
                      <button className='btn'>Login<i className='login-arrow'><BsBoxArrowInRight /></i></button>
                  </Link>
              </div>
        </nav>
    </div>
  )
}

export default Header
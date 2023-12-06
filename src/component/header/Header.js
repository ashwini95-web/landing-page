import React from 'react'
import './Header.css';
import { GoTriangleDown } from "react-icons/go";
export default function Header() {
  return (
    <>
    <div className='Menu'>
      <div className='landing_Header'>
        <div className='landing-name'>
           <h3>AIPatrn</h3>
        </div>
        <div className='landing-menu'>
            <ul>
                <li>Home Page</li>
                <li>Generator</li>
                <li>Pricing-Plan</li>
                <li>Blog - News</li>
            </ul>
        </div>
        <div className='landing-links'>
            <ul>
                <li>About Us</li>
                <li>Features</li>
                <li>Collection-2023</li>
                <li>Career</li>
            </ul>
        </div>
        <div className='landing-btn'>
         
           <div class="dropdown">
           <button type='button' class="dropbtn"> Menu <GoTriangleDown /></button>
              <div class="dropdown-content">
              <a href="#homepage">Home Page</a>
              <a href="#generator">Generator</a>
              <a href="#pricing">Pricing-Plan</a>
              <a href="#features">Features</a>
              <a href="#blog">Blog - News</a>
              <a href="#about-us">About Us</a>
              <a href="#collection">Collection-2023</a>
              <a href="#career">Career</a>
          </div>
          </div>
        </div>
      </div>


      <div className='header-heading'>
      
        <div className='heading'>
        <span>Revolutionize Your</span>
       <p>Creative Projects with </p>
       <p>the Ultimate AI-Powered </p>
      
       <div className='main-txt'>
       <p>  Pattern  </p>
       <button type="button " className='btn-generating'>START GENERATING</button>  <span className='product_design'>The Next generation
          <br/><span className='txt-pro'>Production</span> for Designers
        </span>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

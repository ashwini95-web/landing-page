import React from 'react';
import './Cards.css';
import { GoArrowDownRight } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";


export default function Cards() {
  return (
    <>
      <div className='layout-cards'>
      <div class="card">
      <img src="../images/product1.png" alt="Card 1"/>
      <div  className='card-content'>
    <div class="overlay">
     <span>01</span>
     <div class="image-container">
      <div className='testimonial'>
      <img src="../images/testimonial-1.jpg" alt="BottomImage"  className='testing'/>
      <img src="../images/testimonial-2.png" alt="BottomImage"  className='testing'/>
      <img src="../images/testimonial-1.jpg" alt="BottomImage"  className='testing'/>
      </div>
   
      <p>Learn from best Mentors</p>
    <a href="btnlearning" class="button" >Start Learning <GoArrowDownRight /></a>

    </div>
    </div>
   
    </div>
  </div>

  <div class="card">
    <img src="https://images.squarespace-cdn.com/content/v1/514df332e4b0d4d5c3e0e1a9/1575756224677-8B85BFSAVGT1FW9KRA84/_Thumb_ArtDirction.jpg?format=500w" alt="Card 2"/>
    <div class="overlay">
    <span>02</span>
      
      <ul>
        <li>Free Edit <GoArrowDownRight className='card-icon'/></li>
        <li>Interactive  <GoArrowDownRight className='card-icon'/></li>
        <li>Easy interface <GoArrowDownRight className='card-icon'/></li>
        <li>Compare to other <GoArrowDownRight className='card-icon'/></li>
      </ul>
    </div>
  </div>

  <div class=" card card1">
    <img src="../images/product3.jpg" alt="Card 3"/>
    <div class="overlay">
      <span>03</span>
      <div className='txt-glass'>
      <strong>+ 20K</strong>
      <p>Glass Pattern generated this <br/>
      week in the first release</p>
      <h4><GoChevronDown  className='card-icon'/>
      <br/>
      <GoChevronDown  className='card-icon'/>
      </h4>
      
    </div>
    

  </div>
      </div>
      </div>
    </>
  )
}

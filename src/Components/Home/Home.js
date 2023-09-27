import React from 'react'
import "./Home.css"
import Image from "../../Images/home img.png"

export default function Home() {
  return (
    <div className='back'>
        <div class="container text-center ">
            <div class="row align-items-start  home">
                <div class="col-6 speechCntnr ">
                  <div className="wlcSpeech">
                  <h1>Welcome to Simbecc Interiors - <span style={{color:"orangered"}}>We Create a World of Your Own.</span></h1>
                  </div>
                  <span className='subSpeech'>
                  <p>At Simbecc Interiors, we bring together the finest in interior design, 
                  furniture, and landscape planning to help you create your dream home. 
                  Choose from our expertly curated collection of home and decor products 
                  to elevate your living spaces to new heights.</p>
                  </span> <br/>
                  <a className="homeButton" href="#">
                        <button type="button" class="btn btn-primary  homeBtn">View All Services</button>
                    </a>
                </div>

                <div class="col-6">
                <img class="homeImg" src={Image} alt="A living room decorated with flowers"/>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import apple from "../../Images/apple.webp";
import basset from "../../Images/Bassett.png";
import beyond from "../../Images/g_beyoond.png";
import skeptic from "../../Images/skeptic.png";
import skytire from "../../Images/skytire.png";
import "./Review.css";

export default function Review() {
  return (
    <div className='backRev'>
        <div class="container text-center ">
        <div class="row align-items-center workedWith ">
            <div class="col-6 revText">
                <h3>Worked with</h3>
            </div>
            <div class="col-6 logoz">
                <img src={apple} alt='apple logo' className='revLogos'/>
                <img src={basset} alt='basset logo' className='revLogos'/>
                <img src={beyond} alt='beyond logo' className='revLogos'/>
                <img src={skeptic} alt='skeptic logo' className='revLogos'/>
                <img src={skytire} alt='skytire logo' className='revLogos'/>
            </div>
        </div>
    </div>

    <div class="container text-center ms-5">
        <div class="row align-items-center mt-5 ratings">
            <div class="col-3 revFirstCol">
            <h1>4.8</h1>
            <div>
                <span><i class="fa-solid fa-star" style={{color: "#fff700", fontSize: "small"}}></i></span>
                <span><i class="fa-solid fa-star" style={{color: "#fff700", fontSize: "small"}}></i></span>
                <span><i class="fa-solid fa-star" style={{color: "#fff700", fontSize: "small"}}></i></span>
                <span><i class="fa-solid fa-star" style={{color: "#fff700", fontSize: "small"}}></i></span>
                <span><i class="fa-solid fa-star" style={{color: "#fff700", fontSize: "small"}}></i></span>
            </div>
            <h4>2,394 Ratings</h4>
            <h4>Google Reviews</h4>
            </div>
            <div class="col-4 revFirstCol">
            <h1>A+</h1>
            <div>
                <span><i class="fa-solid fa-star" style={{color: "#fff700", fontSize: "small"}}></i></span>
                <span><i class="fa-solid fa-star" style={{color: "#fff700", fontSize: "small"}}></i></span>
                <span><i class="fa-solid fa-star" style={{color: "#fff700", fontSize: "small"}}></i></span>
                <span><i class="fa-solid fa-star" style={{color: "#fff700", fontSize: "small"}}></i></span>
                <span><i class="fa-solid fa-star" style={{color: "#fff700", fontSize: "small"}}></i></span>
            </div>
            <h4>125 Reviews</h4>
            <h4>BBB Ratings</h4>
            </div>
            <div class="col-5 revCont">
            <h4>Hear from Our Satisfied Clients</h4>
            <h5 className='james'>James Famakinwa</h5>
            <p>
                Simbecc Interiors made my interior design project a breeze. 
                Their team of experts worked with me every step of the way to 
                create a space that perfectly reflected my style and personality.
            </p>
            </div>
        </div>
        </div>
    </div>
  )
}


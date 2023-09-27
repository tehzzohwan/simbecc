import React from 'react'
import "./Services.css"
import f1 from '../../Images/f1.webp';
import f2 from '../../Images/f2.webp';
import f3 from '../../Images/f4.jpg';
import s1 from '../../Images/s1.webp';

export default function Services() {
  return (
    <div>
        <div className='firstLine'>
            <h1>Our Services</h1>
            <span>
                <a className="homeButton" href="#">
                    <button type="button" class="btn btn-primary  homeBtn">View All Services</button>
                </a>
            </span>
        </div>

        <div class="container text-center">
        <div class="row align-items-end">
            <div class="col-4 f1">
                <img src={f1} alt='Living room with a nice interior design'/>
                <h3>Interior Design</h3>
                <p>
                    Our interior design services are designed to help you create a home 
                    that reflects your unique style and personality.
                </p>
                <a href='#'>Read More</a>
            </div>
            <div class="col-4 f2">
            <img src={f2} alt='A lounge with furnitures and plants'/>     
            <h3>Furniture Collection</h3> 
            <p>
                Our furniture collection is designed to enhance your lifestyle and elevate
                your home decor, with a range of styles to suit your personal taste.
            </p> 
            <a href='#'>Read More</a>     
            </div>
            <div class="col-4 f3">
            <img src={f3} alt='Landscape with a walkway'/>
            <h3>Landscape Design</h3>
            <p>
                Our landscape planning and design services help you create
                an outdoor oasis that reflects your style and personality.
            </p>
            <a href='#'>Read More</a>
            </div>
        </div>
        <div>
            <p className='hrLines'>Features & Benefits</p>

            <div class="container text-center">
            <div class="row align-items-start">
                <div class="col">
                    <h3>Features</h3>
                    <ul>
                        <li>Expert Interior Design Services</li>
                        <li>Premium Furniture Collection</li>
                        <li>Professional Landscape Planning</li>
                        <li>Extensive Home and Decor Collection</li>
                        <li>Exceptional Customer Service</li>
                    </ul>
                </div>
                <div class="col">
                    <h3>Benefits</h3>
                    <ul>
                        <li>Elevated Living Spaces</li>
                        <li>Personalized Design Solutions</li>
                        <li>Unique Furniture Designs</li>
                        <li>Beautiful Outdoor Spaces</li>
                        <li>Exceptional Quality and Craftsmanship</li>
                    </ul>
                </div>
                <div class="col">
                    <img src={s1} alt='An happy man walking on a terrace'/>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

import React from 'react';
import aboutImg from '../assets/dis-1.jpg'


function About() {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-12'>
                    <h1 id='about' >About</h1>
                    <hr />
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12 col-md-6 col-lg-4 text-center' data-aos="fade-right" data-aos-duration="3000">
                    <i className="fa-solid fa-bolt fa-2xl mt-4 mt-md-1" style={{ color: "#0cad00" }}></i>
                    <h3 className='mt-2'>Fast service</h3>
                    <p>APPLICATIONS ARE ACCEPTED 24 HOURS A DAY. IF THE PROBLEM IS URGENT WE CAN GO IMMEDIATELY. HOWEVER, THE QUALITY REMAINS EXCELLENT.</p>
                </div>
                <div className='col-12 col-md-6 col-lg-4 text-center' data-aos="fade-right" data-aos-duration="3000">
                    <i className="fa-solid fa-medal fa-2xl mt-4 mt-md-1 " style={{ color: "#0cad00" }}></i>
                    <h3 className='mt-2'>Our experienced specialists</h3>
                    <p>OUR STAFF TAKES CARE OF EVERYTHING: ACCOUNTING, ROOM PREPARATION, RECYCLING, FINAL CLEANING, VENTILATION AND CONTROL CHECKS.</p>
                </div>
                <div className='col-12 col-md-6 col-lg-4 text-center'data-aos="fade-right" data-aos-duration="3000">
                    <i className="fa-solid fa-handshake fa-2xl mt-4 mt-md-1" style={{ color: "#0cad00" }}></i>
                    <h3 className='mt-2'>At your convenience</h3>
                    <p>CHOOSE A SUITABLE AND CONVENIENT TIME FOR YOU AND CONTACT US. WE GIVE YOU A GUARANTEED AND EFFECTIVE RESULT</p>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col' data-aos="zoom-out" data-aos-duration="3000">
                    <div className="card text-center shadow">
                        <img src={aboutImg} alt='about' className='w-100 border border-success rounded' />
                        <div className="card-img-overlay" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="3000">
                            <h2 className="card-title mt-3 mt-md-5">Consider the droplet and harmful insects no more!!!</h2>
                            <h4 className="card-text mt-3 mt-md-5">Our company has been operating for many years. Our customers are happy with us</h4>
                            <a href='#contact' className='btn mt-3 mt-md-5' style={{ backgroundColor: "#5cad00", color: "white" }} >Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
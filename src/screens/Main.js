import React from 'react';
import imgMain from '../assets/main.png'
function Main() {
    return (
        <div className='container' id='main' >
            <div className='row mt-5' >
                <div className='col-8 d-flex justify-content-center align-items-center'>
                    <img  src={imgMain} alt='mainImage' className='w-100 border border-success rounded shadow'/>
                </div>
                <div className='col-4 text-center' >
                    <h1 className='mt-5'>Disinfection service</h1>
                    <p className='mt-3'>We have been conducting professional disinfection work in Ferghana for 10 years,
                         so we know how to get rid of pests for the first time.</p>
                    <a href="#contact" className='btn mt-4' style={{ backgroundColor: "#5cad00", color: "white" }} >Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Main;
import React from 'react';
import imgMain from '../assets/main.png'
import { useTranslation } from 'react-i18next';


function Main() {
    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className='container' id='main' >
            <div className='row mt-5' >
                <div className='col-12 col-md-8  d-flex justify-content-center align-items-center'>
                    <img data-aos="zoom-in" data-aos-duration="3000" src={imgMain} alt='mainImage' className='w-100 border border-success rounded shadow'/>
                </div>
                {/* Disinfection service */}
                <div className='z-1 position-absolute col-md-4 text-center z-0 position-absolute top-2 end-0 ' data-aos="fade-left" data-aos-duration="5000" >
                    <h1 className='mt-5'>{t("home.body")}</h1>
                    <p className='mt-3'>We have been conducting professional disinfection work in Ferghana for 10 years,
                         so we know how to get rid of pests for the first time.</p>
                    <a href="#contact" className='btn mt-5 mt-md-4' style={{ backgroundColor: "#5cad00", color: "white" }} >Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Main;
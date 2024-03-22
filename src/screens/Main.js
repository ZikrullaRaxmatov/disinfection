import React from 'react';
import imgMain from '../assets/main.png'
import { useTranslation } from 'react-i18next';


function Main() {
    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className='container border border-danger' id='main' >
            <div className='row mt-3 mt-md-4 mt-lg-5' >
                <div className='col-12 col-md-8  d-flex justify-content-center align-items-center'>
                    <img data-aos="zoom-in" data-aos-duration="3000" src={imgMain} alt='mainImage' className='w-100 border border-success rounded shadow'/>
                </div>
                
                <div className='border border-danger z-1 position-absolute col-md-4 text-center z-0 top-2 end-0 p-4' data-aos="fade-left" data-aos-duration="5000" >
                    <h1 className='mt-4 mt-lg-5'>{t("main.title")}</h1>
                    <p className='mt-4' >{t("main.body")}</p>
                    <a href="#contact" className=' btn mt-4 mt-lg-5' style={{ backgroundColor: "#5cad00", color: "white" }} >{t("main.btn")}</a>
                </div>
            </div>
        </div>
    );
}

export default Main;
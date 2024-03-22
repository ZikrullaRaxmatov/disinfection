import React from 'react';
import aboutImg from '../assets/dis-1.jpg'
import { useTranslation } from 'react-i18next';


function About() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className='container border border-danger'>
            <div className='row mt-5'>
                <div className='col-12'>
                    <h1 id='about' > {t("about.title")} </h1>
                    <hr />
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12 col-md-6 col-lg-4 text-center' data-aos="fade-right" data-aos-duration="3000">
                    <i className="fa-solid fa-bolt fa-2xl mt-4 mt-md-1" style={{ color: "#0cad00" }}></i>
                    <h3 className='mt-2'>{t("about.subtitle1")}</h3>
                    <p> {t("about.body1")}</p>
                </div>
                <div className='col-12 col-md-6 col-lg-4 text-center' data-aos="fade-right" data-aos-duration="3000">
                    <i className="fa-solid fa-medal fa-2xl mt-4 mt-md-1 " style={{ color: "#0cad00" }}></i>
                    <h3 className='mt-2'>{t("about.subtitle2")}</h3>
                    <p>{t("about.body2")}</p>
                </div>
                <div className='col-12 col-md-6 col-lg-4 text-center'data-aos="fade-right" data-aos-duration="3000">
                    <i className="fa-solid fa-handshake fa-2xl mt-4 mt-md-1" style={{ color: "#0cad00" }}></i>
                    <h3 className='mt-2'>{t("about.subtitle3")}</h3>
                    <p>{t("about.body3")}</p>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col' data-aos="zoom-out" data-aos-duration="3000">
                    <div className="card text-center shadow">
                        <img src={aboutImg} alt='about' className='w-100 border border-success rounded' />
                        <div className="card-img-overlay" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="3000">
                            <h2 className="card-title mt-3 mt-md-5">{t("about.imgTitle")}</h2>
                            <h4 className="card-text mt-3 mt-md-5">{t("about.imgSubtitle")}</h4>
                            <a href='#contact' className='btn mt-3 mt-md-5' style={{ backgroundColor: "#5cad00", color: "white" }} >{t("about.btn")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
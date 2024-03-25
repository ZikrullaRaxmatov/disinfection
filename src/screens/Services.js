import React from 'react';
import virusImg from '../assets/virus.jpg'
import insectImg from '../assets/dis-hashorot.png'
import mouseImg from '../assets/dis-mouse.jpg'

import kalpa from '../assets/kalpalar.jpg'
import tarakan from '../assets/tarakanlar.jpg'
import chayon from '../assets/chayonlar.jpg'
import sichqon from '../assets/kalamushlar.jpg'
import burga from '../assets/burgalar.jpg'
import pest from '../assets/pestControl.jpg'
import { useTranslation } from 'react-i18next';


function Services() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className='container'>
            {/* Services */}
            <div className='row mt-5'>
                <h1 id='services'>{t("services.title")}</h1>
                <hr />
                <h5 className=''>{t("services.subtitle")}</h5>
            </div>
            <div className='row text-right border border-success rounded mt-5' data-aos="zoom-in-up" data-aos-duration="2000">
                <div className='d-none col-md-3 d-lg-flex justify-content-center align-items-center' >
                    <img src={virusImg} alt='virus' className=' w-100 rounded-pill mt-2' />
                </div>
                <div className='col-12 col-lg-9 position-relative'>
                    <span className="d-lg-none position-absolute top-0 start-50  translate-middle rounded-circle" style={{ width: "100px" }} ><img src={virusImg} alt='virus' className='w-100 rounded-pill' /></span>
                    <h2 className='mt-5'>{t("services.title1")}</h2>
                    <p>{t("services.body1")}</p>
                </div>
            </div>

            <div className='row border border-success rounded mt-5' data-aos="zoom-in-up" data-aos-duration="2000">
                <div className='d-none col-md-3 d-lg-flex justify-content-center align-items-center' >
                    <img src={insectImg} alt='virus' className=' w-100 rounded-pill mt-2' />
                </div>
                <div className='col-lg-9 position-relative '>
                    <span className="d-lg-none position-absolute top-0 start-50 translate-middle rounded-circle" style={{ width: "100px" }} ><img src={insectImg} alt='virus' className='w-100 rounded-pill' /></span>
                    <h2 className='mt-5'>{t("services.title2")}</h2>
                    <p>{t("services.body2")}</p>
                </div>
            </div>

            <div className='row border border-success rounded mt-5' data-aos="zoom-in-up" data-aos-duration="2000">
                <div className='d-none col-md-3 d-lg-flex justify-content-center align-items-center' >
                    <img src={mouseImg} alt='virus' className=' w-100 rounded-pill mt-2' />
                </div>
                <div className='col-lg-9 position-relative'>
                    <span className="d-lg-none position-absolute top-0 start-50 translate-middle rounded-circle" style={{ width: "100px" }} ><img src={mouseImg} alt='virus' className='w-100 rounded-pill' /></span>
                    <h2 className='mt-5'>{t("services.title3")}</h2>
                    <p>{t("services.body3")}</p>
                </div>
            </div>

            {/* Type of services */}
            <div className='row mt-5'>
                <h1>{t("service_type.title")}</h1>
            </div>
            <div className='row mt-2 '>
                <div className='col-12 col-md-6 mt-3 ' data-aos="flip-left" data-aos-duration="2000" >
                    <div className="card shadow text-center">
                        <div className="card-header">
                            {t("service_type.title1")}
                        </div>
                        <div className="card-body">
                            <img src={kalpa} alt='kalpa' className='w-25 border border-success rounded-pill' />
                            <p className="card-text">{t("service_type.body1")}</p>
                            <a href="#contact" style={{ backgroundColor: "#5cad00", color: "white" }} className="btn">{t("service_type.btn")}</a>
                        </div>
                        <div className="card-footer text-body-secondary">
                            {t("service_type.footer1")}
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 mt-3' data-aos="flip-left" data-aos-duration="2000" >
                    <div className="card shadow text-center">
                        <div className="card-header">
                            {t("service_type.title2")}
                        </div>
                        <div className="card-body">
                            <img src={tarakan} alt='kalpa' className='w-25 border border-success rounded-pill' />
                            <p className="card-text">{t("service_type.body2")}</p>
                            <a href="#contact" style={{ backgroundColor: "#5cad00", color: "white" }} className="btn">{t("service_type.btn")}</a>
                        </div>
                        <div className="card-footer text-body-secondary">
                            {t("service_type.footer2")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-12 col-md-6 mt-3' data-aos="flip-left" data-aos-duration="2000" >
                    <div className="card shadow text-center">
                        <div className="card-header">
                            {t("service_type.title3")}
                        </div>
                        <div className="card-body">
                            <img src={chayon} alt='kalpa' className='w-25 border border-success rounded-pill' />
                            <p className="card-text">{t("service_type.body3")}</p>
                            <a href="#contact" style={{ backgroundColor: "#5cad00", color: "white" }} className="btn">{t("service_type.btn")}</a>
                        </div>
                        <div className="card-footer text-body-secondary">
                            {t("service_type.footer3")}
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 mt-3' data-aos="flip-left" data-aos-duration="2000" >
                    <div className="card shadow text-center">
                        <div className="card-header">
                            {t("service_type.title4")}
                        </div>
                        <div className="card-body">
                            <img src={sichqon} alt='kalpa' className='w-25 border border-success rounded-pill' />
                            <p className="card-text">{t("service_type.body4")}</p>
                            <a href="#contact" style={{ backgroundColor: "#5cad00", color: "white" }} className="btn">{t("service_type.btn")}</a>
                        </div>
                        <div className="card-footer text-body-secondary">
                            {t("service_type.footer4")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-12 col-md-6 mt-3' data-aos="flip-left" data-aos-duration="2000" >
                    <div className="card shadow text-center">
                        <div className="card-header">
                            {t("service_type.title5")}
                        </div>
                        <div className="card-body">
                            <img src={burga} alt='kalpa' className='w-25 border border-success rounded-pill' />
                            <p className="card-text">{t("service_type.body5")}</p>
                            <a href="#contact" style={{ backgroundColor: "#5cad00", color: "white" }} className="btn">{t("service_type.btn")}</a>
                        </div>
                        <div className="card-footer text-body-secondary">
                            {t("service_type.footer5")}
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate */}
            <div className='d-flex justify-content-center align-items-center row mt-5 border border-success rounded m-2 ' data-aos="flip-right" data-aos-duration="3000" >
                <div className='col-lg-7 d-flex justify-content-center align-items-center p-3'>
                    <img src={pest} alt='certificate' className=' w-75 rounded ' />
                </div>
                <div className='col-lg-5 pb-3 pb-md-0'>
                    <i className="fa-solid fa-file-shield fa-2xl " style={{ color: "#0cad00" }}></i>
                    <p className='fs-4 mt-2'>
                        {t("service_type.imgTitle")}
                    </p>
                    <a href='#contact' style={{ backgroundColor: "#5cad00", color: "white" }} className='btn mt-2'>{t("service_type.btn")}</a>
                </div>
            </div>
        </div>
    );
}

export default Services;
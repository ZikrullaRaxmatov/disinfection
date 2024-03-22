import React from 'react';
import contactImg from '../assets/con.jpg'
import { useTranslation } from 'react-i18next';

function Contact() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className='container' id='contact' >
            <h1 className='mt-5'>{t("contact.title")}</h1>
            <hr />
            <div className='row border border-success rounded mt-5 m-2 m-md-0' data-aos="zoom-in-up" data-aos-duration="2000">
                <div className='col-12 col-md-6 p-4'>
                    <div className="card shadow p-3" style={{ width: "25rem;" }}>
                        <div className='card-header text-center'>
                            <h3>{t("contact.subTitle")}</h3>
                        </div>
                        <div className="card-body">
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">{t("contact.name")}</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder={t("contact.namePl")} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">{t("contact.phone")}</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder={t("contact.phonePl")} />
                                </div>
                            </form>
                            <a href="#contact" style={{ backgroundColor: "#5cad00", color: "white" }} className="d-flex justify-content-center align-items-center btn fw-bold">{t("contact.btn")}<i className="fa-solid fa-paper-plane fa-lg ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className='col-0 d-none col-md-6 d-md-block p-4'>
                    <img src={contactImg} alt='contactImg' className='w-100 rounded' />
                </div>
            </div>
        </div>
    );
}

export default Contact;
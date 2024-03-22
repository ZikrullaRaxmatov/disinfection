import React from 'react';
import footerImg from '../assets/GreenLogo.jpg'
import { useTranslation } from 'react-i18next';

function Footer() {

     // eslint-disable-next-line
     const [t, i18n] = useTranslation("global")

    return (
        <div className='mt-5 mb-4'>
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='col-4 d-flex justify-content-evenly align-items-center'>
                        <img src={footerImg} alt='footerImg' className='w-50' />
                    </div>
                    <div className='col-8 d-flex justify-content-evenly align-items-center'>
                        <div>
                            <i className="fa-solid fa-location-dot fa-xl me-2" style={{ color: "#0cad00" }} ></i>
                            <label className='fw-bold'>{t("footer.location")}</label>
                        </div>
                        <div>
                            <i className="fa-solid fa-phone fa-xl me-2" style={{ color: "#0cad00" }} ></i>
                            <label className='fw-bold'>+998 99 111 00 77</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
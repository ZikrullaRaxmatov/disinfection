import React from 'react';
import footerImg from '../assets/logo.jpg'

function Footer() {
    return (
        <div className='mt-5 mb-2'>
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='col-4 d-flex justify-content-evenly align-items-center'>
                        <img src={footerImg} alt='footerImg' className='w-50' />
                    </div>
                    <div className='col-8 d-flex justify-content-evenly align-items-center'>
                        <div>
                            <i class="fa-solid fa-location-dot fa-xl me-2" style={{ color: "#0cad00" }} ></i>
                            <label className='fw-bold'>Farg'ona, O'zbekiston</label>
                        </div>
                        <div>
                            <i class="fa-solid fa-phone fa-xl me-2" style={{ color: "#0cad00" }} ></i>
                            <label className='fw-bold'>+998 99 111 00 77</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
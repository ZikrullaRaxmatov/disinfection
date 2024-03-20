import React from 'react';
import logo from '../assets/GreenLogo.jpg'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top shadow" style={{ backgroundColor: "#fff" }}>
            <div className="container">
                <a className="navbar-brand" href="#!">
                    <img src={logo} alt='Logo' className='w-50 ms-5'/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link fs-4 me-3 " aria-current="page" href="#main">Main</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4 me-3" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4 me-3 " href='#services' >Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4 me-3 " href='#faqs' >FAQs</a>
                        </li>
                        <li className="nav-item dropdown fs-4 me-3">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#!" role="button" aria-expanded="false">Language</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#!">Eng</a></li>
                                <li><a className="dropdown-item" href="#!">Rus</a></li>
                                <li><a className="dropdown-item" href="#!">Uzb</a></li>
                            </ul>
                        </li>
                        <li className="nav-item fs-4 me-3">
                            <a className="nav-link btn " href='#contact' style={{ color: "#0cad00" }} >
                                Contact
                                <i className="fa-solid fa-paper-plane ms-2"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
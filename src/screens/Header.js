import React from 'react';
import logo from '../assets/logo.jpg'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">
                    <img src={logo} alt='Logo' style={{width : "150px"}} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#!">Main</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href='#!' >Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href='#!' >FAQs</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#!" role="button" aria-expanded="false">Dropdown</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#!">Eng</a></li>
                                <li><a className="dropdown-item" href="#!">Rus</a></li>
                                <li><a className="dropdown-item" href="#!">Uzb</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href='#!' >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
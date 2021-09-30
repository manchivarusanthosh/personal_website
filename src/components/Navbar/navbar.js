import React from 'react'
import './style.css'

function navbar() {
    return (
        <div>
            <header id="header">
                <div className="container">
                    <h1><a href="index.html">M Santhosh Kumar</a></h1>
                    <a href="index.html" className="mr-auto">
                        <img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
                    <h2>I'm a passionate <span>Full Stack Developer</span> from India</h2>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link active" href="#header">Home</a></li>
                            <li><a className="nav-link" href="#about">About</a></li>
                            <li><a className="nav-link" href="#resume">Resume</a></li>
                            <li><a className="nav-link" href="#services">Services</a></li>
                            <li><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <div className="social-links">
                        <a href="https://twitter.com" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="https://facebook.com" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="https://instagram.com" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="https://linkedin.com" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default navbar

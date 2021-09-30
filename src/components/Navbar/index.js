import React, { useState } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { items } from './content';


function NavBar() {

    const [click,setClick] = useState(false)
    return (
        <>
            <header id="header">
                <div className="container">
                    <h1>M Santhosh Kumar</h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    {/* <a href="index.html" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a> */}
                    <h2>I'm a passionate <span>Full Stack Developer</span> from India</h2>

                    <nav id="navbar" className={`${click ?"navbar navbar-mobile":"navbar"}`}>
                        <ul>
                            {items.map((each,index)=>(
                                <li><a className="nav-link" href={each.to}
                                exact
                                to={each.to}
                                key={index}
                                >{each.to}</a></li>
                            ))}
                        </ul>
                        <i 
                        className={`${click ? "fas fa-times mobile-nav-toggle" : "fas fa-bars mobile-nav-toggle" }`}
                        onClick={()=>setClick(!click)}
                        ></i>
                    </nav>

                    <div className="social-links">
                        <a href="https://twitter.com/" className="twitter"><i className="fab fa-twitter"></i></a>
                        <a href="https://m.facebook.com/" className="facebook"><i className="fab fa-facebook"></i></a>
                        <a href="https://instagram.com/" className="instagram"><i className="fab fa-instagram"></i></a>
                        <a href="https://linkedin.com/" className="linkedin"><i className="fab fa-linkedin"></i></a>
                    </div>

                </div>
            </header>
        </>
    )
}

export default NavBar

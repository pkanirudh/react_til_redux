import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <div className='footer_wrapper'>
            <footer className="page-footer">
                <div className="container-fluid text-center text-md-left">
                <div className = "col-sm-6">
                    <ul className = "list">
                        <li>Dracula</li>
                        <li>Vladamir</li>
                        <li>Nosferatu</li>
                    </ul>
                </div>
                    <div className = "col-sm-6">
                        <ul>
                            <li><span className="fa fa-facebook-official fa-2x"></span></li>
                            <li><span className="fa fa-twitter fa-2x"></span></li>
                            <li><span className="fa fa-instagram fa-2x"></span></li>
                        </ul>
                    </div>
                </div>
            </footer>
           
        </div>
    );

}

export default Footer;
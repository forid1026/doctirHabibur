import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './Copyright.css';
const Copyright = () => {
    return (
        <div className="copyright">
            <div className="container  d-flex">
            <div className="copyright-left">
                <p>© 2020 Dr.Habibur Rahman. All Rights Reserved.Developed by <a href="https://nebulas-it.com/" target="_blank">Nebulas IT LTD</a></p>
            </div>
            <div className="copyright-social-icon d-flex">
                            <p>আমাদেরকে অনুসরণ করুন</p>
                            <ul className="d-flex copyright-social-icons">
                                <li>
                                    <a className="facebook"  href="/"  >
                                    <FontAwesomeIcon icon={faFacebook}   />
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="twitter">
                                    <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="instagram">
                                    <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                
                                
                            </ul>
            </div>
        </div>
        </div>
    );
};

export default Copyright;
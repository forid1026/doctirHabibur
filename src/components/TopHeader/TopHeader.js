import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './TopHeader.css';

import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-7">
                        <div className="topbar-left">
                            <ul className="d-flex">
                                <li>
                                   
                                    <a href="tel:০৯৬৭৮৭০১৭০১">০৯৬৭৮৭০১৭০১</a>
                                </li>
                                <li>
                                      বিকাল ৫:৩০ হতে রাত ৮:০০ টা
                                </li>
                                <li>
                                <a href="mailto:drhabib97@gmail.com">drhabib97@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-5">
                        <div className="topbar-right d-flex">
                            <p>আমাদেরকে অনুসরণ করুন</p>
                            <ul className="d-flex social-icons">
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
            </div>
            
        </div>
    );
};

export default TopHeader;
import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-box">
                            <div className="footer-title">
                                <h4 className="widgettitle green_sketch ">গ্যালারি</h4>
                            </div>
                            <div className="footer-body">
                                <div className="footer-gallery">
                                    <ul className="list-unstyled list-inline">
                                        <li>
                                            <a href="javaScript:void(0)">
                                                <img src="https://i.ibb.co/dgRYX7t/ex-1-b1abe022.jpg" width="80px" className="rounded float-left" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javaScript:void(0)">
                                                <img src="https://i.ibb.co/CPyxz97/ex-2-cc49857d.jpg" className="rounded float-left" width="80px" alt="" />
                                            </a>
                                        </li>
                                       
                                        <li>
                                            <a href="javaScript:void(0)">
                                                <img src="https://i.ibb.co/9gCYZCJ/ex-3-77fb1f56.jpg" className="rounded float-left" width="80px" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javaScript:void(0)">
                                                <img src="https://i.ibb.co/rc2qhwW/ex-4-54372105.jpg" className="rounded float-left" width="80px" alt="" />
                                            </a>
                                        </li>
                                      
                                        <li>
                                            <a href="javaScript:void(0)">
                                                <img src="https://i.ibb.co/PDWRtCD/ex-5-ec810cb2.jpg" className="rounded float-left" width="80px" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javaScript:void(0)">
                                                <img src="https://i.ibb.co/Yp3ygn3/ex-6-d8c04f1f.jpg" className="rounded float-left" width="80px" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-box">
                            <div className="footer-title ">
                                <h4 className="widgettitle steelblue_sketch">যোগাযোগ</h4>
                            </div>
                            <div className="footer-box-body">
                                <div className="text-widget">
                                    <div className="c-des">
                                        <br/>
                                        <FontAwesomeIcon icon={faMapMarker}  className="span" />
                                            <strong className="english-f praava">
                                                <a className="text-dark" href="http://praavahealth.com">
                                                    PRAAVA HEALTH
                                                </a>
                                                <br />
                                                <p class="p-slog mt-4">Family Doctors + Diagnostics</p>
                                            </strong><br />
                                            <p class="sub-text">বনানী পোস্ট অফিস লেন (স্টার কাবাব রেস্তোরাঁর পাশে)
                                                <br />
                                                রোড নং ১৭, ব্লকঃ সি
                                            </p>
                                    </div>
                                   
                                    <div class="c-des">
                                        <FontAwesomeIcon icon={faPhone} className="span" />
                                        <strong> সিরিয়ালের জন্য: </strong>
                                        <br/>
                                            <a href="tel:09678701701" className="text-dark">০৯৬৭৮৭০১৭০১</a>
                                            <br/>
                                            <a href="tel:01847278043" className="text-dark"> </a>  
                                            <a href=""></a> 
                                     </div>
                                        
                                        <div class="c-des">
                                        <FontAwesomeIcon icon={faClock} className="span" />
                                            <strong> প্রতিদিন সময়:</strong>
                                            <br/>৫:৩০ হতে রাত ৮:০০ টা (বৃহস্পতিবার বন্ধ)
                                        </div>
                                        
                                        
                                       
                                        <div class="c-des">
                                        
                                        <FontAwesomeIcon icon={faEnvelope} className="span" />
                                            <a href="mailto:drhabib97@gmail.com" class="english-f" className="text-dark"> drhabib97@gmail.com</a>
                                        </div> 
                                    </div>
                                </div>

                                </div>
                            </div>
                            <div className="col-md-4"></div>

                        </div>
                    </div>

                </div>
    );
};

export default Footer;

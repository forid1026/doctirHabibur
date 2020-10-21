import React from 'react';
import './Recognition.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
const Recognition = () => {
    return (
        <div className="recognition">
            <div className="wrapper">
                <div className="container">
                    <div className="section-title t-recognition">
                        <h2>স্বীকৃতি</h2>
                    </div>
                    <div className="section-body">
                        <ul>
                        
                            <li>
                            <FontAwesomeIcon icon={faCheckSquare} className="checkIcon" /> 
                                <strong> এক্সিকিউটিভ মেম্বার : </strong> নিউট্রিশন সোসাইটি অব বাংলাদেশ</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} className="checkIcon" /> <strong>  মেম্বার : </strong> বাংলাদেশ ব্রেস্ট ফিডিং ফাউন্ডেশন</li>
                            <li> <FontAwesomeIcon icon={faCheckSquare} className="checkIcon" />  <strong> এডভাইজার : </strong> বাংলাদেশ ফুড এন্ড নিউট্রিশন সোসাইটি</li>
                            <li><FontAwesomeIcon icon={faCheckSquare}  className="checkIcon"/>  <strong> মেম্বার : </strong> আমেরিকান সোসাইটি ফর নিউট্রিশন</li>
                            <li><FontAwesomeIcon icon={faCheckSquare}  className="checkIcon"/> <strong> মেম্বার : </strong> কানাডিয়ান নিউট্রিশন সোসাইটি</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} className="checkIcon" /> <strong> মেম্বার : </strong> দি নিউট্রিশন সোসাইটি ইউ কে (যুক্তরাজ্য)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recognition;
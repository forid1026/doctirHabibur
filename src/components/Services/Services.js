import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    return (
       <div className="services">
           <div className="wrapper">
               <div className="container">
                   <div className="section-title services-t">
                       <h2>সেবা সমূহ</h2>
                   </div>
                   <div className="section-body">
                       <div className="row">
                        <ul>
                            
                            <li><FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> <span> যে সমস্ত বাচ্চারা একদম খেতে চাইনা অথবা দিন দিন শুকিয়ে যাচ্ছে সেই বিষয়ে পরামর্শ প্রদান ও খাদ্য তালিকা প্রনয়ণ। </span> 
                            </li>
                            <li><FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> <span> বয়স অনুযায়ী শিশুর ওজন , উচ্চতা বা মানসিক বিকাশ ঠিক আছে কিনা সেটা পরিমাপ ও নিউট্রিশনাল প্লান। </span> 
                            </li>
                            <li><FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> <span>  অপুষ্টিতে ভোগা শিশু বা অতিরিক্ত মোটা/ শিশুর স্থূলতা বিষয়ক ডায়েট প্ল্যান। </span> 
                            </li>
                            <li><FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> <span>  অটিস্টিক শিশু/অতি অস্থির শিশু অথবা <span className="english-font">ADHD</span> শিশুর খাদ্য পরামর্শ। </span> 
                            </li>
                            <li><FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> <span> শিশুদের হরমোনাল সমস্যা যেমন: ডায়াবেটিস বা হাইপোথাইরয়েড সমস্যার খাদ্য তালিকা প্রণয়ন। </span> 
                            </li>
                            <li><FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> <span> বয়সভেদে শিশুর খাদ্য পরামর্শ যেমন : ছয় মাস বয়স শেষে অতিরিক্ত খাবার বা <span className="english-font">complementary feeding</span> বিষয়ক পরামর্শ, এছাড়া ও বিভিন্ন বয়সী শিশু যেমন বাড়ন্ত শিশু , স্কুল পড়ুয়া শিশুর ডায়েট প্লান। </span> 
                            </li>
                            <li><FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> <span> যে সকল বাচ্চা খাবারের পর পরই বমি করে তাদের খাদ্য ও চিকিৎসা পরামর্শ। </span> 
                            </li>
                            <li><FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> <span> শিশুর মেধা বিকাশ, ওজন/ উচ্চতা বৃদ্ধির ডায়েট প্লান। </span> 
                            </li>
                            <li><FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> <span>  বিভিন্ন <span className="english-font">Blood disorders</span> যেমন- থ্যালাসেমিয়ার কারনে রক্ত শূন্যতা পূরণের ডায়েট। </span> 
                            </li>
                            <li><FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> <span> বিভিন্ন পরিপাকতন্ত্রের সমস্যা যেমনঃ গ্যাস্ট্রিকের সমস্যা, দীর্ঘমেয়াদী ডায়রিয়া/আমাশয়, পেট ব্যথা, কোষ্ঠকাঠিন্য, খাদ্যে এলার্জীর ডায়েট চার্ট । </span> 
                            </li>
                            <li><FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> <span> বিভিন্ন জেনেটিক সমস্যা যেমনঃ <span className="english-font">DOWN syndrome,</span> হেমোফিলিয়া <span className="english-font">(Hemophilia)</span> এর নিউট্রিশনাল প্লান। </span> 
                            </li>
                            <li><FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> <span> বিভিন্ন মেটাবলিক সমস্যা যেমনঃ <span className="english-font">Wilson's disease, Phenylketonuria,</span> রিকেটস <span className="english-font">(Rickets)</span> আক্রান্ত শিশুর খাবার পরামর্শ। </span> 
                            </li>
                            <li>
                                <FontAwesomeIcon className="arrowIcon" icon={faAngleDoubleRight}/> 
                                <span>
                                এছাড়াও হাড়ের <span className="english-font">(Bones)</span> সমস্যা, দীর্ঘমেয়াদী জ্বর, কিডনির সমস্যা সহ শিশুদের সকল রোগের চিকিৎসা সমন্বিত নিউট্রিশনাল প্লান প্রদান করা হয়ে থাকে।
                                </span>
                            </li>
                            
                        </ul>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );
};

export default Services;
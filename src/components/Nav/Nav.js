import React from 'react';
import './Nav.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <Navbar className="nav-background"  expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">

                    <div className="d-flex">
                        <div className="logo-image">
                            <img src="https://i.ibb.co/DGnBLB9/dr-habib.png" alt="" />
                        </div>
                        <div className="logo-info mt-3 ml-2">
                            <h5 className="mb-2">Dr. Habibur Rahman</h5>
                            <span> Child Health & Clinical Nutrition Specialist</span>
                        </div>
                    </div>


                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navbar-nav">
                        <Nav.Link className="nav-home">
                            <Link className="nav-link" to="/home">
                            হোম
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="nav-about">
                            <Link className="nav-link" to="/about">
                                আমার সম্পর্কে
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="nav-gallery">
                            <Link className="nav-link" to="/gallery">গ্যালারি</Link>
                        </Nav.Link>
                        <Nav.Link className="nav-team">
                            <Link className="nav-link" to="/team">টিম</Link>
                        </Nav.Link>
                        <Nav.Link className="nav-recognition">
                            <Link className="nav-link" to="/recognition">স্বীকৃতি</Link>
                        </Nav.Link>
                        <Nav.Link className="nav-blog">
                            <Link className="nav-link" to="/blog">ব্লগ</Link>
                        </Nav.Link>
                        <Nav.Link className="nav-service">
                            <Link className="nav-link" to="/services">সেবা</Link>
                        </Nav.Link>
                        <Nav.Link className="nav-something">
                            <Link className="nav-link" to="/something">কিছু কথা</Link>
                        </Nav.Link>

                        <Nav.Link className=" dropdown nav-tvNews" id="navbarDropdown">
                            <Link className="nav-link" to="/tvNews">প্রকাশনা</Link>
                            <div aria-labelledby="navbarDropdown" className="dropdown-menu">
                                <Link className="dropdown-item" to="/tv">টিভি</Link>
                                <Link className="dropdown-item" to="/news">সংবাদপত্র</Link>
                            </div>
                        </Nav.Link>

                        <Nav.Link className="nav-contact">
                            <Link className="nav-link" to="/contact">যোগাযোগ</Link>

                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default MainHeader;












// import React from 'react';
// import './Nav.css';
// import { Link } from "react-router-dom";

// const Nav = () => {
//     return (
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//      <div className="container">
//      <a classNameName="navbar-brand" href="#nav">
//          <div className="d-flex">
//          <div className="logo-image">
//              <img src="https://i.ibb.co/DGnBLB9/dr-habib.png" alt=""/>
//          </div>
//          <div className="logo-info mt-3 ml-2">
//              <h5 className="mb-2">Dr. Habibur Rahman</h5>
//              <span> Child Health & Clinical Nutrition Specialist</span>
//          </div>
//          </div>
//      </a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item nav-home">
//         <Link className="nav-link" to="/home">হোম <span className="sr-only">(current)</span></Link>
//       </li>
//       <li className="nav-item nav-about">

//         <Link className="nav-link" to="/about">
//         আমার সম্পর্কে
//         </Link>
//       </li>
//       <li className="nav-item nav-gallery">
//         <Link className="nav-link" to="/gallery">গ্যালারি</Link>
//       </li>
//       <li className="nav-item nav-team">
//         <Link className="nav-link" to="/team">টিম</Link>
//       </li>
//       <li className="nav-item nav-recognition">
//         <Link className="nav-link" to="/recognition">স্বীকৃতি</Link>
//       </li>
//       <li className="nav-item nav-blog">
//         <Link className="nav-link" to="/blog">ব্লগ</Link>
//       </li>
//       <li className="nav-item nav-service">
//         <Link className="nav-link" to="/service">সেবা</Link>
//       </li>
//       <li className="nav-item nav-something">
//           <Link className="nav-link" to="/something">কিছু কথা</Link>
//       </li>

//       <li className="nav-item dropdown nav-dropdown">
//         <a className="nav-link " href="/media" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         প্রকাশনা
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <Link className="dropdown-item" to="/tv">টিভি</Link>
//           <Link className="dropdown-item" to="/news">সংবাদপত্র</Link>
//         </div>
//       </li>
//       <li className="nav-item nav-contact">
//           <Link className="nav-link" to="/contact">যোগাযোগ</Link>
//       </li>
//     </ul>

//   </div>
//      </div>

// </nav>
//     );
// };

// export default Nav;
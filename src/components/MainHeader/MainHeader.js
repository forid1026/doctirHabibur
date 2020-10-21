import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
       <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home">

        <div className="d-flex">
            <div className="logo-image">
                <img src="https://i.ibb.co/DGnBLB9/dr-habib.png" alt=""/>
            </div>
            <div className="logo-info mt-3 ml-2">
                <h5 className="mb-2">Dr. Habibur Rahman</h5>
                <span> Child Health & Clinical Nutrition Specialist</span>
            </div>
        </div>


  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link>
         <Link className="nav-link" to="/about">
            আমার সম্পর্কে
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link className="nav-link" to="/gallery">গ্যালারি</Link>
      </Nav.Link>
      <Nav.Link>
         <Link className="nav-link" to="/team">টিম</Link>
      </Nav.Link>
      <Nav.Link>
      <Link className="nav-link" to="/recognition">স্বীকৃতি</Link>
      </Nav.Link>
      <Nav.Link>
      <Link className="nav-link" to="/blog">ব্লগ</Link>
      </Nav.Link>
      <Nav.Link>
      <Link className="nav-link" to="/service">সেবা</Link>
      </Nav.Link>
      <Nav.Link>
      <Link className="nav-link" to="/something">কিছু কথা</Link>
      </Nav.Link>
      
      <NavDropdown title="প্রকাশনা" id="basic-nav-dropdown">
        <NavDropdown.Item>
        <Link className="dropdown-item" to="/tv">টিভি</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
        <Link className="dropdown-item" to="/news">সংবাদপত্র</Link>
        </NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    );
};

export default MainHeader;
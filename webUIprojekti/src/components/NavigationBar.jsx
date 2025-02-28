import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style_footer_navbar.css';
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/VeikkaKukkoTeksti.png";
import talo from "../assets/Talo_Icon.png";
import { User } from "lucide-react";
import Button from "react-bootstrap/Button";




const NavigationBar = () => {

  const [isSticky, setIsSticky] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 300; // Start fading after 300px scroll
      const fadeEnd = 600; // Fully hidden after 600px scroll

      if (scrollY < fadeStart) {
        setIsSticky(true);
        setOpacity(1);
      } else if (scrollY < fadeEnd) {
        setIsSticky(true);
        setOpacity(1 - (scrollY - fadeStart) / (fadeEnd - fadeStart)); // Gradual fade
      } else {
        setIsSticky(false);
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`white-text navbar ${isSticky ? "sticky" : ""}`} style={{ opacity }}>
      <Container fluid>
      <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="150"
            height="90"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

            <>
            <Nav className="mx-auto">
              <Nav.Link href="/" className="custom-nav-link">
                <img 
                  src={talo}
                  alt="Home" 
                  style={{ width: "40px" }} 
                />
              </Nav.Link>
              
              <Nav.Link to="#/tyo-ja-opinnot" className="custom-nav-link">
                Työ ja opinnot
              </Nav.Link>

              <Nav.Link to="#/ohjelmointi" className="custom-nav-link">
                Ohjelmointiprojektit
              </Nav.Link>

              <Nav.Link to="#/vektoritaide" className="custom-nav-link">
                Vektoritaidetta
              </Nav.Link>

            </Nav>

            
            {/*<Nav className="ms-auto">
            <Nav.Link href="/login" className="custom-nav-link">Logout</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Button
                variant="outline-light" // Use 'light' for white text, or 'primary' for a blue button
                className="d-flex align-items-center logout-button"
                as={Link}
                to="/login"
              >
                <User size={20} className="me-2" /> Logout
              </Button>
            </Nav>*/}

            {/* Profile Dropdown 
            <Nav className="ms-auto">
                <Dropdown align="end">
                  <Dropdown.Toggle variant="outline-light" id="profile-dropdown">
                    <User size={20} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-end">
                    <Dropdown.Header>Account Info</Dropdown.Header>
                    <Dropdown.ItemText>Username: Mikko</Dropdown.ItemText>
                    <Dropdown.ItemText>Email: mikko@example.com</Dropdown.ItemText>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/edit-profile" style={{ color: "black" }}>Edit Profile</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/login" className="text-danger">Log out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              */}
          </>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
  
};

export default NavigationBar;

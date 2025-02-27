import React from "react";
import { Button } from "react-bootstrap";
import { Card, Container, Row, Col } from 'react-bootstrap';
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";
import "./Style_Home.css";
import gitLogo from "../assets/GitHub_Icon.png"
import robo from "../assets/robo1.png";


const Ohjelmointi = () => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px'
      };
    
  
  return (
    <>
      <NavigationBar></NavigationBar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><br />
      <div style={containerStyle}>
        <p style={{textAlign: 'left'}}>
            <strong>Ohjelmointiprojektit</strong>
            <br /><br />
            (Tältä sivulta löydät esittelyn ohjelmointiprojekteista, joissa olen ollut mukana.)
        </p>
        
        <Button className="git-button" href="https://github.com/veikkakukko/veikkakukko">
            <img src={gitLogo} alt="GitHubin logo" width={35}/>
            Linkki GitHub-portfolioon
        </Button>
      </div>

      <Card className="full-width-card w-100 border-0 overflow-hidden">
        <Row className="g-0">
            {/* Text on the Left */}
            <Col md={6} className="d-flex align-items-center p-4">
            <Card.Body>
                <Card.Title style={{ fontFamily: 'Hoefler Text', fontWeight: 'bold' }}>
                Robottiprojekti
                </Card.Title>
                <Card.Text>
                Ohjelmoin robotiikan kurssilla tällaisen robotin. Pohjana projektissa oli Arduino Uno. Opin ohjelmoimaan C-kielellä.
                </Card.Text>
            </Card.Body>
            </Col>

            {/* Image on the Right */}
            <Col md={6} className="p-0">
            <Card.Img
                src={robo}
                alt="Robotti"
                className="img-fluid full-width-img"
            />
            </Col>
        </Row>
      </Card>

      <Footer />
    </>
  );
};

export default Ohjelmointi;

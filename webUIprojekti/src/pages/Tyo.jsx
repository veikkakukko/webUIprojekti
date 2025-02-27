import React from "react";
import { Container, Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";
import "./Style_Home.css";
import yokuva from "../assets/YO-kuva.jpg"
import opiskelua from "../assets/opiskelua.jpeg";
import katolla from "../assets/katolla.jpg";
import { FileText } from "lucide-react"; // Importing an icon for PDF download


const Tyo = () => {
  
  return (
    <>
      <NavigationBar></NavigationBar>
      <br />
      <br />

      <Container fluid className="new-page-container">
        <Row className="align-items-start content-row">
          {/* Left Side: Button & Text */}
          <Col xs={12} md={6} className="left-content p-4">

            <p>
              <strong>
                Työ ja opinnot
              </strong>
              <br />
              <br />
              (Tältä sivulta löydät ansioluetteloni sekä tietoa työ- ja opintotaustaani liittyen.)
            </p>

            <br />

            <OverlayTrigger
              placement="top" // Position: top, right, bottom, left
              overlay={<Tooltip id="button-tooltip">Lataa: "CV Veikka Kukko.pdf" (Tästä ei oikeasti saa vielä ladattua tiedostoa)</Tooltip>}
            >
              <Button className="pdf-button">
                <FileText size={20} className="icon" />Lataa CV tästä
              </Button>
            </OverlayTrigger>

            <br />
            <br />
            <p>
            Esittely:
            <br />
            Olen tietojenkäsittelytieteiden opiskelija Itä-Suomen yliopistossa. 
            Minua kiinnostaa erityisesti sulautettu kehitys, kuten robotiikka ja IoT. 
            Haluan kehittyä rautaiseksi IT-alan ammattilaiseksi. Toimin Nuorten yrittäjyys 
            ja talous NYTin lähettiläänä kiertäen kertomassa kouluilla tarinaani yrittäjyydestä. 
            Asenteeni työelämään on innokas, avoin ja yrittäjämäinen. 
            Minulla on vahvat kieli- ja viestintätaidot.
            </p>         
          </Col>

          {/* Right Side: Image */}
          <Col xs={12} md={6} className="right-image">
            <img src={yokuva} alt="Ylioppilaskuva" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <div style={{width: "95%", alignSelf: "center"}}>
        <br />
        <br />
        <p>
          <strong>Opinnot:</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin metus orci, aliquam a sollicitudinpibus mi urna, venenatis pulvinar mi sagittis nec. 
          Donec rhoncus velit quam, sit amet auctor mi iaculis sed. Orci varius natoque penatibus et 
          magnis dis parturient montes, nascetur ridiculus mus. Proin metus orci, aliquam a sollicitudinn metus orci, 
          aliquam a sollicitudinpibus mi urna, venenatis pulvinar mi sagittis nec. 
          <br />
          <br />

          <figure>
            <img src={opiskelua} alt="Kuva ohjelmointityöskentelystä tietokoneella" className="img-fluid" width={800}/>
            <figcaption>Opintoihini kuuluu paljon ohjelmointia ja ongelmanratkaisua.</figcaption>
          </figure>

          <br />
          <strong>Työkokemus:</strong>
          <br />
          Donec rhoncus velit quam, sit amet 
          auctor mi iaculis sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          Proin metus orci, aliquam a sollicitudin ut, venenatis ac enim. Aenean ac dignissim nulla. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo mi nibh, in consectetur risus bibendum et. 
          Morbi tincidunt volutpat felis in aliquet. Nam quis enim posuere, elementum elit in, facilisis mauris. 
          Maecenas non orci lectus.
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin metus orci, aliquam a sollicitudinpibus mi urna, venenatis pulvinar mi sagittis nec. 
          Donec rhoncus velit quam, sit amet auctor mi iaculis sed. Orci varius natoque penatibus et 
          magnis dis parturient montes, nascetur ridiculus mus. Proin metus orci, aliquam a sollicitudinn metus orci, 
          aliquam a sollicitudinpibus mi urna, venenatis pulvinar mi sagittis nec. 
          <br /><br />
          <figure>
            <img src={katolla} alt="Kuva kattomaalareista ja heidän työnjäljestään" className="img-fluid" width={1000}/>
            <figcaption>Kesäisin työskentelen kattomaalarina. Tässä kuva valmistuneelta taloyhtiötyömaalta Helsingissä kesällä 2021.</figcaption>
          </figure>

        </p>
      </div>

      <Footer />
    </>
  );
};

export default Tyo;

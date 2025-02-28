import React from "react";
import { Button } from "react-bootstrap";
import { Card, Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";
import "./Style_Home.css";
import gitLogo from "../assets/GitHub_Icon.png";
import robo from "../assets/robo1.png";
import oti from "../assets/kayttoliittymankuva.png"

const Ohjelmointi = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    width: "90%",
    gap: "20px"
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="flex-container" style={containerStyle}>
        <p style={{ textAlign: "left"}}>
          <strong>Ohjelmointiprojektit</strong>
          <br />
          <br />
          (Tältä sivulta löydät esittelyn ohjelmointiprojekteista, joissa olen
          ollut mukana.)
        </p>

        <Button
          className="git-button"
          href="https://github.com/veikkakukko/veikkakukko"
        >
          <img src={gitLogo} alt="GitHubin logo" width={35} />
          Linkki GitHub-portfolioon
        </Button>
      </div>



      <div className="custom-card" style={{width: "90%", alignSelf: "center"}}>
        {/* Left Side - Text */}
        <div className="custom-text">
            <h2>Labyrinttirobotti</h2>
            <p>Kurssityö robotiikan kurssilla Itä-Suomen yliopiston Tietojenkäsittelytieteen laitoksella. 
                Minä ja tiimini rakensimme ja ohjelmoimme robotin, joka osaa kulkea labyrintin läpi.
                Pohjana robotille toimi Arduino Uno ja ohjelmoimme sen C:llä. Robotin toimintaa voit nähdä alla olevalla videolla. 
                Voit tarkastella projektia GitHubissa <a href="https://github.com/veikkakukko/mazeRobot">täältä</a>.
            </p>
        </div>

        <div className="video-container">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${"TwOko4wgAwU"}`}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
      </div>



      <div className="custom-card" style={{width: "90%", alignSelf: "center"}}>
        {/* Left Side - Text */}
        <div className="custom-text">
            <h2>Mökkivarausjärjestelmä</h2>
            <p>Savonia AMK:n Ohjelmistotuotanto I -kurssin ohjelmistoprojekti neljän hengen tiimissä. Village Newbies -varaustenhallintajärjestelmä. 
                Toteutustekniikoina Java ja SQL. Vastasin käyttöliittymän suunnittelusta ja toteutuksesta. 
                Voit tarkastella projektia GitHubissa <a href="https://github.com/Orofil/oti-projekti">täältä</a>.
            </p>
        </div>

        {/* Right Side - Image */}
        <div className="custom-image">
            <img src={oti} alt="Käyttöliittymänäkymä mökkivarausjärjestelmästä"/>
        </div>
      </div>

      <div className="custom-card" style={{width: "90%", alignSelf: "center"}}>
        {/* Left Side - Text */}
        <div className="custom-text">
            <h2>My Awesome Project</h2>
            <p>This section contains text on the left, and an image on the right. On mobile, they stack properly.</p>
        </div>

        {/* Right Side - Image */}
        <div className="custom-image">
            <img src={robo} alt="Robotti"/>
        </div>
      </div>

      
        <br /><br />
      <Footer />
    </>
  );
};

export default Ohjelmointi;

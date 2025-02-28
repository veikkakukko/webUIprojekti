import React from "react";
import { Button } from "react-bootstrap";
import { Card, Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";
import "./Style_Home.css";
import gitLogo from "../assets/GitHub_Icon.png";
import robo from "../assets/robo1.png";
import oti from "../assets/kayttoliittymankuva.png"
import joona from "../assets/Haalarimerkki.png"
import seppa from "../assets/Kiekkoseppä ympyrällä.png"
import sotilas from "../assets/Sotilaspoika.png"

const Taidetta = () => {
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
          <strong>Vektoritaidetta</strong>
          <br />
          <br />
          (Tältä sivulta löydät toteuttamiani vektoritaideteoksia. Teokset on tehty Linearity Curve -ohjelmalla.)
        </p>
      </div>



      <div className="custom-card" style={{width: "90%", alignSelf: "center"}}>
        {/* Left Side - Text */}
        <div className="custom-text">
            <h2>Serverin haalarimerkki</h2>
            <p>
            Tämä haalarimerkki on suunniteltu osana Serveri Ry:n haalarimerkkikilpailua. 
            Inspiraationa merkille toimii Justimusfilmsin Duo-sarjan Joona, 
            joka on kovan luokan hakkeri ja videopelien pelaaja. 
            Joona on stereotyyppinen nörtti, jonka kuolemattomiin lausahduksiin kuuluu mm. ”Player disconnected.”
            </p>
        </div>

        <div className="custom-image">
        <img src={joona} alt='Joona-teemainen haalarimerkki, jossa lukee: "Player connected to the Server"'/>
        </div>
      </div>



      <div className="custom-card" style={{width: "90%", alignSelf: "center"}}>
        {/* Left Side - Text */}
        <div className="custom-text">
            <h2>Kiekkoseppien logo</h2>
            <p>Pirkkalasta lähtöisin oleva harrastejääkiekkojoukkue Kiekkosepät tarvitsivat logon. Heillä oli luonnos valmiina. 
                Toteutin luonnoksen perusteella oman näkemykseni kiekkoa takovasta sepästä. 
                Suunnittelemani logo painatettiin Kiekkoseppien pelipaitoihin. Paidoista tuli aivan todella hienoja, vaikka itse sanonkin.
            </p>
        </div>

        {/* Right Side - Image */}
        <div className="custom-image">
            <img src={seppa} alt="Käyttöliittymänäkymä mökkivarausjärjestelmästä"/>
        </div>
      </div>

      <div className="custom-card" style={{width: "90%", alignSelf: "center"}}>
        {/* Left Side - Text */}
        <div className="custom-text">
            <h2>Sotilaspoika</h2>
            <p>
                Tämän vektoritaideteoksen loin erään varusmiespalveluksen kotiutumispäivänä otetun kuvan pohjalta. 
                Vektoritekniikka tekee M05-maastokuviosta näyttävän tässä kuvassa. 
                Kotiuduin Dragsivikin varuskunnasta aliluutnanttina palveltuani 347 päivää.
            </p>
        </div>

        {/* Right Side - Image */}
        <div className="custom-image">
            <img src={sotilas} alt="Vektoritaideteos Veikasta sotilaan puvussa."/>
        </div>
      </div>

      
        <br /><br />
      <Footer />
    </>
  );
};

export default Taidetta;


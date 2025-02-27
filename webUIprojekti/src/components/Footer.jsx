import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './Style_footer_navbar.css'
import React from "react";

const Footer = () => {
  return (
    <footer className="custom-footer">
    <Container fluid className="p-4">
        <section className="mb-4">
            <p></p>
        </section>
    </Container>

    <div className="text-center p-3 footer-text" style={{ backgroundColor: 'rgb(39, 39, 39)'}}>
        <p className='text-center' >Yhteystiedot: <br />
            Puhelin: +358440153888 <br />
            Sähköposti: veikka.kukko@gmail.com <br /> 
            <br />
        © Veikka Kukko, 2025</p>
    </div>
</footer>
  );
};

export default Footer;
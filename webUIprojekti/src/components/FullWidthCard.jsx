import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const FullWidthCard = () => {
  return (
    <Container fluid className="my-4">
      <Card className="full-width-card">
        <Row className="g-0">
          {/* Text on the Left */}
          <Col md={6} className="d-flex align-items-center">
            <Card.Body>
              <Card.Title>My Awesome Project</Card.Title>
              <Card.Text>
                This is an example of a full-width card layout where text is on
                the left, and an image is on the right. On mobile, they stack!
              </Card.Text>
            </Card.Body>
          </Col>

          {/* Image on the Right */}
          <Col md={6}>
            <Card.Img
              src="https://via.placeholder.com/600x300"
              alt="Placeholder"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default FullWidthCard;

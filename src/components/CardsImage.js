import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardsImage = () => {
  return (
    <div className='text-center mt-5'>
      <p style={{ fontWeight: 'bold', fontSize: '30px' }}>Raise Funds for Your Need..!! </p>
      <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'green' }}>On Crodo</p>
      <p style={{ fontSize: '20px' }}>No matter the treatment, no matter the cost for charity, raise money for your business online.</p>
      <Container className="mt-5">
        <Row className="mt-4">
          <Col md={3}>
            <Card className="border-0">
            <Link to ="/projectlisting" ><Card.Img variant="top" 
              src="https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
              <Card.Body>
               <Card.Title className="fw-bold">Healthcare</Card.Title>
              </Card.Body></Link>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0">
              <Card.Img variant="top" src="https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
              <Card.Body>
              <Link to ="/projectlisting" > <Card.Title className="fw-bold">Business</Card.Title></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0">
              <Card.Img variant="top" src="https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
              <Card.Body>
              <Link to ="/projectlisting" > <Card.Title className="fw-bold">Charity</Card.Title></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0">
              <Card.Img variant="top" src="https://images.pexels.com/photos/5466785/pexels-photo-5466785.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" />
              <Card.Body>
              <Link to ="/projectlisting" ><Card.Title className="fw-bold">Others</Card.Title></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardsImage;

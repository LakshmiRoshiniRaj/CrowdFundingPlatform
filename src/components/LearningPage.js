import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const cardStyles = [
  { border: '2px solid #ffcc00', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' },
  { border: '2px solid #33cc33', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' },
  { border: '2px solid #3366ff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' },
];

const LearningPage = () => {
 
  return (
    <div style={{ 
      backgroundImage: "url('https://www.timeshighereducation.com/sites/default/files/crowdfunding.jpg')", // Add your image path here
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height:'1000px'
      }}>
      <img
        alt="Your Logo"
        src="crodoblack.png"
        width="200"
        height="100"
        marginBottom="-60"
        className="d-inline-block align-top"
      />

      <Container style={{ borderRadius: '10px' }}>
        <h1 style={{ color: 'black', textAlign: 'center', marginBottom: '2rem', marginTop: '2rem' }}>
          Learning Resources for Crodo
        </h1>
        <h4 style={{ color: 'black', textAlign: 'center', marginBottom: '2rem' }}>
          Let's connect. Select a fund for us to focus on.
        </h4>

        <Row className="justify-content-around">
          {cardStyles.map((style, index) => (
            <Col md={4} style={{ marginBottom: '4rem' }} key={index}>
              <Card style={{ height: '100%', ...style }}>
                <Card.Body>
                  {/* Card content remains the same */}
                  <Card.Title>Non-Profit Funds</Card.Title>
                  <Card.Text style={{ textAlign: 'left' }}>
                    Manage all of your organization’s digital fundraising and donor engagement needs in one place,
                    with a donation form for your website, unlimited fundraising pages, supporters CRM tool, marketing,
                    integration, analytics, and more.
                  </Card.Text>
                  <Button
                    href="/contact"
                    variant="primary"
                    className="btn"
                    style={{
                      marginTop: 'auto',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      fontSize: '14px',
                    }}
                  >
                    Request Demo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LearningPage;

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your custom CSS file
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer  bg-dark text-white">
      <Container>
        <Row className="mb-4">
          <Col md={6} className="d-flex flex-column align-items-start py-4">
            <h1>
              Cro<span style={{ color: 'green' }}>do</span>
            </h1>
            <p className="text-justify">
              Crowdfunding is a way for companies and individuals  <br/>
              to raise capital from a large group of investors who can<br/>
              choose from hundreds of projects for as little as $10.<br/>
              There are restrictions as to who is allowed to fund a<br/>
              new business and how much they are allowed to<br/>
              contribute.
            </p>
          </Col>
          <Col md={6} className="d-flex flex-column align-items-start py-4">
            <Row className="mb-5">
              <Col md={4} className="mb-4 py-5">
                <h4>Profiles</h4>
                <a href="/" className="text-white no-underline">Github</a><br />
                <a href="/" className="text-white no-underline">Project</a><br />
                <a href="/" className="text-white no-underline">Twitter</a><br />
              </Col>
              <Col md={4} className="mb-4 py-5">
                <h4>Help</h4>
                <a href="/" className="text-white no-underline">Support</a><br />
                <a href="/" className="text-white no-underline">Troubleshoot</a><br />
                <a href="/" className="text-white no-underline">Contact US</a><br />
              </Col>
              <Col md={3} className="mb-3 py-5">
                <h4>Others</h4>
                <a href="/" className="text-white no-underline">Terms&Service</a><br />
                <a href="/" className="text-white no-underline">Privacy</a><br />
                <a href="/" className="text-white no-underline">PolicyLicense</a>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={12} className="d-flex justify-content-end">
              
              </Col>
              
            </Row>
            
          </Col> <div className="social-media-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
         
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

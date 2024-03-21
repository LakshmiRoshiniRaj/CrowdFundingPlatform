
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Contact = () => {
  return (
     <div className="position-relative" style={{ marginLeft: '20px', marginTop: '20px' }}>
       
      <img
        alt="Your Logo"
        src="crodoblack.png"
        width="200"
        height="100"
        className="d-inline-block align-top"
      />
      <Navbar expand="lg" className="position-absolute top-0 start- end-0 navbar-overlay bg-transparent">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: '100px' }}>
            <Nav className="me-auto icons" style={{ marginRight: '20px' }}>
              <Link to="/about">
                <button className="btn btn-white">About</button>
              </Link>
              <Link to="/projectcreation">
                <button className="btn btn-white">Project Creation</button>
              </Link>
              <Link to="/projectlisting">
                <button className="btn btn-white">Project Listing</button>
              </Link>
              <Link to="/donatefunds">
                <button className="btn btn-white">Donate Funds</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container style={{ textAlign: 'left', marginTop: '10px' }}>
        <h6 style={{ fontSize: '3em',display: 'flex', flexDirection: 'column', alignItems: 'center' }}><b>Get in touch</b></h6>
       <div style={{marginLeft:'50px',fontSize: '1.2em'}}>
         <p  style={{marginTop:'60px' }}>If you have any questions about using our service, please </p>
        <p>check out our FAQ. If you still require assistance, reach out  </p>
        <p>and we’ll be happy to help!</p>
<br/>
<br/>
        <p>Email us: <a href="mailto:hello@coinfundit.com"><br/>hello@crowdo.com</a></p>
<br/>
<br/>

        <p>Proudly based around the world as a distributed team</p>
    </div>
      <img
       
          src="https://img.freepik.com/premium-photo/connect-world-wide-web-concept-laptop-computers-with-earth-globe-white-background_476612-7342.jpg"
          width="500"
          height="500"
          className="d-inline-block align-top"
        />
        


        <div style={{ float: 'right',fontSize: '1.2em', marginTop: '-370px', marginRight: '150px' }}>
          <p>Feel free to contact us with questions, potential</p>
          <p> partnerships, or media inquiries.</p>
          <form>
            <label htmlFor="name">Your name</label><br />
            <input type="text" id="name" name="name" style={{ width: '100%' }} /><br /><br />
            <label htmlFor="email">Your email</label><br />
            <input type="email" id="email" name="email" style={{ width: '100%' }} /><br /><br />
            <label htmlFor="PhoneNumber">Phone Number</label><br />
            <input type="text" id="PhoneNumber" name="PhoneNumber" style={{ width: '100%' }} /><br /><br />

            <label htmlFor="How">How did you hear about us?</label><br />
             
            <textarea id="message" name="message"  style={{ width: '100%' }}> </textarea><br /><br />
        

            <label htmlFor="message">Your Opinion</label><br />
            
            <textarea id="message" name="message" style={{ width: '100%' }}></textarea><br />
          
            <button type="submit" style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
            </form>
        </div>
      </Container>

      
      <Footer/>
    </div> 
  );
};

export default Contact;


import React from 'react';

import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import Footer from './Footer';
function About  () {



   
   
   

  return (
    <div className="position-relative" style={{ marginLeft: '20px', marginTop:'20px' }}>
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
              <Link to="/Contact">
                <button className="btn btn-white">Contact</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>




      <Container style={{ textAlign: 'left', marginTop: '10px' }}>
      <br/>
       <div style={{marginLeft:'50px'}}>
         <p  style={{marginTop:'60px',fontSize: '4em' }}><b>About Crodo </b></p>
        <p style={{fontSize: '2em' }}>We help people crodofund  </p>
        <p style={{fontSize: '2em' }}> and donate with cryptocurrency </p>
        <Link to="/learningPage">    <Button variant="success" style={{ backgroundColor: 'blue', borderColor: 'green', marginTop: '10px' }}>
         Get started
          </Button></Link>

        </div>
        <div className="d-flex justify-content-end align-items-center" style={{ marginRight:'10px', marginTop: '-450px' }}>
    <img
        src="https://img.freepik.com/premium-photo/illustration-pile-gold-coins-dhanteras-akshaya-tritiya-festival-ai-generated_852336-17246.jpg"
        alt="Sample"
        style={{ width: '600px', height: '600px', marginRight: '20px' }}
    />
</div>



       
<br/>
<br/>
<div>
  <h1> Our Mission</h1><br/>
  <p style={{fontSize: '1.5em',marginLeft:'2px' }}><b>Our mission is to fight poverty in emerging markets by investing in people and businesses.</b>
</p>
  <p style={{marginleft:'100px'}}>As a crowdfunding platform, It combines social impact with financial return in a sustainable way that benefits everyone.
     By investing on our platform, you can provide ambitious 
     companies in emerging markets with the financing they need to create 
     jobs, innovate new solutions, and grow their businesses and its very helpful to donation for heathcare. Ultimately, 
     this can improve the socio-economic status of the people in emerging 
     markets.</p>
</div>

    <br/>
    <br/>
    <div style={{ display: "flex" ,marginLeft:'220px'}}>
    <div className="col-sm-2">
        <div className="box border border-dark" style={{ padding: '10px' ,textAlign:'center'}}>2023<br />Coding started</div>
    </div>
    <div className="col-sm-2">
        <div className="box border border-dark" style={{ padding: '10px', marginLeft: '10px' ,textAlign:'center'}}>300<br />Cryptos supported</div>
    </div>
    <div className="col-sm-2">
        <div className="box border border-dark" style={{ padding: '10px', marginLeft: '10px',textAlign:'center' }}>30<br />Fiats accepted</div>
    </div>
    <div className="col-sm-2">
        <div className="box border border-dark" style={{ padding: '10px', marginLeft: '10px',textAlign:'center' }}>180+<br />Countries supported</div>
    </div>
</div>
<br/>
<br/>

<div className="card-row">
          <img
            src="https://images.inc.com/uploaded_files/image/1920x1080/getty_462940167_122381.jpg"
            alt="Card 1"
            className="card-image"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuYkxoQx5BDPSF6UNkrSGVeNwEzcxPlZ5NA&usqp=CAU"
            alt="Card 2"
            className="card-image"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKuFfPzMeydHkMbHEnxuy-VTC_kUDRjaIdA&usqp=CAU"
            alt="Card 3"
            className="card-image"
          />
          <img
            src="https://www.daysoftheyear.com/wp-content/uploads/donate-a-days-wages-to-charity-day1-scaled.jpg"
            alt="Card 4"
            className="card-image"
          />
           <img
            src="https://theschoolfund.org/html/img/facebook.jpg"
            alt="Card 5"
            className="card-image"
          />
          </div>
</Container><br/> <br/><Footer/>
</div>

);
}

     export default About;
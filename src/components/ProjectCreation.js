import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Project from './Project';

function ProjectCreation() {
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
      <Project/>
      </div>
);
}


export default ProjectCreation;
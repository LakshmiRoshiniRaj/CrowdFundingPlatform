// src/components/HomePage.js

import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
       
          <Navbar.Brand href="#home">
            <img
              alt="Your Logo"
              src="Crodo-logos.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' Your Company Name'}
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Your main content goes here */}
      <Container className="mt-4">
        <h1>Welcome to Your Website!</h1>
        {/* Add more content as needed */}
      </Container>
    </div>
  );
};

export default HomePage;

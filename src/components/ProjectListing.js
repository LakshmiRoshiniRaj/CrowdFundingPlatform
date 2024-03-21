// ProjectListing.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useProjectContext } from './ProjectContext';
import { Container, Nav, Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const ProjectListing = () => {
 
  const projectContext = useProjectContext();
  const { projects, deleteProject } = projectContext;

  const containerStyle = {
   
  };

  const projectList = projects
    ? projects.map((project) => (
        <li key={project.id} className="list-group-item">
          <h3 className="mb-3">{project.projectName}</h3>
          <p>{project.description}</p>
          <p>Category: {project.category}</p>
          {project.image && (
            <div className="project-image mb-3">
              {project.image instanceof Blob || project.image instanceof File ? (
                <img src={URL.createObjectURL(project.image)} alt="Project" className="img-fluid" />
              ) : (
                <p>No valid image</p>
              )}
            </div>
          )}
          <button onClick={() => deleteProject(project.id)} className="btn btn-danger me-2">
            Delete Project
          </button>
          <Link to={'/donateFunds'} className="btn btn-primary">
            Donate
          </Link>
        </li>
      ))
    : null;
    

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
      
    <div className="container-fluid" style={containerStyle}>
      <div className="container mt-5">
        <h1 className="text-center ">
       
        PROJECT LISTING
        </h1><br/>
        <ul className="list-group">{projectList}</ul>
      </div>
    </div></div>
  );
};

export default ProjectListing;

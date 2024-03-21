import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useProjectContext } from './ProjectContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCreation from './ProjectCreation';

const Project = () => {
  const projectContext = useProjectContext();
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateProject = () => {
    if (projectName && description && image && category) {
      const newProject = {
        id: Date.now(),
        projectName,
        description,
        image,
        category,
      };
      projectContext.addProject(newProject);
      setMessage('Your project has been created! Go and visit the project listing page.');
      setProjectName('');
      setDescription('');
      setImage(null);
      setCategory('');
      navigate('/projectlisting');
    } else {
      setMessage('Failed to create the project. Please fill in all details.');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    
      <Container className="py-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)',width:'900px' }}>
       <Row className="justify-content-center">
          <Col md={8}>
            <div className="text-center mb-4">
          
              <h2 className="display-4">Create Your Project</h2>
              <p className="lead">Share your ideas and make a difference!</p>
            </div>
          <Form>
            <Form.Group controlId="projectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe your project"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="healthcare">Healthcare</option>
                <option value="business">Business Idea</option>
                <option value="charity">Charity</option>
                <option value="others">Others</option>
              </Form.Control>
              </Form.Group>
              <Form.Group controlId="image" className="mb-4">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" onChange={handleImageUpload} />
            {image && (
            <div className="uploaded-image mt-2 d-flex justify-content">
            <p className="font-weight-bold mt-2">Uploaded Image:</p>
            <Image src={URL.createObjectURL(image)} alt="Project" fluid />
            </div>
             )}
            </Form.Group>
            <div className="d-flex justify-content-center">

  <Button variant="primary" onClick={handleCreateProject}>
    Create Project
              </Button>
            </div>
          </Form>

          {message && <Alert variant="info" className="mt-3">{message}</Alert>}
          </Col>
        </Row>
      </Container>
   
  );
};
export default Project;
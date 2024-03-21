import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';

const Search = () => {
  return (
  <div className='cardshome'>
     <div className="card-image-container">
    <br/> <br/> 
    <p>Raise funds for Your need </p>
    
    <Container className="mt-5">
    
      <Row className="mt-4">
      
        <Col md={4}>
          <Card>
         
            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/10552/10552110.png" alt="Image 1" 
          />
            <Card.Body>
              <Card.Title><b>Healthcare </b></Card.Title>
              <Card.Text>
               
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/2246/2246969.png" alt="Image 2" 
            />
            
            <Card.Body>
              <Card.Title><b>Business</b></Card.Title>
              <Card.Text>
              
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://thenounproject.com/api/private/icons/3135270/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="Image 3" 
           />
             
            <Card.Body>
              <Card.Title> <b>Charity</b> </Card.Title>
              <Card.Text>
                        </Card.Text>
            </Card.Body> 
          </Card>
     
        </Col>
      </Row>
      
    </Container>
    </div>     </div>
  );
};

export default Search;

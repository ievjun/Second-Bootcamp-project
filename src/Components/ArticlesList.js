import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic1 from '../pictures/pic1.jpg';
import pic2 from '../pictures/pic2.jpg';
import pic4 from '../pictures/pic4.jpg';
import  './Css/ArticlesList.css';
import Lake from '../Lake';
import '../fonts/PlayfairDisplay-Regular.ttf';

function ArticlesList () {
 return(
<Container>
    <div class="cardRow">
  <Row>
    <Col sm={4}> 
    <Card>
          <Card.Img variant="top" src={pic1} />
         
        </Card>
        </Col>
    <Col sm={8}> 
    <Card.Body>
      <a href="../Lake">
            <Card.Title class="card1">Lake camping</Card.Title>
            </a>
            <Card.Text>
            With incredible scenery and endless options for sporting activities and relaxation, it's no wonder lakeside rentals are so popular.
            </Card.Text>
          </Card.Body>
          </Col>
  </Row>
  </div>
  <div class="cardRow">
  <Row>
    <Col sm={4}> 
    <Card>
          <Card.Img variant="top" src={pic2} />
         
        </Card>
        </Col>
    <Col sm={8}> 
    <Card.Body>
    <a href="../Barrel">
            <Card.Title class="card1">Barrel camping</Card.Title>
            </a>
            <Card.Text>
            Romantic barrels – double dream houses and four-seated family houses, that allow for waiting of the sunrise by the sea. 
            </Card.Text>
          </Card.Body>
          </Col>
  </Row>
  </div>
  <div class="cardRow">
  <Row>
    <Col sm={4}> 
    <Card>
          <Card.Img variant="top" src={pic4} />
         
        </Card>
        </Col>
    <Col sm={8}> 
    <Card.Body>
    <a href="../Island">
            <Card.Title class="card1">Island glamping</Card.Title>
            </a>
            <Card.Text>
            Night skies, a crackling fire and cozy tent space for two are just a few of the things you need for a romantic getaway with the one you love.
            </Card.Text>
          </Card.Body>
          </Col>
  </Row>
  </div>
  </Container>

 )};

export default ArticlesList
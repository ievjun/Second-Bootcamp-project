import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import  './Css/cards.css';
import pic1 from '../pictures/pic1.jpg';
import pic2 from '../pictures/pic2.jpg';
import pic4 from '../pictures/pic4.jpg';
import '../fonts/PlayfairDisplay-Regular.ttf';

function Boxes() {
    return (
        <div class="container cards">
        <CardDeck>
        <Card>
          <Card.Img variant="top" src={pic1} />
          <Card.Body>
            <a href="../Lake">
            <Card.Title class="card1">Camping by the lake</Card.Title></a>
            <Card.Text>
            Fabulous lakes are a major draw for visitors looking for fun and adventure both on and off the water. With incredible scenery and endless options for sporting activities and relaxation, it's no wonder lakeside rentals are so popular.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={pic2} />
          <Card.Body>
            <a href="../Barrel">
            <Card.Title class="card1">Barrel camping by the sea</Card.Title></a>
            <Card.Text>
            Fabulous lakes are a major draw for visitors looking for fun and adventure both on and off the water. With incredible scenery and endless options for sporting activities and relaxation, it's no wonder lakeside rentals are so popular.
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card>
          <Card.Img variant="top" src={pic4} />
          <Card.Body>
            <a href="../Island">
            <Card.Title class="card1">Glamping on an island</Card.Title></a>
            <Card.Text>
            Glamping is a portmanteau of "glamorous" and "camping", and describes a style of camping with amenities and, in some cases, resort-style services not usually associated with "traditional" camping.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      </div>
    )
}

export default Boxes;
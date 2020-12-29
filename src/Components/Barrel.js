import pic2 from '../pictures/pic2.jpg';
import pic12 from '../pictures/pic12.jpg';
import pic13 from '../pictures/pic13.jpg';
import pic19 from '../pictures/pic19.jpg';
import pic14 from '../pictures/pic14.jpg';
import pic18 from '../pictures/pic18.jpg';
import pic17 from '../pictures/pic17.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import './Css/Lake.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function MyComponent() {
  return (
      <div class="container">
    <SRLWrapper>
<Row>

    <Col xs={6} md={4}>
    
          <div class="picDiv" >
      <a href={pic2} data-attribute="SRL">
      <img class="first123" src={pic2} alt="Umbrella" />
      </a>
      </div>
      
    </Col>
    <Col xs={12} md={8}>
      <h1>Camping in barrel by the sea</h1>
    <p class="LakeText">Fabulous lakes are a major draw for visitors looking for fun and adventure both on and off the water. With incredible scenery and endless options for sporting activities and relaxation, it's no wonder lakeside rentals are so popular.
    Book a private lakefront home with a spacious deck, mountain views, access to a plethora of trails, and a floating dock with canoes for your perusal. Ride the pontoon boat from your lake house rental and spend the day fishing for trout or even go to one of the secluded trailheads from the water. 
    </p></Col>
  </Row>
  <Row xs={2} md={4} lg={6}>
    <Col>
    <SRLWrapper>
          <div class="picDiv">
      <a href={pic12} data-attribute="SRL">
      <img class="first2" src={pic12} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
    <Col>
    <SRLWrapper>
          <div class="picDiv" >
      <a href={pic13} data-attribute="SRL">
      <img class="first2" src={pic13} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
      
  </Row>
  <Row xs={2} md={4} lg={6}>
    <Col>
    <SRLWrapper>
          <div class="picDiv" >
      <a href={pic14} data-attribute="SRL">
      <img class="first2" src={pic14} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
    <Col>
    <SRLWrapper>
          <div  >
      <a href={pic19} data-attribute="SRL">
      <img class="first2" src={pic19} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
  </Row>
  <Row xs={2} md={4} lg={6}>
    <Col>
    <SRLWrapper>
          <div  >
      <a href={pic18} data-attribute="SRL">
      <img class="first2" src={pic18} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
    <Col>
    <SRLWrapper>
          <div  >
      <a href={pic17} data-attribute="SRL">
      <img class="first2" src={pic17} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
  </Row>
  </SRLWrapper>
</div>
  );
}

export default MyComponent;


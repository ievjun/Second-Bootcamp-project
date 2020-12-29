import pic4 from '../pictures/pic4.jpg';
import pic21 from '../pictures/pic21.jpg';
import pic22 from '../pictures/pic22.jpg';
import pic24 from '../pictures/pic24.jpg';
import pic25 from '../pictures/pic25.jpg';
import pic26 from '../pictures/pic26.jpg';
import pic27 from '../pictures/pic27.jpg';
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
      <a href={pic4} data-attribute="SRL">
      <img class="first123" src={pic4} alt="Umbrella" />
      </a>
      </div>
      
    </Col>
    <Col xs={12} md={8}>
      <h1>Glamping on an island</h1>
      <p class="LakeText"> Glamping is a portmanteau of "glamorous" and "camping", and describes a style of camping with amenities and, in some cases, resort-style services not usually associated with "traditional" camping.
    Fabulous lakes are a major draw for visitors looking for fun and adventure both on and off the water. 
    Book a private lakefront home with a spacious deck, mountain views, access to a plethora of trails, and a floating dock with canoes for your perusal. Ride the pontoon boat from your lake house rental and spend the day fishing for trout or even go to one of the secluded trailheads from the water. 
    </p></Col>
  </Row>
  <Row xs={2} md={4} lg={6}>
    <Col>
    <SRLWrapper>
          <div class="picDiv">
      <a href={pic24} data-attribute="SRL">
      <img class="first2" src={pic24} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
    <Col>
    <SRLWrapper>
          <div class="picDiv" >
      <a href={pic22} data-attribute="SRL">
      <img class="first2" src={pic22} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
      
  </Row>
  <Row xs={2} md={4} lg={6}>
    <Col>
    <SRLWrapper>
          <div class="picDiv" >
      <a href={pic21} data-attribute="SRL">
      <img class="first2" src={pic21} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
    <Col>
    <SRLWrapper>
          <div  >
      <a href={pic25} data-attribute="SRL">
      <img class="first2" src={pic25} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
  </Row>
  <Row xs={2} md={4} lg={6}>
    <Col>
    <SRLWrapper>
          <div  >
      <a href={pic26} data-attribute="SRL">
      <img class="first2" src={pic26} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
    <Col>
    <SRLWrapper>
          <div  >
      <a href={pic27} data-attribute="SRL">
      <img class="first2" src={pic27} alt="Umbrella" />
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


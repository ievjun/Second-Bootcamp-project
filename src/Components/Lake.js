import pic1 from '../pictures/pic1.jpg';
import pic5 from '../pictures/pic5.jpg';
import pic7 from '../pictures/pic7.jpg';
import pic6 from '../pictures/pic6.jpg';
import pic8 from '../pictures/pic8.jpg';
import pic9 from '../pictures/pic9.jpg';
import pic10 from '../pictures/pic10.jpg';
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
      <a href={pic1} data-attribute="SRL">
      <img class="first123" src={pic1} alt="Umbrella" />
      </a>
      </div>
      
    </Col>
    <Col xs={12} md={8} >
      <h1>Camping by the lake</h1>
    <p class="LakeText">Fabulous lakes are a major draw for visitors looking for fun and adventure both on and off the water. With incredible scenery and endless options for sporting activities and relaxation, it's no wonder lakeside rentals are so popular.
    Book a private lakefront home with a spacious deck, mountain views, access to a plethora of trails, and a floating dock with canoes for your perusal. Ride the pontoon boat from your lake house rental and spend the day fishing for trout or even go to one of the secluded trailheads from the water. 
    </p></Col>
  </Row>
  <Row xs={2} md={4} lg={6}>
    <Col>
    <SRLWrapper>
          <div class="picDiv">
      <a href={pic5} data-attribute="SRL">
      <img class="first2" src={pic5} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
    <Col>
    <SRLWrapper>
          <div class="picDiv" >
      <a href={pic6} data-attribute="SRL">
      <img class="first2" src={pic6} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
      
  </Row>
  <Row xs={2} md={4} lg={6}>
    <Col>
    <SRLWrapper>
          <div class="picDiv" >
      <a href={pic7} data-attribute="SRL">
      <img class="first2" src={pic7} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
    <Col>
    <SRLWrapper>
          <div  >
      <a href={pic8} data-attribute="SRL">
      <img class="first2" src={pic8} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
  </Row>
  <Row xs={2} md={4} lg={6}>
    <Col>
    <SRLWrapper>
          <div  >
      <a href={pic9} data-attribute="SRL">
      <img class="first2" src={pic9} alt="Umbrella" />
      </a>
      </div>
      </SRLWrapper>
      </Col>
    <Col>
    <SRLWrapper>
          <div  >
      <a href={pic10} data-attribute="SRL">
      <img class="first2" src={pic10} alt="Umbrella" />
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

<div className="MyComponent">
<SRLWrapper>
    <div  >
<a href={pic1} data-attribute="SRL">
<img class="first" src={pic1} alt="Umbrella" />
</a>
</div>
</SRLWrapper>
</div>
import React from 'react';
import Sonnet from 'react-bootstrap/Tab'
import Profile from './Profile.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic1 from '../pictures/pic1.jpg';
import pic2 from '../pictures/pic2.jpg';
import pic4 from '../pictures/pic4.jpg';
import './Css/AboutUsBody.css';
import MapContainer from './maps1.js';
import GoogleMap from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import '../fonts/PlayfairDisplay-Regular.ttf';
import MapContainer2 from './maps2.js';
import MapContainer3 from './maps3.js';

const element = <FontAwesomeIcon icon={faCat} />

const mapStyles = {
    width: '100%',
    height: '100%'
  };
  
function AboutUsBody () {

    return (
        <div class="container">
          <h3>Register for our newsletter   
            <a href='../Register' class="here"> here</a> </h3>
        <Tabs>
    <TabList>
      <Tab>Lake</Tab>
      <Tab>Barrel</Tab>
      <Tab>Island</Tab>
    </TabList>

    <TabPanel>
      <div>
      <Row>
    <Col sm={4}>
        <img src={pic1} class="firstImage"/>
    </Col>
    <Col sm={8}>Whatever you call your abode, we all have come to appreciate the fun and joy of spending time there, doing the things we love, whether it is boating, jumping off the dock, relaxing with a good book, reconnecting with friends and family or simply just being at peace. In the end, does it really matter? Cabin or cottage?  What do you think?
    <div class="location">Location: Burtnieku ezers</div>
    <div>56.086112, 27.593618</div>
    </Col>

  </Row>
  <Row>
    <Col>
  <div class="map1">
    <MapContainer3 /></div>
  </Col>

  </Row>
  <Row>
  
 

  </Row>
       </div>
    </TabPanel>
    <TabPanel>
    <div>
      <Row>
    <Col sm={4}>
        <img src={pic2} class="firstImage"/>
    </Col>
    <Col sm={8}>Whatever you call your abode, we all have come to appreciate the fun and joy of spending time there, doing the things we love, whether it is boating, jumping off the dock, relaxing with a good book, reconnecting with friends and family or simply just being at peace. In the end, does it really matter? Cabin or cottage?  What do you think?
    <div class="location">Location: Melnsils, Rojas rajons</div>
    <div>56.086112, 27.593618</div>
    </Col>

  </Row>
  <Row>
    <Col>
  <div class="map1">
    <MapContainer2 /></div>
  </Col>

  </Row>
       </div>
    </TabPanel>
    <TabPanel>
    <div>
      <Row>
    <Col sm={4}>
        <img src={pic4} class="firstImage"/>
    </Col>
    <Col sm={8}>Whatever you call your abode, we all have come to appreciate the fun and joy of spending time there, doing the things we love, whether it is boating, jumping off the dock, relaxing with a good book, reconnecting with friends and family or simply just being at peace. In the end, does it really matter? Cabin or cottage?  What do you think? 
    <div class="location">Location: Dagdas ezers</div>
    <div>56.086112, 27.593618</div>
    </Col>

  </Row>
  <Row>
    <Col>
  <div class="map1">
    <MapContainer /></div>
  </Col>

  </Row>
       </div>
    </TabPanel>
  </Tabs>
  
  

</div>
     ) }

export default AboutUsBody
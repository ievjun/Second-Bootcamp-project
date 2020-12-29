import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyComponent from './Barrel.js';
import SimpleReactLightbox from "simple-react-lightbox";
import Gallery from './Lake.js';

import React from "react";
// Import Simple React Lightbox

function BarrelLayout() {

return(
    <div>
      <SimpleReactLightbox>
        <MyComponent /> 
      </SimpleReactLightbox>
</div>
)}

export default BarrelLayout;
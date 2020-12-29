
import Carousel from 'react-bootstrap/Carousel';


import pic1 from '../pictures/pic1.jpg';
import pic2 from '../pictures/pic2.jpg';
import pic4 from '../pictures/pic4.jpg';
import pic14 from '../pictures/pic14.jpg';
import  './Css/carousel.css';

function Carousel2() {
    return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
     
    />
    <Carousel.Caption>
      <h3>Lake camping</h3>
      <p>Perfect for fishermen as well as for a romantic weekend</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic14}
     
    />

    <Carousel.Caption>
      <h3>Barrel camping</h3>
      <p>Perfect view, perfect place. What else can you wish for?</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic4}
      
    />

    <Carousel.Caption>
      <h3>Island glamping</h3>
      <p>Romantic get-away.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)};

export default Carousel2
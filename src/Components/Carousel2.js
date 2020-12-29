
import Carousel from 'react-bootstrap/Carousel';


import pic1 from '../pictures/pic1.jpg';
import pic2 from '../pictures/pic2.jpg';
import pic4 from '../pictures/pic4.jpg';

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
      src={pic2}
     
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic4}
      
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)};

export default Carousel2
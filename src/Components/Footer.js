import footerBackground from '../pictures/bg8.jpg';
import './Css/footer.css';
import logo3 from '../logo/logo3.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
<footer class="mt-3">
              <div class="extraImage2"><img src={footerBackground} style={{
             width: "100%",
       }}></img></div>

    <div class="container" >
    <Row class="row align-items-center">
    <Col> 
    <p id="footer-title" class="footer"><a href='./'><img src={logo3} class="footerImage"/> </a>
        </p>
        </Col>
    <Col>
    <p class="footerText"><span>&copy; 2020-2021 All rights reserved </span></p>
    <p></p>
    </Col>
  </Row>
     
      
    </div>
  </footer>

)
}

export default Footer;
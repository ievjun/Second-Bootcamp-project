import { useState } from 'react';
import BackgroundVideo from './Components/backgroundVideo';
import Body from './Components/Body';
import Header from './Components/Header';
import ArticlesBox from './Components/ArticlesBox';
import Footer from './Components/Footer';
import DemoCarousel from './Components/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { render } from "react-dom";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <div className="row">
    <div className="col">
    
        <Body />
        <BackgroundVideo />
        <ArticlesBox />
        <DemoCarousel />
        <Footer />
    </div>
  </div>
   
  );
}
export default App;

import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Carousel2 from './Components/Carousel2';
import { render } from "react-dom";
import ArticlesList from './Components/ArticlesList';

function Resorts() {
    return (
      <div>
   <div>
          <Header />
          </div>

          <div>  
          <ArticlesList />
          </div>
          <Footer />
      </div>
   
 
    );
  }
  export default Resorts;
  
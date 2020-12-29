import Header from './Components/Header.js';
// import Lake from './Components/Lake.js';
import 'react-image-lightbox/style.css';
import SimpleReactLightbox from "simple-react-lightbox";
import MyComponent from "./Components/Lake.js";
import React from "react";
import BarrelLayout from './Components/BarrelLayout.js';
import Footer from './Components/Footer.js';


function Barrel () {
    return (
        <div>
            <Header />
            
<BarrelLayout />
<Footer />
        </div>
        
    )
}

export default Barrel
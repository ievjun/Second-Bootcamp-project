import Header from './Components/Header.js';
// import Lake from './Components/Lake.js';
import 'react-image-lightbox/style.css';
import SimpleReactLightbox from "simple-react-lightbox";
import MyComponent from "./Components/Lake.js";
import React from "react";
import IslandLayout from './Components/IslandLayout.js';
import Footer from './Components/Footer.js';


function Island () {
    return (
        <div>
            <Header />
            
<IslandLayout />
<Footer />
        </div>
        
    )
}

export default Island
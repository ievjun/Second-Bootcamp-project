import Header from './Components/Header.js';
// import Lake from './Components/Lake.js';
import 'react-image-lightbox/style.css';
import SimpleReactLightbox from "simple-react-lightbox";
import MyComponent from "./Components/Lake.js";
import React from "react";
import LakeLayout from './Components/LakeLayout.js';
import Footer from './Components/Footer.js';


function lake2 () {
    return (
        <div>
            <Header />
            
<LakeLayout />
<Footer />
        </div>
        
    )
}

export default lake2
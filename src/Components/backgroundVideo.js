import React from 'react';
import './Css/videoStyle.css';
import backgroundVideo from '../video/backgroundVideo.mp4' 
import logo3 from '../logo/logo3.png'
import bg2 from '../pictures/bg7.jpg';
import extraPic2 from '../pictures/extraPic16.jpg';
import './Css/header.css'
import { Link } from 'react-router-dom';
import '../fonts/PlayfairDisplay-Regular.ttf';

const BackgroundVideo = () => {
    return (
        <div class="">
        <div class="container1">
            <video autoPlay="autoplay" loop="loop" muted class="Video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
               
            </video>
           

            <div class="Content1 ">
                <div class="SubContent">
                <div class="">
    

      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
          <a class="p-4 text-light flex-row" href="/">Home</a>
          <a class="p-4 text-light flex-row" href="/Resorts">Resorts</a>
          
          <img src={logo3} class="logo"/>

          <a class="p-4 text-light flex-row-reverse" href="/GuestBook">Guest book</a>
          <a class="p-4 text-light flex-row-reverse" href="/AboutUs">About us</a>
        </nav>
      </div>
      </div>
      <div class="container textSummer">
                    <h1>Hello summer</h1>
                    <h1>Hello vacation</h1>
                    <p>Oh, I missed you so much</p>
                    <Link to='/Resorts'>
                    <button type="button" className="btn btn-outline-dark" onClick="/users">Let's go</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        <div class="extraPic2"><img src={extraPic2} style={{
             
             width: "100%",
            top:0,

         }}></img></div>
        
        <div class="extraImage"><img src={bg2} style={{
             
             width: "100%",
            top:0,

             
         }}></img></div>
        </div>
        
    )
}

export default BackgroundVideo;
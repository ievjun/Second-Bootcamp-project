import { NavLink } from 'react-router-dom';
import Users from './Users';
import React from 'react';
import logo3 from '../logo/logo3.png';
import bg2 from '../pictures/bg7.jpg';
import './Css/header.css'
import {  Link } from "react-router-dom";
import App from '../App';

function Header() {
    return (
    <div class="container1">

    <div class="Content2 ">
        <div class="SubContent">
        <div class="header1" 

         >
   
<div class="nav-scroller py-1 mb-2 ">
<nav class="nav d-flex justify-content-between navbar navbar-default">
  <a class="p-4 text-dark flex-row" href="/">Home</a>
  <a class="p-4 text-dark flex-row-reverse" href="/Resorts">Resorts</a>


  <img src={logo3} class="logo"/>

  <a class="p-4 text-dark flex-row-reverse" href="/GuestBook">Guest book</a>
  <a class="p-4 text-dark flex-row-reverse" href="/AboutUs">About us</a>
</nav>
</div>
</div>

        </div>
    </div>
 <div class="extraImage"><img src={bg2} style={{
             
             width: "100%",

         }}></img></div>
 
</div>
    );
}

export default Header;
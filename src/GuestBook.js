import Header from './Components/Header.js';
import React from "react";
import ReactDOM from "react-dom";
import AddNewTaskForm from './Components/Register.js';
import Footer from './Components/Footer.js';
import MapContainer from './Components/maps1.js';
import GuestBook from './Components/GuestBook.js'
import Todos from './Components/Todos.js';
import AddNewTodo from './Components/AddNewTodo.js';
import {useState} from 'react';

function GuestBook1 () {

    const [num, setNum] = useState(1);
    const reloadTodos = () => {
      setNum(num+1);
    }
    return (
        <div>
            <Header />
            
            <div className="container">
      <div className="row">
        <div className="col">
          <h1>Reviews</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Todos num={num} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <AddNewTodo todoAdded={reloadTodos} />
        </div>
      </div>
    </div>


<Footer />
        </div>
    )
}

export default GuestBook1

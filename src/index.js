import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Users from './Components/Users.js';
import Contact from './Components/Contact.js';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Notfound from './Components/notFound';

import Resorts from './Resorts.js';
import lake2 from './Lake.js';
import Barrel from './Barrel.js';
import Island from './Island.js';
import AboutUs from './AboutUs.js';
import Register from './Register.js';
import GuestBook1 from './GuestBook.js';

const routing = (
  <Router>
    <div>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Resorts" component={Resorts} />
        <Route path="/contact" component={Contact}/>
        <Route path="/Lake" component={lake2}/>
        <Route path="/AboutUs" component={AboutUs}/>
        <Route path="/Barrel" component={Barrel}/>
        <Route path="/Island" component={Island}/>
        <Route path="/Register" component={Register}/>
        <Route path="/GuestBook" component={GuestBook1}/>

        <Route component={Notfound} />
        

      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

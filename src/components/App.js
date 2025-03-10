import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'; // Import your CSS file if needed
import Navbar from "./Navbar/Navbar"; 
import Home from "./pages/Home"; 
import KeyFeature from "./pages/KeyFeature";
import Pricing from "./pages/Pricing";
import Timonial from "./pages/Timonial";
import Demo from "./pages/Demo";


function App(){
    return(
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/features" component={KeyFeature}/>
        <Route path="/Pricing" component={Pricing}/>
        <Route path="/Timonial" component={Timonial}/>
        <Route path="/demo" component={Demo}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
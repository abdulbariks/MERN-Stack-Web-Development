import React from "react";
import {Route, Redirect} from "react-router-dom"
import Menu from "./Menu";
import Home from './Home';
import Contact from './Contact';
import About from './About';

const Body = () =>{
 return(
    <div>
        <Route path="/home" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Redirect from="/" to="/menu" />

        {/* <Menu/> */}
    </div>
 )
}


export default Body;
import React from "react"
import "../style/Home.css"
import military from "./militaryBackground.jpg"
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


export const Home = props => {
    let redirect = <></>
    debugger;
    if(sessionStorage.getItem('loggedIn') == "true") {
        redirect = <Redirect to='/dashboard' />;
    }

    return <div>
            {redirect}
            <h1>Military Organization </h1>
            <img src={military} width="1200em"></img>
            <br></br>
            <div className="jumbotron">                
                <h2>Welcome to</h2>
                <p className="orgaizationName"> <strong>Military Organization</strong></p>
                <p className="description">As a growing military organization</p>
                <p className="description">We need your help</p>
                <p className="description">Login to our page and we can make a difference</p>
                <Link className="login" to="/signup">Sign Up</Link>
                <Link className="login" to="/login">Log In</Link>
                <button type="button" id="activePersona">Active Persona</button>
            </div>
        </div>
}
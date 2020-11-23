import React from "react"
import "../style/Home.css"
import military from "./militaryBackground.jpg"
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


export const Home = props => {
    let redirect = <></>
    if(props.authentication.loggedIn) {
        redirect = <Redirect to='/soldiers' />;
    }

    return <div>
        {redirect}

        <div className="display-4 text-light bg-dark w-100 text-center" >Military Organization</div>
        <div className="d-inline-block float-right">
            <button className="btn btn-primary btn-lg m-2" to="/signup">Sign Up</button>
            <button className="btn btn-secondary btn-lg m-2" to="/login">Log In</button>
        </div>

        <div className="container">
            <div className="container py-4">
                <strong className="display-4">Welcome to The Military Organization</strong>
            </div>
            <div className="jumbotron jumboImage"></div>
            <strong className="display-4 font-italic">Thank you for your Services</strong>
        </div>
        <div className="jumbotron d-inline-block w-50">
            <h2 className="text-primary text-center">Developer</h2>
            <p className="text-info d-lg-inline-block">GUI Side</p>
            <p>Jonathan Ebrahimian</p>
            <p>Andrew Havard</p>
            <p>Edward Jiang</p>
        </div>
        <div className="jumbotron d-inline-block w-50">
            <h2 className="text-warning text-center">Developer</h2>
            <p className="text-info d-lg-inline-block">DB Side</p>
            <p>Jack Babcock</p>
            <p>Dylan Caro</p>
            <p>Trevor Knotts</p>
        </div>
    </div>
}
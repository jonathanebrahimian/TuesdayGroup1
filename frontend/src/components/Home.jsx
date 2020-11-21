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
            <Link className="btn btn-primary btn-lg m-1" to="/signup">Sign Up</Link>
            <Link className="btn btn-secondary btn-lg m-1" to="/login">Log In</Link>
        </div>

        <div className="container py-5 ">
            <div className="jumbotron shadow jumboImage">
                <strong className="mb-3 display-2 text-danger font-weight-bold">Welcome </strong>
                <strong className="mb-3 display-2 textColor font-weight-bold">to</strong>
                <br></br>
                <strong className="display-4 text-danger font-weight-bold" >The Military </strong>
                <strong className="display-4 textColor font-weight-bold" >Organization</strong>
                <br></br>
                <strong className="display-4 text-danger font-weight-bold">Login</strong>
                <br></br>
                <strong className="display-4 textColor font-weight-bold">and We can make a</strong>
                <br></br>
                <strong className="display-4 textColor font-weight-bold">Difference</strong>


                {/*<button type="button" id="activePersona">Active Persona</button>*/}
            </div>
        </div>
        <div className="jumbotron d-inline-block w-50">
            <h2 className="text-primary text-center">Credibility</h2>
            <p className="text-info d-lg-inline-block">GUI Side</p>
            <p>Jonathan Ebrahimian: </p>
            <p>Andrew Havard: </p>
            <p>Edward Jiang: </p>
        </div>
        <div className="jumbotron d-inline-block w-50">
            <h2 className="text-warning text-center">Credibility</h2>
            <p className="text-info d-lg-inline-block">DB Side</p>
            <p>Jack Babcock: </p>
            <p>Dylan Caro: </p>
            <p>Trevor Knotts:</p>
        </div>
    </div>
}
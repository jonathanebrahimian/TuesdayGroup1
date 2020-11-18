import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import {Link} from "react-router-dom"
import "/style/Home.css"
import military from "./militaryBackground.jpg"
export class Home extends React.Component{
    render(){
        return <div>
            <h1>Military Organization </h1>

            <img src={military} width="1200em"></img>
            <br></br>
            <div className="jumbotron">
                <h2>Welcome to</h2>
                <p className="organizationName"> <strong>Military Organization</strong></p>
                <p className="description">As a growing military organization</p>
                <p className="description">We need your help</p>
                <p className="description">Login to our page and we can make a difference</p>
                <button className="login" type="button" width="3em">Sign up</button>
                <button className="login" type="button" width="3em">Log in</button>
                <button type="button" id="activePersona">Active Persona</button>
            </div>

        </div>
    }
}
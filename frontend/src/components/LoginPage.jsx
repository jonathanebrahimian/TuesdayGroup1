import React from "react"

export class LoginPage extends React.Component{
    render(){
        return<div style={{textAlign:"center"}} className="jumbotron">
            <h2>Login</h2>
            <label htmlFor="userName">Username</label>
            <br></br>
            <input type="text" id="userName" name="userName"></input>
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <input type="password" id="password" name="password"></input>
            <br></br>
            <br></br>
            <button type="button" className="btn btn-primary">Login</button>
            <p>New to us? Create an Account Here</p>
            <button type="button" className="btn btn-primary" >Create</button>


        </div>
    }
}
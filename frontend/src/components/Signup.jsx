import React from "react"

export class Signup extends React.Component{
    render(){
        return<div style={{textAlign:"center"}} className="jumbotron p-0">
            <div className="display-4 text-light bg-dark w-100 text-center" >Military Organization</div>
            <h2>Create an Account</h2>
            <label htmlFor="userName">Username</label>
            <br></br>
            <input type="text" id="userName" name="userName"></input>
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <input type="password" id="password" name="password"></input>
            <br></br>
            <br></br>
            <p>By clicking Create, you agree to our Terms,</p>
            <p> Data policy, and Cookies policy</p>
            <button type="button" className="btn btn-primary" >Create</button>
        </div>
    }
}
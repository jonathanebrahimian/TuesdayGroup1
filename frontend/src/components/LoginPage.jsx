import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';



export class LoginPage extends React.Component{
    state = {
        username:"",
        password: "",
        error: "",
        confirmedLoggedIn: false
    };

    onLoginClick () {
        if(this.state.username === ""){
            this.setState({error: "Please enter a username."});
        }else if(this.state.password === ""){
            this.setState({error: "Please enter a password."});
        } else if(this.state.username === "jonathan" && this.state.password === "welcome1"){
            this.setState({confirmedLoggedIn: true});
            let newAuth = this.props.authentication;
            newAuth.username = this.state.username;
            newAuth.loggedIn = true;
            newAuth.userID = 10;
            newAuth.authLevel = 1;
            newAuth.relatives = [1, 2];
            this.props.onAuthChange(newAuth);
        } else if(this.state.username === "andrew" && this.state.password === "welcome1"){
            this.setState({confirmedLoggedIn: true});
            let newAuth = this.props.authentication;
            newAuth.username = this.state.username;
            newAuth.loggedIn = true;
            newAuth.userID = 20;
            newAuth.authLevel = 2;
            newAuth.identity = true;
            this.props.onAuthChange(newAuth);
        }else{
            this.setState({error: "Your username or password is wrong"});
        }
    }

    render(){
        return <>
            {(this.state.confirmedLoggedIn || this.props.authentication.loggedIn) && <Redirect to="/soldiers"/>}
            <div style={{textAlign:"center"}} className="jumbotron p-0">
                <div className="display-4 text-light bg-dark w-100 text-center" >Military Organization</div>
                <Link to="/" className="btn btn-info float-left m-2">Back</Link>
                <div className="clearfix"></div>
                <h2>Login To Organization</h2>
                <p>Using your Military Account</p>
                <label htmlFor="userName">Username</label>
                <br></br>
                <input type="text" id="userName" name="userName" value={this.state.username} onChange={event => this.setState({ username: event.target.value })}></input>
                <br></br>
                <label htmlFor="password">Password</label>
                <br></br>
                <input type="password" id="password" name="password" value={this.state.password} onChange={event => this.setState({ password: event.target.value })}></input>
                <p className="text-danger">{this.state.error}</p>
                <br></br>
                <br></br>
                <button type="button" className="btn btn-primary" onClick={() => this.onLoginClick()}>Login</button>
                <p>New to us? Create an Account Here</p>
                <Link to="/signup" className="btn btn-primary" >Create</Link>
            </div>
        </>
    }
}
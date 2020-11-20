import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';



export class LoginPage extends React.Component{
    state = {
        username:"",
        password: "",
        error: "",
        confirmedLoggedIn: false
    };

    onLoginClick () {
        if(this.state.username == ""){
            this.setState({error: "Please enter a username."});
        }else if(this.state.password == ""){
            this.setState({error: "Please enter a password."});
        }

        if(this.state.username == "jonyzizou" && this.state.password == "welcome1"){
            this.setState({confirmedLoggedIn: true});
            sessionStorage.setItem("loggedIn",true);
            sessionStorage.setItem("userID",1);
            sessionStorage.setItem("authLevel",1);
            
        }else{
            this.setState({error: "Your username or password is wrong"});
        }

        if(this.state.username == "andrew" && this.state.password == "welcome1"){
            this.setState({confirmedLoggedIn: true});
            sessionStorage.setItem("loggedIn",true);
            sessionStorage.setItem("userID",2);
            sessionStorage.setItem("authLevel",2);
        }else{
            this.setState({error: "Your username or password is wrong"});
        }
    }

    render(){
        debugger;
        let redirect = <></>;
        if (this.state.confirmedLoggedIn || sessionStorage.getItem('loggedIn') == true) {
            redirect = <Redirect to='/dashboard' />;
        }
        return <>
            {redirect}
            <div style={{textAlign:"center"}} className="jumbotron">
                <h2>Login</h2>
                <label htmlFor="userName">Username</label>
                <br></br>
                <input type="text" id="userName" name="userName" value={this.state.username} onChange={event => this.setState({ username: event.target.value })}></input>
                <br></br>
                <label htmlFor="password">Password</label>
                <br></br>
                <input type="password" id="password" name="password" value={this.state.userName} onChange={event => this.setState({ password: event.target.value })}></input>
                <p className="text-danger">{this.state.error}</p>
                <br></br>
                <br></br>
                <button type="button" className="btn btn-primary" onClick={() => this.onLoginClick()}>Login</button>
                <p>New to us? Create an Account Here</p>
                <Link to="/signin" className="btn btn-primary" >Create</Link>
            </div>
        </>
    }
}
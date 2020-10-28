import React from 'react';

import './../style/general.css';
import './../style/Login.css';

export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
          username:"",
          password: "",
          error: ""
        };
        this.dismissError = this.dismissError.bind(this);
        this.submit = this.submit.bind(this);
        this.userChange = this.userChange.bind(this);
        this.passChange = this.passChange.bind(this);
    }


    dismissError(){
        this.setState({error: ""});
    }

    submit(evt){
        evt.preventDefault();

        if(!this.state.username){
            return this.setState({ error: "Username is required"});
        }

        if(!this.state.password){
            return this.setState({ error: "Password is required" });
        }
        return this.setState({ error: ""});
    }

    userChange(evt){
        this.setState({ username: evt.target.value});
    }

    passChange(evt){
        this.setState({ password: evt.target.value})
    }

    render()  {
        return <>
            <div className="Login">
                <h1>Account Login</h1>
                <h3>Please enter username and password to load account</h3>
                <form onSubmit={this.submit}>
                    {
                        this.state.error && <h4 data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}></button>
                            {this.state.error}
                        </h4>
                    }
                    <label>Username</label>
                    <input type="text" data-test="username" value={this.state.username} onChange={this.userChange}/>

                    <label>Password</label>
                    <input type="text" data-test="password" value={this.state.password} onChange={this.passChange}/>

                    <input type="submit" vlaue="Log In" data-test="submit"/>
                </form>
            </div>
        </>;
    }

}
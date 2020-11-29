import React from "react"

export class Signup extends React.Component{
    state ={
        username:"",
        password:"",
        rank:"",
        error:""
    };

    onCreateClick(){
        //click the create button
        if(this.state.username == ""){
            this.setState({error: "Please enter a username."});
        }else if(this.state.password == ""){
            this.setState({error: "Please enter a password."});
        }
        else if(this.state.rank==""){
            this.setState({error: "Please enter a rank"});
        }
        else{
            console.log("Create account");
            console.log(this.state.username);
            console.log(this.state.password);
            console.log(this.state.rank);
        }
    }
    render(){
        return<div style={{textAlign:"center"}} className="jumbotron p-0">
            <div className="display-4 text-light bg-dark w-100 text-center" >Military Organization</div>
            <h2>Create an Account</h2>
            <label htmlFor="userName">Username</label>
            <br></br>
            <input type="text" id="userName" name="userName" value={this.state.username} onChange={event => this.setState({ username: event.target.value })}></input>
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <input type="password" id="password" name="password" value={this.state.password} onChange={event => this.setState({ password: event.target.value })}></input>
            <br></br>
            <label htmlFor="rank">Choose a rank</label>
            <br></br>
            <select name="rank" id="rank" value={this.state.rank} onChange={ event => this.setState({ rank: event.target.value }) }>
                <option value=""></option>
                <option value="public">General Public</option>
                <option value="soldier">Soldier</option>
                <option value="governmentOfficial">Government Official</option>
            </select>
            <p>By clicking Create, you agree to our Terms,</p>
            <p> Data policy, and Cookies policy</p>
            <p className="text-danger">{this.state.error}</p>
            <button type="button" className="btn btn-primary" onClick={()=>this.onCreateClick()}>Create</button>
        </div>
    }
}
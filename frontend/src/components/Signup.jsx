import React from "react"
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
export class Signup extends React.Component{

    state ={
        username:"",
        name:"",
        age:0,
        gender:"",
        password:"",
        rank:"",
        error:"",
        goodCreate: false
    };

    onCreateClick(){
        //click the create button
        if(this.state.username === ""){
            this.setState({error: "Please enter a username."});
        }else if(this.state.password === ""){
            this.setState({error: "Please enter a password."});
        }
        else if(this.state.name === ""){
            this.setState({error: "Please enter a name"});
        }
        else if(this.state.rank === ""){
            this.setState({error: "Please enter a rank"});
        }
        else if(this.state.age === 0){
            this.setState({error: "Please enter an age"});
        }
        else if(this.state.gender === ""){
            this.setState({error: "Please enter a gender"});
        }

        else{
            console.log("Create account");
            console.log(this.state.username);
            console.log(this.state.name);
            console.log(this.state.password);
            console.log(this.state.age);
            console.log(this.state.rank);
            console.log(this.state.gender);
            
            let newAuth = this.props.authentication;
            newAuth.username = this.state.username;
            newAuth.loggedIn = true;
            newAuth.userID = 3;
            
            if(this.state.rank === "public"){
                
                newAuth.identity = false;
                newAuth.authLevel = 0;


            }else if(this.state.rank === "soldier"){
                newAuth.identity = true;
                newAuth.authLevel = 1;

            }else if(this.state.rank === "governmentOfficial"){
                newAuth.identity = true;
                newAuth.authLevel = 2;
            } 
            
            this.props.onAuthChange(newAuth);
            this.setState({error: "",goodCreate:true});
            // const history = useHistory();
            // history.push('/soldiers');
        }
    }
    render(){
        return <>
            {(this.state.goodCreate || this.props.authentication.loggedIn) && <Redirect to="/soldiers"/>}
            <div style={{textAlign:"center"}} className="jumbotron p-0">
                <div className="display-4 text-light bg-dark w-100 text-center" >Military Organization</div>
                <Link to="/" className="btn btn-info float-left m-2">Back</Link>
                <div className="clearfix"></div>
                <h2>Create an Account</h2>
                <label htmlFor="userName">Username</label>
                <br></br>
                <input type="text" id="userName" name="userName" value={this.state.username} onChange={event => this.setState({ username: event.target.value })}></input>
                <br></br>
                <label htmlFor="name">Name</label>
                <br></br>
                <input type="text" id="name" name="name" value={this.state.name} onChange={event => this.setState({ name: event.target.value })}></input>
                <br></br>
                <label htmlFor="password">Password</label>
                <br></br>
                <input type="password" id="password" name="password" value={this.state.password} onChange={event => this.setState({ password: event.target.value })}></input>
                <br></br>
                <label htmlFor="age">Age</label>
                <br></br>
                <input type="number" id="age" name="age" value={this.state.age} onChange={event => this.setState({ age: event.target.value })}></input>
                <br></br>
                <label htmlFor="gender">Gender</label>
                <br></br>
                <select name="gender" id="gender" value={this.state.gender} onChange={ event => this.setState({ gender: event.target.value }) }>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="blank">Prefer not to answer</option>
                </select>
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
                <br></br>
                <Link to="/login" className="text-primary m-2">Login in instead</Link>
            </div>
        </>
    }
}
import React from "react"
import { Link } from "react-router-dom";
import "../style/SoldierProfile.css";
import AuthorizationCheck from "../utils/AuthorizationCheck";
import { InformationRequest } from "./InformationRequest";
import { SendMessage } from './SendMessage';
import { Notification } from '../models/Notification';
import { Redirect } from 'react-router-dom';

export class SoldierProfile extends React.Component{
    state = {
        name:"Tom Madden",
        id:"0",
        gender: "Male",
        age: "35",
        branch: "Army",
        rank: "First Sergeant",
        location: "Georgia",
        baseName: "Fort Stewart",
        email: "tmadden@army.gov",
        bio: "Hello! I am Tom Madden, a First Sergeant in the Army",
        requestInfo: false,
        sendMessage: false,
    };
    authorizationCheck = new AuthorizationCheck();

    componentDidMount(){
        const soldierId = +this.props.match.params.soldierId;
        this.setState({extraInfo: this.authorizationCheck.checkRelatives(this.state.name)});
    }

    submitInfoRequest = (messages,locations, requestMessage) => {
        alert("Your request has been sent!");
        // console.log(messages);
        // console.log(militaryBase);
        // console.log(location);
        // console.log(requestMessage);
        let message = localStorage.getItem('userName'); 
        
        if(messages && locations){
            message += " would like to view your military base and location as well as get messages about your status. ";
        }else if(message === true && locations === false) {
            message += " would like to recieve messages about your status.";
        }else{
            message += " would like to view your military base and location.";
        }
        if(message !== ""){
            message += " " + localStorage.getItem('userName') + " says: " + requestMessage;
        }
        let notification = new Notification(this.state.id,"Extra Information Request from " + localStorage.getItem('userName'),message,"infoRequest",true);
        console.log(notification);
        this.setState({requestInfo:false});
    }

    submitMessage = (message) => {
        alert("Your message has been sent!");
        console.log(message);
        let notification = new Notification(this.state.id,"Message from " + localStorage.getItem('userName'),message,"message",false);
        console.log(notification);

        this.setState({sendMessage:false});
    }

    closeMessage = () => {
        this.setState({sendMessage:false});
    }

    closeInfoRequest = () => {
        this.setState({requestInfo:false});
    }

    requestExtraInfo() {
        if(this.state.requestInfo === false){
            this.setState({requestInfo: true});
        }else{
            this.setState({requestInfo: false});
        }
    }

    sendMessage() {
        if(this.state.sendMessage === false){
            this.setState({sendMessage: true});
        }else{
            this.setState({sendMessage: false});
        }
    }

    render(){
        return <>
          {!this.props.authentication.loggedIn && <Redirect to="/"/>}
          <div> <h1>{this.state.name}</h1>
            <h2>Basic informations</h2>
            <img src="https://via.placeholder.com/250C/O https://placeholder.com/"></img>

            <p>Gender: {this.state.gender}</p>
            <p>Rank: {this.state.rank}</p>
            <p>Age: {this.state.age}</p>
            <p>Military branch: {this.state.branch}</p>
            <p>Bio: {this.state.bio}</p>

            {(sessionStorage.getItem("authLevel") > 1 || this.authorizationCheck.checkRelatives(this.state.name)) ?
                (<><p>Military Base: {this.state.baseName}</p><p>Location: {this.state.location}</p><p>Email: {this.state.email}</p></>)
            :
                (<></>)
              }
            
            <button id="download" type= "button" className="btn" onClick={() => this.downloadTxtFile()}>Download</button>
            <Link to="/soldiers" id="cancel" className="btn">Back</Link>
            {this.state.requestInfo === false ? <></> :<InformationRequest soldierName={this.state.name} submitInfoRequest={this.submitInfoRequest} closeInfoRequest={this.closeInfoRequest}/>}
            {this.state.sendMessage === false ? <></> :<SendMessage soldierName={this.state.name} submitMessage={this.submitMessage} closeMessage={this.closeMessage}/>}
            {(sessionStorage.getItem("authLevel") > 1 || this.authorizationCheck.checkRelatives(this.state.name)) ?
                (<><br/><button id="SendMessage" type= "button" className="btn bg-primary" onClick={() => this.sendMessage()}>Message</button></>)
            
            :
                (<><br/><button id="ExtraInfo" type= "button" className="btn bg-primary" onClick={() => this.requestExtraInfo()}>Request Extra Information</button></>)

            }
            
        </div>
        </>
    }

    downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([this.state.name, "\n",this.state.gender
                ,"\n", this.state.rank, "\n", this.state.age,
                "\n", this.state.location, "\n",this.state.baseName,
                "\n", this.state.branch, "\n"],
            {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "Soldier.txt";
        document.body.appendChild(element);
        element.click();
    }
}
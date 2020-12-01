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
        let message = this.props.authentication.username + " is requesting extra information about you."; 
        
        // if(messages && locations){
        //     message += " would like to view your military base and location as well as get messages about your status. ";
        // }else if(message === true && locations === false) {
        //     message += " would like to recieve messages about your status.";
        // }else{
        //     message += " would like to view your military base and location.";
        // }
        if(message !== ""){
            message += " Message: " + requestMessage;
        }
        let notification = new Notification(this.props.authentication.userID,this.state.id,"Extra Information Request from " + this.props.authentication.username,message,"infoRequest");
        console.log(notification);
        this.setState({requestInfo:false});
    }

    submitMessage = (message) => {
        alert("Your message has been sent!");
        console.log(message);
        let notification = new Notification(this.props.authentication.userID,this.state.id,"Message from " + this.props.authentication.username,message,"message");
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
          <div className="jumbotron">
            <img src="https://via.placeholder.com/250C/O https://placeholder.com/" className="img-fluid float-right m-4 no-show-small"></img>
            <h1 className="py-2 my-2 display-4">{this.state.name}</h1>
            <h2>Basic Information</h2>

              <div className="py-2 my-2">
                  <h3 className="d-inline py-2 my-2 ">Gender: </h3>
                  <p className="d-inline py-2 my-2 text">{this.state.gender}</p>
              </div>
              <div className="py-2 my-2">
                  <h3 className="d-inline py-2 my-2 ">Rank: </h3>
                  <p className="d-inline py-2 my-2 text">{this.state.rank}</p>
              </div>
              <div className="py-2 my-2">
                  <h3 className="d-inline py-2 my-2 ">Age: </h3>
                  <p className="d-inline py-2 my-2 text">{this.state.age}</p>
              </div>
              <div className="py-2 my-2">
                  <h3 className="d-inline py-2 my-2 ">Branch </h3>
                  <p className="d-inline py-2 my-2 text">{this.state.branch}</p>
              </div>

              <h3 className="py-2 my-2">Biography</h3>
              <p>{this.state.bio}</p>

            
            {(this.props.authentication.authLevel > 1 || this.props.authentication.relatives.indexOf(this.state.name) !== -1) ?
                (<><div className="py-2 my-2">
                    <h3 className="d-inline py-2 my-2 ">Military Base: </h3>
                    <p className="d-inline py-2 my-2 text">{this.state.baseName}</p>
                </div>
                    <div className="py-2 my-2">
                    <h3 className="d-inline py-2 my-2 ">Location: </h3>
                    <p className="d-inline py-2 my-2 text">{this.state.location}</p>
                </div>
                    <div className="py-2 my-2">
                    <h3 className="d-inline py-2 my-2 ">Email </h3>
                    <p className="d-inline py-2 my-2 text">{this.state.email}</p>
                </div></>)
            :
                (<></>)
              }
            
            <button id="download" type= "button" className="btn py-2 m-2" onClick={() => this.downloadTxtFile()}>Download</button>
            <Link to="/soldiers" id="cancel" className="btn py-2 m-2">Back</Link>
            {this.state.requestInfo === false ? <></> :<InformationRequest soldierName={this.state.name} authentication={this.props.authentication} submitInfoRequest={this.submitInfoRequest} closeInfoRequest={this.closeInfoRequest}/>}
            {this.state.sendMessage === false ? <></> :<SendMessage soldierName={this.state.name} submitMessage={this.submitMessage} closeMessage={this.closeMessage}/>}
            {(this.props.authentication.authLevel > 1 || this.props.authentication.relatives.indexOf(this.state.name) !== -1) ?
                (<><br/><button id="SendMessage" type= "button" className="btn bg-primary py-2 m-2" onClick={() => this.sendMessage()}>Message</button></>)
            
            :
                (<><br/><button id="ExtraInfo" type= "button" className="btn bg-primary py-2 m-2" onClick={() => this.requestExtraInfo()}>Request Extra Information</button></>)

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
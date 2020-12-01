import React from 'react';
import {Redirect} from 'react-router-dom';
import {Notification} from "./../models/Notification";


import './../style/general.css';
import './../style/DocumentSubmission.css';

export class DocumentSubmission extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name:"",
          ssn:"",
          address:"",
          submitted: false,
          error:""
        };
    }

    submit(){
        if(this.state.fileName === "" || this.state.name === "" || this.state.ssn === "" || this.state.address === ""){
            this.setState({error:"Please fill all forms before submitting"});
        }else{
            this.setState({
                submitted:true
            })
            let message = "Name: " + this.state.name + "  SSN: " + this.state.ssn + " Address: " + this.state.address;
            let notification = new Notification(this.props.authentication.userID,-1,"Identity Check from " + this.props.authentication.username,message,"identityCheck");
            console.log(notification);
        }
    }

    filechanged(event){
        console.log(event.target.value);
        console.log("file loaded");
        this.setState({
            fileName:event.target.value
        })
    }

    render()  {
        return <div className="jumbotron d-flex flex-column p-4">
            {!this.props.authentication.loggedIn && <Redirect to="/"/>}
            <h1 className="m-0 pt-0">Confirm Identification</h1>
            <p>Please supply your name, social security, and address for a government official to confirm your identity.</p>
            <form className="fileLoad">
                <label htmlFor="name_in" className="mb-0"><h3>Name</h3></label>
                <input
                    type="text"
                    name="name_in"
                    id="name_in"
                    className="form-control mb-4 full-width-mobile"
                    placeholder="Your name..."
                    value={this.state.name}
                    onChange={event => this.setState({ name: event.target.value })}>
                </input>
                <label htmlFor="ssn_in" className="mb-0"><h3>Social Security Number</h3></label>
                <input
                    type="text"
                    name="ssn_in"
                    placeholder="Your social security number..."
                    id="ssn_in"
                    className="form-control full-width-mobile mb-4"
                    value={this.state.ssn}
                    onChange={event => this.setState({ ssn: event.target.value })}>
                </input>
                <label htmlFor="address_in" className="mb-0"><h3>Address</h3></label>
                <textarea
                    type="text"
                    name="address_in"
                    placeholder="Your home address..."
                    id="address_in"
                    className="form-control mb-2 full-width-mobile"
                    value={this.state.address}
                    onChange={event => this.setState({ address: event.target.value })}>
                </textarea>
                <br/>
                <div className="mr-auto">
                    <label htmlFor="fileLoad"></label>
                    <input type="file" id="fileLoad" name="fileLoad" accept="image/png, image/jpeg, application/pdf" onChange={event =>this.filechanged(event)}/>
                </div>
                <br/>
                <button type="button" className="btn bg-primary text-white" onClick={event => this.submit()}>Submit</button>
                {this.state.submitted ? (
                    <p>Your file has been submitted!</p>
                ) : (
                    <p className="text-danger">{this.state.error}</p>
                )}
                
            </form>
            </div>;
    }

}
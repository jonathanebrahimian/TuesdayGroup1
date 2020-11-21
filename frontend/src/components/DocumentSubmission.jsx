import React from 'react';
import {Redirect} from 'react-router-dom';


import './../style/general.css';
import './../style/DocumentSubmission.css';

export class DocumentSubmission extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name:"",
          ssn:"",
          address:"",
          submitted: false
        };
    }

    submit(){
        console.log('pressed')
        if(this.state.fileName == ""){
            alert("Please select a file before submitting.")
        }else{
            this.setState({
                submitted:true
            })
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
        return <>
            {!this.props.authentication.loggedIn && <Redirect to="/"/>}
            <h1>Confirm Identification</h1>
            <p>Please supply your name, social security, and address for a government official to confirm your identity.</p>
            <form className="fileLoad">
                {/* <label htmlFor="fileLoad">Select a file:</label>
                <input type="file" id="fileLoad" name="fileLoad" accept="image/png, image/jpeg, application/pdf" onChange={event =>this.filechanged(event)}/><br/><br/> */}
                <label htmlFor="name_in">Your Name</label>
                <input
                    type="text"
                    name="name_in"
                    id="name_in"
                    className="form-control"
                    value={this.state.name}
                    onChange={event => this.setState({ name: event.target.value })}>
                </input>
                <label htmlFor="ssn_in">Social Security Number</label>
                <input
                    type="text"
                    name="ssn_in"
                    id="ssn_in"
                    className="form-control"
                    value={this.state.ssn}
                    onChange={event => this.setState({ ssn: event.target.value })}>
                </input>
                <label htmlFor="address_in">Address</label>
                <input
                    type="text"
                    name="address_in"
                    id="address_in"
                    className="form-control"
                    value={this.state.address}
                    onChange={event => this.setState({ address: event.target.value })}>
                </input>
                <button type="button" onClick={event => this.submit()}>Submit</button>
                {this.state.submitted ? (
                    <p>Your file has been submitted!</p>
                ) : (
                    <></>
                )}
                
            </form>
            </>;
    }

}
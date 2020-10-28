import React from 'react';

import './../style/general.css';
import './../style/DocumentSubmission.css';

export class DocumentSubmission extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          fileName:"",
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
            <h1>Confirm Identification</h1>
            <p>Please uplaod a png, jpeg, or pdf of either your birthcirtificate, drivers license, or passport to confirm your identity</p>
            <form className="fileLoad">
                <label htmlFor="fileLoad">Select a file:</label>
                <input type="file" id="fileLoad" name="fileLoad" accept="image/png, image/jpeg, application/pdf" onChange={event =>this.filechanged(event)}/><br/><br/>
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
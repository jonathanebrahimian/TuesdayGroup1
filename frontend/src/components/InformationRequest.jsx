import React from 'react';

import './../style/general.css';
import './../style/ResultsTable.css';

export class InformationRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      militaryBase:false,
      messages:false,
      extraInfoMessage:"",
      error:""
    };
  }

  submit = () =>  {
    console.log(this.state.messages);
    if(this.props.authentication.identity === true){
      this.props.submitInfoRequest(this.state.messages,this.state.militaryBase,this.state.extraInfoMessage);
    }else{
      this.setState({error:"Please confirm your identity before requesting extra information."});
    }
  }




  render() {
    return (
      <>
      <h3>You are requesting information from {this.props.soldierName}</h3>
      <form>        
          <label htmlFor="add_notifications mr-1">Messages</label>
          <input className="ml-1 mr-3" type="checkbox"
            id="add_notifications"
            name="add_notifications"
            checked={this.state.messages}
            onChange={event => {
                this.setState({
                    messages: event.target.checked
                })
            }}/>

          <label htmlFor="add_militaryBase">Military Base &amp; Location</label>
            <input className="ml-1 mr-3" type="checkbox"
              id="add_militaryBase"
              name="add_militaryBase"
              checked={this.state.militaryBase}
              onChange={event => {
                  this.setState({
                    militaryBase: event.target.checked
                  })
            }}/> 
          <br/>
          <label htmlFor="message">Attach Message</label>
          <br/>
          <textarea id="message" placeholder="Optional" name="message" rows="5" cols="50" value={this.state.extraInfoMessage} onChange={event => this.setState({ extraInfoMessage: event.target.value })}></textarea> 
          <br/>
          <p className="text-danger">{this.state.error}</p>
          <button type="button" className="btn bg-secondary py-2 my-2" onClick={this.submit}>Submit</button>
          <button type="button" className="btn bg-secondary py-2 my-2" onClick={this.props.closeInfoRequest}>Close</button>
        </form>
      </>
    );
  }
}
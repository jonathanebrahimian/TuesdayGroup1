import React from 'react';

import './../style/general.css';
import './../style/ResultsTable.css';

export class InformationRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      militaryBase:false,
      messages:false,
      extraInfoMessage:""
    };
  }

  submit = () =>  {
    console.log(this.state.messages);
    this.props.submitInfoRequest(this.state.messages,this.state.militaryBase,this.state.extraInfoMessage);
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
          <button type="button" className="btn bg-secondary" onClick={this.submit}>Submit</button>
          <button type="button" className="btn bg-secondary" onClick={this.props.closeInfoRequest}>Close</button>
        </form>
      </>
    );
  }
}
import React from 'react';

import './../style/general.css';

export class SendMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  submit = () =>  {
    console.log(this.state.message);
    this.props.submitMessage(this.state.message);
  }




  render() {
    return (
      <>
      <h3>You are sending a message too {this.props.soldierName}</h3>
      <form>
        <label htmlFor="message">Attach Message</label>
        <br/>
        <textarea id="message" placeholder="Optional" name="message" rows="5" cols="50" value={this.state.message} onChange={event => this.setState({ message: event.target.value })}></textarea> 
        <br/>
        <button type="button" className="btn bg-secondary py-2 m-2" onClick={this.submit}>Submit</button>
        <button type="button" className="btn bg-secondary py-2 m-2" onClick={this.props.closeMessage}>Close</button>
        </form>
      </>
    );
  }
}
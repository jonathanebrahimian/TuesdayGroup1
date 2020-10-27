import React from 'react';

import './style/general.css';
import './style/ResultsTable.css';

export class InformationRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location:false,
      notifications:false,
    };
  }

  submit() {
    console.log("Processed Data:")
    console.log("Soldier being requested: " + this.props.soldierName);
    console.log("Location: " + this.state.location);
    console.log("Notifications: " + this.state.notifications);
    alert("Your request has been sent!");
  }




  render() {
    return (
      <>
      <h1>You are requesting information from {this.props.soldierName}</h1>
      <form>    
          <label htmlFor="add_location">Location: </label>
          <input type="checkbox"
            id="add_location"
            name="add_location"
            checked={this.state.location}
            onChange={event => {
              this.setState({
                location: event.target.checked
              })
            }}/>
            
          <label htmlFor="add_notifications">Notifications: </label>
          <input type="checkbox"
            id="add_notifications"
            name="add_notifications"
            checked={this.state.notifications}
            onChange={event => {
                this.setState({
                    notifications: event.target.checked
                })
            }}/>
          <br/>
          <button type="button" onClick={event => this.submit()}>Submit</button>
        </form>
      </>
    );
  }
}
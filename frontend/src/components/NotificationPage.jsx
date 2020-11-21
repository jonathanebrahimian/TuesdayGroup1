import React from 'react';
import {Notification} from '../models/Notification';
import { Redirect } from 'react-router-dom';

export class NotificationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [
        new Notification(1,"Message", "Hello there! You can now see this message here. It has some text and even a line break soon. Hopefully we can do some sort of collapsing thing with the text.","message",true),
        new Notification(2,"Extra Info Request", "Ah, you wanted to check out the second message huh? There isn't much more content to this message though.","infoRequest",false),
        new Notification(3,"Identity Check", "Name: Jonathan Ebrahimian SSN: 111-11-1111 Address: 123 Happy Road, Dallas TX","identityCheck",false),
        new Notification(4,"Other", "Thank you for joining!","other",false)
      ],
      "details": -1
    }
  }

  accepted(notification){
    let newNotifications = this.state.notifications;
    newNotifications = newNotifications.filter(function(ele){
      return ele != notification;
    })
    this.setState({notifications:newNotifications});
  }

  remove(notification){
    let newNotifications = this.state.notifications;
    newNotifications = newNotifications.filter(function(ele){
      return ele != notification;
    })
    this.setState({notifications:newNotifications});
  }

  denied(notification){
    let newNotifications = this.state.notifications;
    newNotifications = newNotifications.filter(function(ele){
        return ele != notification;
    })
    
    this.setState({notifications:newNotifications});
  }

  render() {
    return <>
      {!this.props.authentication.loggedIn && <Redirect to="/"/>}
      <div className="container">
        <h1>Notifications - ({this.state.notifications.length})</h1>
        {this.state.notifications.length != 0 ? "" : <h3>You have no notifications at this time!</h3>}
        {this.state.notifications.map((x, i) => (
          <div className="card text-left mb-2" onClick={() => this.setState({details: this.state.details === i ? -1 : i})}>
            {x.important === false ? <div className="card-header font-weight-bold">{x.title}</div> :
                <div className="card-header font-weight-bold text-danger">{x.title}</div> 
            }
            {
              i !== this.state.details || x.type !== "infoRequest" ? "" : 
                <div class="card-body">
                  <div className="card-text">{x.message}</div>
                  <button className="btn bg-success" onClick={() => this.accepted(x)}>Accept</button>
                  <button className="btn bg-danger" onClick={() => this.denied(x)}>Deny</button>
                </div>
            }
            {
              i !== this.state.details || x.type !== "message" ? "" : 
                <div class="card-body">
                  <div className="card-text">{x.message}</div>
                  <button className="btn bg-dark text-white float-right" onClick={() => this.remove(x)}>Remove</button>
                  <div className="clear-fix"></div>
                </div>
            } 
            {
              i !== this.state.details || x.type !== "identityCheck" ? "" : 
                <div class="card-body">
                  <div className="card-text">{x.message}</div>
                  
                  <button className="btn bg-success" onClick={() => this.accepted(x)}>Accept</button>
                  <button className="btn bg-danger" onClick={() => this.denied(x)}>Deny</button>
                  
                </div>
            } 
            {
              i !== this.state.details || x.type !== "other" ? "" : 
                <div class="card-body">
                  <div className="card-text">{x.message}</div>
                  <button className="btn bg-dark text-white float-right" onClick={() => this.remove(x)}>Remove</button>
                  <div className="clear-fix"></div>
                </div>
            } 
              
          </div>
        ))}
      </div>
    </>    
  }
}
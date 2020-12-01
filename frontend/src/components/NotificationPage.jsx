import React from 'react';
import {Notification} from '../models/Notification';
import { Redirect } from 'react-router-dom';

export class NotificationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [
        new Notification(0,1,"Message", "Hello there! You can now see this message here. It has some text and even a line break soon. Hopefully we can do some sort of collapsing thing with the text.","message"),
        new Notification(0,2,"Extra Info Request", "Ah, you wanted to check out the second message huh? There isn't much more content to this message though.","infoRequest"),
        new Notification(0,3,"Identity Check", "Name: Jonathan Ebrahimian SSN: 111-11-1111 Address: 123 Happy Road, Dallas TX","identityCheck"),
        new Notification(0,5,"Identity Check", "Name: Jonathan Ebrahimian SSN: 111-11-1111 Address: 123 Happy Road, Dallas TX","identityCheck"),
        
        new Notification(0,4,"Other", "Thank you for joining!","other",false)
      ],
      "comments":""
    }
  }

  accepted(notification){
    let newNotifications = this.state.notifications;
    newNotifications = newNotifications.filter(function(ele){
      return ele != notification;
    })
    this.setState({notifications:newNotifications,comments:""});
  }

  remove(notification){
    let newNotifications = this.state.notifications;
    newNotifications = newNotifications.filter(function(ele){
      return ele != notification;
    })
    this.setState({notifications:newNotifications,comments:""});
  }

  clearMessage = () => {
    this.setState({comments:""});
  }

  denied(notification){
    let newNotifications = this.state.notifications;
    newNotifications = newNotifications.filter(function(ele){
        return ele != notification;
    })
    
    this.setState({notifications:newNotifications,comments:""});
  }

  render() {
    return <>
      {!this.props.authentication.loggedIn && <Redirect to="/"/>}
      <h1>Notifications - ({this.state.notifications.length})</h1>
      {this.state.notifications.length != 0 ? "" : <h3>You have no notifications at this time!</h3>}
      <div className="accordion" id="notificationAccordion">
        {this.state.notifications.map((x, i) => (
          <div key={i} className="card">
            <div className="card-header font-weight-bold" id={`heading${i}`} >
              <h2 className="mb-0">
                <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target={`#collapse${i}`} aria-expanded="false" aria-controls={`collapse${i}`} onClick={this.clearMessage}>
                  {x.title}
                  </button>
                </h2>
            </div>
            <div id={`collapse${i}`} className="collapse" aria-labelledby={`heading${i}`}  data-parent="#notificationAccordion">
            
            {
              x.type !== "infoRequest" ? "" : 
                <div className="card-body">
                  <div className="card-text">{x.message}</div>
                  <button className="btn bg-success text-white m-3" type="button" onClick={() => this.accepted(x)}>Accept</button>
                  <button className="btn bg-danger text-white m-3" type="button" onClick={() => this.denied(x)}>Deny</button>
                </div>
            }
            {
              x.type !== "message" ? "" : 
                <div className="card-body">
                  <div className="card-text">{x.message}</div>
                  <button className="btn bg-dark text-white float-right mb-3" type="button" onClick={() => this.remove(x)}>Remove</button>
                  <div className="clear-fix"></div>
                </div>
            } 
            {
              x.type !== "identityCheck" ? "" : 
                <div className="card-body">
                  <div className="card-text">{x.message}</div>
                  <form>
                    <label htmlFor="comments"></label>
                    <textarea name="comments" id="comments" placeholder="Comment on your decision..." className="w-75" value={this.state.comments}
                    onChange={event => this.setState({ comments: event.target.value })}/>
                    <br/>
                    <button className="btn bg-success text-white m-3" type="button" onClick={() => this.accepted(x)}>Accept</button>
                    <button className="btn bg-danger text-white m-3" type="button" onClick={() => this.denied(x)}>Deny</button>
                  </form>
                  
                </div>
            } 
            {
              x.type !== "other" ? "" : 
                <div className="card-body">
                  <div className="card-text">{x.message}</div>
                  <button className="btn bg-dark text-white float-right mb-3" type="button" onClick={() => this.remove(x)}>Remove</button>
                  <div className="clear-fix"></div>
                </div>
            } 
            </div>
              
          </div>
        ))}
      </div>
    </>    
  }
}
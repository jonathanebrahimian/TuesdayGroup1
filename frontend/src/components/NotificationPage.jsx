import React from 'react';

export class NotificationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          "type": "Message",
          "title": "Sample Title A",
          "message": "Hello there! You can now see this message here. It has some text and even a line break soon. Hopefully we can do some sort of collapsing thing with the text."
        },
        {
          "type": "Extra Information Request",
          "title": "Sample Title B",
          "message": "Ah, you wanted to check out the second message huh? There isn't much more content to this message though."
        },
        {
          "type": "Miscellaneous",
          "title": "Sample Title C",
          "message": "Yeah, I don't have much more to say here."
        },
      ],
      "details": -1
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Notifications</h1>
        {this.state.messages.map((x, i) => (
          <div className="card text-left" onClick={() => this.setState({details: this.state.details === i ? -1 : i})}>
            <div className="card-header">{x.title}</div>
            {
              i !== this.state.details ? "" : 
                <div class="card-body">
                  <h2 className="card-title">{x.type}</h2>
                  <div className="card-text">{x.message}</div>
                </div>
            }
          </div>
        ))}
      </div>
    )    
  }
}
import React from 'react';

export class NotificationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          "title": "Sample Title A",
          "message": "Hello there! You can now see this message here. It has some text and even a line break soon. Hopefully we can do some sort of collapsing thing with the text."
        },
        {
          "title": "Sample Title B",
          "message": "Ah, you wanted to check out the second message huh? There isn't much more content to this message though."
        },
        {
          "title": "Sample Title C",
          "message": "Yeah, I don't have much more to say here."
        },
      ],
      "details": -1
    }
  }

  render() {
    return (
      <>
        {this.state.messages.map((x, i) => (
          <div className="message-container" onClick={() => this.setState({details: this.state.details === i ? -1 : i})}>
            <h2>{x.title}</h2>
            {
              i === this.state.details ? <p>{x.message}</p> : ""
            }
          </div>
        ))}
      </>
    )    
  }
}
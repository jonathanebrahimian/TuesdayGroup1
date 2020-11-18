import React from "react"
import './Profile.css';
export class Profile extends React.Component{
    state= {
        name: "Parker Smith",
        gender: "Male",
        age: 30,
        relatives:"John Smith, Paul Smith",
        description: "Hello, I am Colonel John Smith's brother"
    }
    render(){
        return <div>
            <img src="https://via.placeholder.com/250C/O https://placeholder.com/"></img>
            <p>Name</p>
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" size="30" value={this.state.name} onChange={ev1 => this.setState({ name: ev1.target.value })}></input>
            <p>Gender</p>
            <label htmlFor="gender"></label>
            <input type="text" id="gender" name="gender" size="10" value={this.state.gender} onChange={ev2 => this.setState({ gender: ev2.target.value })}></input>
            <p>Age</p>
            <label htmlFor="age"></label>
            <input type="text" id="age" name="age" size="10" value={this.state.age} onChange={ev3 => this.setState({ age: ev3.target.value })}></input>
            <p>Relatives</p>

            <label htmlFor="relatives"></label>
            <input type="text" id="relatives" name="relatives" size="50" value={this.state.relatives} onChange={ev4 => this.setState({ relatives: ev4.target.value })}></input>
            <p>Biography</p>
            <label htmlFor="bio"></label>
            <textarea id="bio" name="bio" rows="5" cols="50" value={this.state.bio} onChange={ev5 => this.setState({ bio: ev5.target.value })}></textarea>
            <button>Cancel</button>
        </div>

    }
}

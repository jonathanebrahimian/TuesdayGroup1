import React from "react"
import { Redirect } from "react-router-dom";
import '../style/Profile.css';
export class Profile extends React.Component{
    state= {
        name: "Parker Smith",
        gender: "Male",
        age: 30,
        relatives: ["John Smith", "Paul Smith"],
        description: "Hello, I am Colonel John Smith's brother",
        editing: false,
    }

    doneClick(){
        this.setState({editing:false});
    }
    editClick(){
        this.setState({editing:true});
    }
    removeRealtive(indexIn){
        let newRelatives = this.state.relatives;
        newRelatives.splice(indexIn, 1);
        this.setState({relatives:newRelatives});
    }

    render(){
        if(this.state.editing){

            return <div>
                {!this.props.authentication.loggedIn && <Redirect to="/"/>}
            <form>
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
                    <table className="container ">
                    <thead>
                        <th>Relatives</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {   this.state.relatives.map((person, i) => {
                            return (
                                <tr>
                                <td>{person}</td>
                                <td><button type="button" className="form-control" onClick={() => this.removeRealtive(i)}>Remove</button></td>
                                </tr>
                            )
                                
                            })
                        }
                    </tbody>
                </table>
                <p>Biography</p>
                <label htmlFor="bio"></label>
                <textarea id="bio" name="bio" rows="5" cols="50" value={this.state.bio} onChange={ev5 => this.setState({ bio: ev5.target.value })}></textarea>
                <br/>
                </form>

            <button className="btn btn-success" onClick={() => this.doneClick()}>Done</button>

        </div>

        }else{

            return <div>
                {!this.props.authentication.loggedIn && <Redirect to="/"/>}
            <img src="https://via.placeholder.com/250C/O https://placeholder.com/"></img>
            <h3>Name</h3>
            <p>{this.state.name}</p>
            <h3>Gender</h3>
            <p>{this.state.gender}</p>
            <h3>Age</h3>
            <p>{this.state.age}</p>
            <h3>Relatives</h3>
            <table className="container">
                <thead>
                    <th></th>
                </thead>
                <tbody>
                    {   this.state.relatives.map((person, i) => {
                            return (
                                <tr>
                                <td>{person}</td>
                                </tr>
                            )
                                
                        })
                    }
                </tbody>
            </table>
            <h3>Biography</h3>
            <p>{this.state.bio}</p>
            <br/>
            <button className="btn btn-primary" onClick={() => this.editClick()}>Edit</button>
            </div>

        }
    }
}

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
                    <img src="https://via.placeholder.com/250C/O https://placeholder.com/" className="img-fluid float-right m-4"></img>
                    <p className="py-2 my-2 display-4">{this.state.name}</p>

                    <div>
                        <h3 className="d-inline py-2 my-2 ">Age: </h3>
                        <p className="d-inline py-2 my-2 text">{this.state.age}</p>
                    </div>

                    <div>
                        <h3 className="d-inline py-2 my-2 ">Gender: </h3>
                        <p className="d-inline py-2 my-2 text">{this.state.gender}</p>
                    </div>

                    <h3 className="py-2 my-2" >Relatives: </h3>
                    <table className="ml-2">
                        <tbody>
                        {   this.state.relatives.map((person, i) => {
                            return (
                                <tr>
                                    <td >{person}</td>
                                    <td className="m-2 p-2"><button type="button" className="btn btn-warning" onClick={() => this.removeRealtive(i)}>Remove</button></td>
                                </tr>
                            )

                        })
                        }
                        </tbody>
                    </table>
                    <h3 className="py-2 my-2">Biography</h3>
                    <label htmlFor="bio"></label>
                    <textarea id="bio" name="bio" rows="5" cols="50" value={this.state.bio} onChange={ev5 => this.setState({ bio: ev5.target.value })}></textarea>
                    <br/>
                </form>

                <button className="btn btn-success" onClick={() => this.doneClick()}>Done</button>

            </div>

        }else{

            return <div>
                {!this.props.authentication.loggedIn && <Redirect to="/"/>}

                <img src="https://via.placeholder.com/250C/O https://placeholder.com/"
                     className="img-fluid" alt="..."></img>


                <p className="py-2 my-2 display-4">{this.state.name}</p>

                <div className="py-2 my-2">
                    <h3 className="d-inline py-2 my-2 ">Age: </h3>
                    <p className="d-inline py-2 my-2 text">{this.state.age}</p>
                </div>

                <div className="py-2 my-2">
                    <h3 className="d-inline py-2 my-2 ">Gender: </h3>
                    <p className="d-inline py-2 my-2 text">{this.state.gender}</p>
                </div>

                <div>

                </div>
                <h3 className="py-2 my-2" >Relatives: </h3>
                <table className="container py-2 my-2">
                    <thead>
                    <th></th>
                    </thead>
                    <tbody>
                    {   this.state.relatives.map((person, i) => {
                        return (
                            <tr key={i}>
                                <td className="text">{person}</td>
                            </tr>
                        )

                    })
                    }
                    </tbody>
                </table>
                <h3 className="py-2 my-2">Biography</h3>
                <p>{this.state.bio !== "" ? this.state.bio : <i>Edit your profile to add a bio!</i>}</p>
                <br/>
                <button className="btn btn-primary" onClick={() => this.editClick()}>Edit</button>
            </div>

        }
    }
}


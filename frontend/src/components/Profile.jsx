import React from "react"
import { Redirect } from "react-router-dom";
import '../style/Profile.css';
import '../style/ResponsiveDesign.css';
import imageURL from "../images/face.jpg";
export class Profile extends React.Component{
    state= {
        name: "Parker Smith",
        gender: "Male",
        age: 30,
        relatives: ["John Smith", "Paul Smith"],
        description: "Hello, I am Colonel John Smith's brother",
        account:"public",
        editing: false,
        bio: ""
    }

    doneClick(){
        this.setState({editing:false});
    }
    editClick(){
        this.setState({editing:true});
    }
    removeRealtive(indexIn){
        let shouldDelete=window.confirm("Do you want to delete this relatives");
        if(shouldDelete){
            let newRelatives = this.state.relatives;
            newRelatives.splice(indexIn, 1);
            this.setState({relatives:newRelatives});
        }

    }

    render(){
        if(this.state.editing){

            return <div className="jumbotron">
                {!this.props.authentication.loggedIn && <Redirect to="/"/>}
                <form>
                    <img src={imageURL} alt="The Face of a Soldier" className="float-right mt-4 no-show-small profilePic"></img>
                    <p className="py-2 my-2 display-4">{this.state.name}</p>

                    <div>
                        <h3 className="d-inline py-2 my-2 ">Age: </h3>
                        <p className="d-inline py-2 my-2 text">{this.state.age}</p>
                    </div>

                    <div>
                        <h3 className="d-inline py-2 my-2 ">Gender: </h3>
                        <p className="d-inline py-2 my-2 text">{this.state.gender}</p>
                    </div>
                    <div>
                        <h3 className="d-inline py-2 my-2 ">Account Type: </h3>
                        <p className="d-inline py-2 my-2 text">{this.state.account}</p>
                    </div>

                    <h3 className="py-2 my-2" >Close Contacts: </h3>
                    <table className="ml-2">
                        <tbody>
                        {   this.state.relatives.map((person, i) => {
                            return (
                                <tr key={i}>
                                    <td >{person}</td>
                                    <td className="m-2 p-2"><button type="button" className="btn btn-warning" onClick={() => this.removeRealtive({i})}>Remove</button></td>
                                </tr>
                            )

                        })
                        }
                        </tbody>
                    </table>
                    <h3 className="py-2 my-2">Biography</h3>
                    <label htmlFor="bio"></label>
                    <textarea id="bio" name="bio" rows="5" className="col-10" value={this.state.bio} onChange={ev5 => this.setState({ bio: ev5.target.value })}></textarea>
                    <br/>
                </form>

                <button className="btn btn-success" onClick={() => this.doneClick()}>Done</button>

            </div>

        }else{

            return <div className="jumbotron">
                {!this.props.authentication.loggedIn && <Redirect to="/"/>}

                <img src={imageURL}
                     className="float-right mt-4 no-show-small profilePic" alt="The Face of a Soldier"></img>


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
                    <h3 className="d-inline py-2 my-2 ">Account Type: </h3>
                    <p className="d-inline py-2 my-2 text">{this.state.account}</p>
                </div>

                <h3 className="py-2 my-2" >Close Contacts: </h3>
                <table className="container py-2 my-2">
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


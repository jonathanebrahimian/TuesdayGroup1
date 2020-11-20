import React from "react"
import { Link } from "react-router-dom";
import "../style/SoldierProfile.css";
import AuthorizationCheck from "../utils/AuthorizationCheck";

export class SoldierProfile extends React.Component{
    authorizationCheck = new AuthorizationCheck();
    state = {
        name:"Tom Madden",
        gender: "Male",
        age: "35",
        branch: "Army",
        rank: "First Sergeant",
        location: "Georgia",
        baseName: "Fort Stewart"
    };
    render(){
        return <>
          <div> <h1>{this.state.name}</h1>
            <h2>Basic informations</h2>
            <img src="https://via.placeholder.com/250C/O https://placeholder.com/"></img>

            <p>Gender: {this.state.gender}</p>
            <p>Rank: {this.state.rank}</p>
            <p>Age: {this.state.age}</p>
            <p>Military branch: {this.state.branch}</p>
            {(sessionStorage.getItem("authLevel") > 1 || this.authorizationCheck.checkRelatives(this.state.name)) &&
              (<><p>Military Base: {this.state.baseName}</p><p>Location: {this.state.location}</p></>)}
            <p>Bio: Hello! I am {this.state.name}, a {this.state.rank} in the {this.state.branch}</p>

            <button id="download" type= "button" onClick={() => this.downloadTxtFile()}>Download</button>
            <Link to="/soldiers" id="cancel">Cancel</Link>
        </div>
        </>
    }
    downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([this.state.name, "\n",this.state.gender
                ,"\n", this.state.rank, "\n", this.state.age,
                "\n", this.state.location, "\n",this.state.baseName,
                "\n", this.state.branch, "\n"],
            {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "Soldier.txt";
        document.body.appendChild(element);
        element.click();
    }
}
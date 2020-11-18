import React from "react"
import "/style/SoldierProfile.css"

export class SoldierProfile extends React.Component{
    state = {
        name:"Parker Smith",
        gender: "Male",
        age: "30",
        branch: "Dallas",
        rank: "colonel",
        location: "Dallas",
        baseName: "Dallas"
    };
    render(){
        return <div> <h1>{this.state.name}</h1>
            <h2>Basic informations</h2>
            <img src="https://via.placeholder.com/250
C/O https://placeholder.com/"></img>

            <p>Gender: {this.state.gender}</p>
            <p>Rank: {this.state.rank}</p>
            <p>Age: {this.state.age}</p>
            <p>Military Base: {this.state.baseName}</p>
            <p>Military branch: {this.state.branch}</p>

            <button id="download" type= "button" onClick={() => this.downloadTxtFile()}>Download</button>
            <button id="cancel">Cancel</button>
        </div>
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
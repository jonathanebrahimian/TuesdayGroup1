import { ResultsFilter } from "./ResultsFilter"
import { ResultsTable } from "./ResultsTable";
import React from "react";

export class Soldiers extends React.Component{
    state = {
        filter: {
            name: "",
            gender: {Male: true, Female: true},
            age: {min: "0", max: "100"},
            branch: 0, 
            rank: "", 
            location: "",
            baseName: "", 
            baseLocation: ""  
        } 
    }

    onFilterChange = newFilter => {
            this.setState({filter: newFilter});
    };

    render (){
        return <>
            <ResultsTable
                onFilterChange={this.onFilterChange}
                filter={this.state.filter} />
        </>
    }
    
        

}

import { ResultsTable } from "./ResultsTable";
import React from "react";
import axios from "axios";
import tempData from './../data.csv';
import { Redirect } from "react-router-dom";

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
    },
    results: [],
    displayedResults: []
  }

  componentDidMount() {
    function dummyData(string) {
      let parts = string.split(",");
      this.id = parts[0];
      this.name = parts[1];
      this.gender = parts[2];
      this.age = parseInt(parts[3]);
      this.branch = parts[4];
      this.rank = parts[5];
      this.location = parts[6];
      this.baseName = parts[7];
    }

    axios.get(`${tempData}`).then(e => {
      let soldiers = e.data.split("\n");
      soldiers.splice(0, 1); // Remove header column of CSV
      this.setState({
        results: soldiers.map((x, i) => new dummyData(`${i},${x}`))
      });
      this.onFilterChange(this.state.filter);
    });
  }

  onFilterChange = newFilter => {
    let newDisplayedResults = [];
    this.state.results.forEach(element => {
      if (this.personMatchesFilter(element, newFilter)) newDisplayedResults.push(element);
    });
    this.setState({filter: newFilter, displayedResults: newDisplayedResults});
  };

  clearFilter = () => {
    let clean = {
      name: "",
      gender: {Male: true, Female: true},
      age: {min: "0", max: "100"},
      branch: 0, 
      rank: "", 
      location: "",
      baseName: "", 
      baseLocation: ""  
    };
    this.setState({filter: clean});
    this.onFilterChange(clean);
    console.log("In clear filter");
  }


  personMatchesFilter(person, filter) {
    let branches = ["", "Army", "Marines", "Navy", "Air Force", "Coast Guard"];

    return (person.name.match(filter.name) &&
    filter.gender[person.gender] &&
    (person.age >= (parseInt(filter.age.min) || -Infinity) && person.age <= (parseInt(filter.age.max) || Infinity)) &&
    (filter.branch === 0 || filter.branch === branches.indexOf(person.branch)) &&
    (filter.rank === "" || filter.rank === person.rank) &&
    person.location.match(filter.location) &&
    person.baseName.match(filter.baseName))
  }

  updateResults = results => {
    this.setState({results: results});
    this.onFilterChange(this.state.filter);
  }

  render (){
    return <>
      {!this.props.authentication.loggedIn && <Redirect to="/"/>}
      <ResultsTable
        onFilterChange={this.onFilterChange}
        updateResults={this.updateResults}
        results={this.state.results}
        displayedResults={this.state.displayedResults}
        filter={this.state.filter}
        clearFilter={this.clearFilter}/>
    </>
  }
}

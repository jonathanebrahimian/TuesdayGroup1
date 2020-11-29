import React from 'react';
import {Redirect} from 'react-router-dom';

import tempData from './../data.csv';
import {CSVLink} from "react-csv";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { ResultsFilter } from './ResultsFilter';
import { ResultsTable } from './ResultsTable';

const PEOPLE_PER_PAGE = 5;

export class PersonnelManagement extends React.Component {
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
    displayedResults: [],
    lastSort: "",
    reversed: false
  };

  componentDidMount(){
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

  removeProfile = (index) => {
    this.setState(prevState => {
      prevState.results.splice(index, 1);
      return prevState;
    })
  }

  updateProfile = (index, field, value) => {
    this.setState(prevState => {
      prevState.results[index][field] = value;
      return prevState;
    })
  }

  resetSort = () => {
    console.log("Would pull from API here to get new soldier");
    this.sortBy("name");
    this.setState({reversed: false});
  }

  sortBy(field) {
    let reversed = this.state.reversed;
    if (field === this.state.lastSort) reversed = !reversed;
    else reversed = false;

    let previousResults = this.state.results;

    previousResults = previousResults.sort((a, b) => {
      if (typeof a[field] === "number") {
        if (!reversed) return a[field] - b[field];
        else return b[field] - a[field];
      } else if (typeof a[field] === "string") {
        if (!reversed) return a[field].localeCompare(b[field]);
        else return b[field].localeCompare(a[field]);
      }
    });

    this.setState({results: previousResults, lastSort: field, reversed: reversed});
    this.onFilterChange(this.state.filter);
  }

  addBlankUser = () => {
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
    let newUser = new dummyData("112,,,30,,,");
    let users = this.state.results;
    users.push(newUser);
    this.setState({results: users});
    this.onFilterChange(this.state.filter);
  }

  headers = [
    {label:"Name", key:"name"},
    {label:"Gender", key:"gender"},
    {label:"Age", key: "age"},
    {label:"Branch", key:"branch"},
    {label:"Rank", key:"rank"},
    {label:"Location", key:"location"},
    {label:"Base Name", key:"baseName"}
  ];

  render() {
    return (<>
      {!this.props.authentication.loggedIn && <Redirect to="/"/>}
      <h1>Personnel Management</h1>
      <form>
        <ResultsTable
          onFilterChange={this.onFilterChange}
          updateResults={this.updateResults}
          updateProfile={this.updateProfile}
          removeProfile={this.removeProfile}
          addBlankUser={this.addBlankUser}
          resetSort={this.resetSort}
          results={this.state.results}
          displayedResults={this.state.displayedResults}
          filter={this.state.filter}
          clearFilter={this.state.clearFilter}
          PEOPLE_PER_PAGE={PEOPLE_PER_PAGE}
          editableContent
          showClassifiedInfo/>
      </form>
      <CSVLink className="btn btn-primary" data={this.state.results} headers={this.headers} filename={"soldiersInfo.csv" }>Export Table</CSVLink>
    </>);
  }
}
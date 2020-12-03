import React from 'react';
import {Redirect} from 'react-router-dom';

import tempData from './../data.csv';
import {CSVLink} from "react-csv";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { ResultsTable } from './ResultsTable';

const PEOPLE_PER_PAGE = 5;

export class PersonnelManagement extends React.Component {
  state = {
    filter: {
      name: "",
      gender: {Male: true, Female: true},
      age: {min: "0", max: "100"},
      branch: "0",
      rank: "",
      location: "",
      baseName: "",
      baseLocation: ""
    },
    results: [],
    displayedResults: [],
    editedSoldierIDs: [],
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

  componentWillUnmount() {
    // Push new changes to database and then...
    this.setState({editedSoldierIDs: []});
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
      branch: "0", 
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
    (filter.branch === "0" || filter.branch === branches.indexOf(person.branch)) &&
    (filter.rank === "" || filter.rank === person.rank) &&
    person.location.match(filter.location) &&
    person.baseName.match(filter.baseName))
  }

  updateResults = results => {
    this.setState({results: results});
    this.onFilterChange(this.state.filter);
  }

  removeProfile = (index) => {
    let results = this.state.results;
    this.state.results.splice(index, 1);
    this.setState({results});
    this.onFilterChange(this.state.filter);
  }

  updateProfile = (soldierId, field, value) => {
    if (this.state.editedSoldierIDs.indexOf(soldierId) === -1)
      this.state.editedSoldierIDs.push(soldierId);
    let results = this.state.results;
    for (let i=0; i<results.length; i++) {
      if (results[i].id === soldierId) {
        results[i][field] = value;
        break;
      }
    }
    this.setState({results});
  }

  resetSort = () => {
    // 2 API calls
    // 1. Adds blank user to database
    // 2. Queries database
    console.log("Would pull from API here to get new soldier");
    this.setState({reversed: false, lastSort: ""});
    this.sortBy("name");
    this.clearFilter();
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
      return 0;
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
      <ResultsTable
        onFilterChange={this.onFilterChange}
        clearFilter={this.clearFilter}
        updateResults={this.updateResults}
        updateProfile={this.updateProfile}
        removeProfile={this.removeProfile}
        addBlankUser={this.addBlankUser}
        resetSort={this.resetSort}
        results={this.state.results}
        displayedResults={this.state.displayedResults}
        filter={this.state.filter}
        PEOPLE_PER_PAGE={PEOPLE_PER_PAGE}
        editableContent
        showClassifiedInfo/>
      <CSVLink className="btn btn-primary m-2" data={this.state.results} headers={this.headers} filename={"soldiersInfo.csv" }>Export Table</CSVLink>
    </>);
  }
}
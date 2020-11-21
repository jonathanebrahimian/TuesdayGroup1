import React from 'react';
import {Redirect} from 'react-router-dom';

import tempData from './../data.csv';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { ResultsFilter } from './ResultsFilter';

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

  removeProfile(index) {
    this.setState(prevState => {
      prevState.results.splice(index, 1);
      return prevState;
    })
  }

  updateProfile(index, field, value) {
    this.setState(prevState => {
      prevState.results[index][field] = value;
      return prevState;
    })
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

  addBlankUser() {
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
    this.setState(users);
    this.onFilterChange(this.state.filter);
  }

  render() {
    return (<>
      {!this.props.authentication.loggedIn && <Redirect to="/"/>}
      <h1>Personnel Management</h1>
      <form>
        <ResultsFilter
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}
          clearFilter={this.clearFilter}
          showAll/>
        <table className="table table-striped">
          <thead className="thead-dark">
            <th onClick={() => this.sortBy("name")}>Name</th>
            <th onClick={() => this.sortBy("age")}>Age</th>
            <th onClick={() => this.sortBy("gender")}>Gender</th>
            <th onClick={() => this.sortBy("branch")}>Branch</th>
            <th onClick={() => this.sortBy("rank")}>Rank</th>
            <th onClick={() => this.sortBy("baseName")}>Base Name</th>
            <th onClick={() => this.sortBy("location")}>Location</th>
            <th>Remove</th>
          </thead>
          <tbody>
            {
              this.state.displayedResults.map((person, i) => {
              return (<tr>
                <td><input type="text" className="form-control" value={person.name} onChange={e => {
                  this.updateProfile(i, "name", e.target.value);
                }}/></td>
                <td><input type="text" className="form-control" value={person.age} onChange={e => {
                  this.updateProfile(i, "age", e.target.value);
                }}/></td>
                <td><input type="text" className="form-control" value={person.gender} onChange={e => {
                  this.updateProfile(i, "gender", e.target.value);
                }}/></td>
                <td><input type="text" className="form-control" value={person.branch} onChange={e => {
                  this.updateProfile(i, "branch", e.target.value);
                }}/></td>
                <td><input type="text" className="form-control" value={person.rank} onChange={e => {
                  this.updateProfile(i, "rank", e.target.value);
                }}/></td>
                <td><input type="text" className="form-control" value={person.baseName} onChange={e => {
                  this.updateProfile(i, "baseName", e.target.value);
                }}/></td>
                <td><input type="text" className="form-control" value={person.location} onChange={e => {
                  this.updateProfile(i, "location", e.target.value);
                }}/></td>
                <td><button type="button" className="form-control btn btn-danger m-0" onClick={() => this.removeProfile(i)}>Remove</button></td>
              </tr>);
            })}
          </tbody>
        </table>
      </form>
      <button className="btn btn-info mx-auto" onClick={() => {this.addBlankUser()}}>Add Soldier</button>
    </>);
  }
}
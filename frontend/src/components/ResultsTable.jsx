import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './../style/general.css';
import './../style/ResultsTable.css';
import { ResultsFilter } from './ResultsFilter';
import { Link } from 'react-router-dom';


export class ResultsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      lastSort: "",
      reversed: false
    };
    console.log(props);
  }

  componentDidMount(){
    function dummyData(id, name, gender, age, branch, rank, location, baseName) {
      this.id = id
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.branch = branch;
      this.rank = rank;
      this.location = location;
      this.baseName = baseName;
    }

    this.setState({
      results: [
        new dummyData(1,"John Smith", "Male", 27, "Army", "Private", "Florida", "Florida Base"),
        new dummyData(2,"Samantha Jones", "Female", 25, "Army", "Corporal", "Florida", "Florida Base"),
        new dummyData(3,"Franklin O'Riley", "Male", 34, "Army", "Sergeant", "Florida", "Florida Base"),
        new dummyData(4,"George Baker", "Male", 35, "Navy", "Ensign", "California", "California Base"),
        new dummyData(5,"Juliet Terry", "Female", 22, "Navy", "Seaman", "California", "California Base"),
        new dummyData(6,"Amy Rose", "Female", 29, "Navy", "Chief Petty Officer", "California", "California Base")
      ]
    })
  }

  sortBy(field) {
    let reversed = this.state.reversed;
    if (field === this.state.lastSort) reversed = !reversed;
    else reversed = false;

    this.setState(prevState => {
      prevState.results.sort((a, b) => {
        if (typeof a[field] === "number") {
          if (!reversed) return a[field] - b[field];
          else return b[field] - a[field];
        } else if (typeof a[field] === "string") {
          if (!reversed) return a[field].localeCompare(b[field]);
          else return b[field].localeCompare(a[field]);
        }
        return prevState;
      });


      prevState.lastSort = field;
      prevState.reversed = reversed;

      return prevState;
    });
  }


  personMatchesFilter(person, filter) {
    /*
    let nameMatch = person.name.match(filter.name).length > 0;
    let ageMatch = person.age >= filter.age.min && person.age <= filter.age.max;
    let branchMatch = filter.branch[person.branch];
    let locationMatch = person.location.match(filter)
    */
    let branches = ["", "Army", "Marines", "Navy", "Air Force", "Coast Guard"];

    return (person.name.match(filter.name) &&
      filter.gender[person.gender] &&
      (person.age >= (parseInt(filter.age.min) || -Infinity) && person.age <= (parseInt(filter.age.max) || Infinity)) &&
      (filter.branch === 0 || filter.branch === branches.indexOf(person.branch)) &&
      (filter.rank === "" || filter.rank === person.rank) &&
      person.location.match(filter.location) &&
      person.baseName.match(filter.baseName))
  }

  render() {
    return (
      <>
        <h1>Click a name to view details</h1>
        <ResultsFilter
          onFilterChange={this.props.onFilterChange}
          filter={this.props.filter} />
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th onClick={() => this.sortBy("name")}>Name</th>
              <th onClick={() => this.sortBy("age")}>Age</th>
              <th onClick={() => this.sortBy("gender")}>Gender</th>
              <th onClick={() => this.sortBy("branch")}>Branch</th>
              <th onClick={() => this.sortBy("rank")}>Rank</th>
              <th onClick={() => this.sortBy("location")}>Location</th>
              <th onClick={() => this.sortBy("baseName")}>Base Name</th>
              </tr>
          </thead>
          <tbody>
            { this.state.results.map((person, i) => {
              if (!this.personMatchesFilter(person, this.props.filter))
                return <></>
              return (
                <tr key={i}>
                  <Link to={"/soldiers/" + person.id}>
                    <td>{person.name}</td>
                  </Link>
                  <td>{person.age}</td>
                  <td>{person.gender}</td>
                  <td>{person.branch}</td>
                  <td>{person.rank}</td>
                  <td>{person.location}</td>
                  <td>{person.baseName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    )
  }
}
import React from 'react';
import './ResultsTable.css'

class ResultsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      lastSort: "",
      reversed: false
    };
  }

  componentDidMount(){
    function dummyData(name, gender, age, branch, location, baseName, baseLocation) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.branch = branch;
      this.location = location;
      this.baseName = baseName;
      this.baseLocation = baseLocation;
    }

    this.setState({
      results: [
        new dummyData("John Smith", "Male", 27, "Army", "Florida", "Florida Base", "Florida"),
        new dummyData("Samantha Jones", "Female", 25, "Army", "Florida", "Florida Base", "Florida"),
        new dummyData("Franklin O'Riley", "Male", 34, "Army", "Florida", "Florida Base", "Florida"),
        new dummyData("George Baker", "Male", 35, "Navy", "California", "California Base", "California"),
        new dummyData("Juliet Terry", "Female", 22, "Navy", "California", "California Base", "California"),
        new dummyData("Amy Rose", "Female", 29, "Navy", "California", "California Base", "California")
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

  showDetails(index) {
    console.log("TODO: Show details for:")
    console.log(this.state.results[index]);
  }

  personMatchesFilter(person, filter) {
    /*
    let nameMatch = person.name.match(filter.name).length > 0;
    let ageMatch = person.age >= filter.age.min && person.age <= filter.age.max;
    let branchMatch = filter.branch[person.branch];
    let locationMatch = person.location.match(filter)
    */
    return (person.name.match(filter.name) &&
      filter.gender[person.gender] &&
      (person.age >= filter.age.min && person.age <= filter.age.max) &&
      filter.branch[person.branch] &&
      person.location.match(filter.location) &&
      person.baseName.match(filter.baseName) &&
      person.baseLocation.match(filter.baseLocation))
  }

  render() {
    return (
      <>
        <p>Click a name to view details</p>
        <table className="resultsTable">
          <thead>
            <tr>
              <th onClick={() => this.sortBy("name")}>Name</th>
              <th onClick={() => this.sortBy("gender")}>Gender</th>
              <th onClick={() => this.sortBy("age")}>Age</th>
              <th onClick={() => this.sortBy("location")}>Location</th>
              <th onClick={() => this.sortBy("branch")}>Branch</th>
              <th onClick={() => this.sortBy("baseName")}>Base Name</th>
              <th onClick={() => this.sortBy("baseLocation")}>Base Location</th>
              </tr>
          </thead>
          <tbody>
            { this.state.results.map((person, i) => {
              if (!this.personMatchesFilter(person, this.props.filter))
                return <tr key={i} className="hidden"></tr>
              return (
                <tr key={i}>
                  <td onClick={() => this.showDetails(i)}>{person.name}</td>
                  <td>{person.gender}</td>
                  <td>{person.age}</td>
                  <td>{person.location}</td>
                  <td>{person.branch}</td>
                  <td>{person.baseName}</td>
                  <td>{person.baseLocation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    )
  }
}

export default ResultsTable;
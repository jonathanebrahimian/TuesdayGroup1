import React from 'react';

export class PersonnelManagement extends React.Component {
  state = {
    results: [],
    lastSort: "",
    reversed: false
  };

  componentDidMount(){
    function dummyData(name, gender, age, branch, rank, location, baseName, baseLocation) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.branch = branch;
      this.rank = rank;
      this.location = location;
      this.baseName = baseName;
      this.baseLocation = baseLocation;
    }

    this.setState({
      results: [
        new dummyData("John Smith", "Male", 27, "Army", "Private", "Florida", "Florida Base", "Florida"),
        new dummyData("Samantha Jones", "Female", 25, "Army", "Corporal", "Florida", "Florida Base", "Florida"),
        new dummyData("Franklin O'Riley", "Male", 34, "Army", "Sergeant", "Florida", "Florida Base", "Florida"),
        new dummyData("George Baker", "Male", 35, "Navy", "Ensign", "California", "California Base", "California"),
        new dummyData("Juliet Terry", "Female", 22, "Navy", "Seaman", "California", "California Base", "California"),
        new dummyData("Amy Rose", "Female", 29, "Navy", "Chief Petty Officer", "California", "California Base", "California")
      ]
    })
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

  render() {
    return (<>
      <h1>Personnel Management</h1>
      <form>
        <table>
          <thead>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Branch</th>
            <th>Rank</th>
            <th>Location</th>
            <th>Base Name</th>
            <th>Base Location</th>
            <th>Remove</th>
          </thead>
          <tbody>
            {this.state.results.map((person, i) => {
              return (<tr>
                <td><input type="text" value={person.name} onChange={e => {
                  this.updateProfile(i, "name", e.target.value);
                }}/></td>
                <td><input type="text" value={person.gender} onChange={e => {
                  this.updateProfile(i, "gender", e.target.value);
                }}/></td>
                <td><input type="text" value={person.age} onChange={e => {
                  this.updateProfile(i, "age", e.target.value);
                }}/></td>
                <td><input type="text" value={person.branch} onChange={e => {
                  this.updateProfile(i, "branch", e.target.value);
                }}/></td>
                <td><input type="text" value={person.rank} onChange={e => {
                  this.updateProfile(i, "rank", e.target.value);
                }}/></td>
                <td><input type="text" value={person.location} onChange={e => {
                  this.updateProfile(i, "location", e.target.value);
                }}/></td>
                <td><input type="text" value={person.baseName} onChange={e => {
                  this.updateProfile(i, "baseName", e.target.value);
                }}/></td>
                <td><input type="text" value={person.baseLocation} onChange={e => {
                  this.updateProfile(i, "baseLocation", e.target.value);
                }}/></td>
                <td><button type="button" onClick={() => this.removeProfile(i)}>Remove</button></td>
              </tr>);
            })}
          </tbody>
        </table>
      </form>
    </>);
  }
}
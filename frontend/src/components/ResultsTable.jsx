import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './../style/general.css';
import './../style/ResultsTable.css';
import { ResultsFilter } from './ResultsFilter';
import { Link } from 'react-router-dom';

export class ResultsTable extends React.Component {
  state = {
    lastSort: "",
    reversed: false,
    page: 0
  };

  sortBy(field) {
    let reversed = this.state.reversed;
    if (field === this.state.lastSort) reversed = !reversed;
    else reversed = false;

    let previousResults = this.props.results;

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

    this.props.updateResults(previousResults);

    this.setState({lastSort: field, reversed: reversed});
  }

  static getDerivedStateFromProps(props, prevState) {
    if (prevState.page * props.PEOPLE_PER_PAGE >= props.displayedResults.length) {
      prevState.page = Math.max(0, Math.floor((props.displayedResults.length-1)/props.PEOPLE_PER_PAGE))
      return prevState;
    }
    return null;
  }

  render() {
    return (
      <>
        <ResultsFilter
          onFilterChange={this.props.onFilterChange}
          filter={this.props.filter}
          clearFilter={this.props.clearFilter}/>
        <form>
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th onClick={() => this.sortBy("name")}>Name</th>
                <th onClick={() => this.sortBy("age")}>Age</th>
                <th className="no-show-mobile" onClick={() => this.sortBy("gender")}>Gender</th>
                <th onClick={() => this.sortBy("branch")}>Branch</th>
                <th className="no-show-mobile" onClick={() => this.sortBy("rank")}>Rank</th>
                { this.props.showClassifiedInfo && <>
                <th onClick={() => this.sortBy("location")}>Location</th>
                <th onClick={() => this.sortBy("baseName")}>Base Name</th>
                </>}
                { this.props.editableContent && <>
                <th>Remove</th>
                </>}
              </tr>
            </thead>
            <tbody>
              { this.props.displayedResults.map((person, i) => {
                if (i < this.state.page * this.props.PEOPLE_PER_PAGE || i >= (this.state.page+1) * this.props.PEOPLE_PER_PAGE)
                  return <tr key={i}></tr>;
                return (
                  this.props.editableContent ?
                  <tr key={i}>
                    <td><input type="text" className="form-control" value={person.name} onChange={e => {
                      this.props.updateProfile(person.id, "name", e.target.value);
                    }}/></td>
                    <td><input type="text" className="form-control" value={person.age} onChange={e => {
                      this.props.updateProfile(person.id, "age", e.target.value);
                    }}/></td>
                    <td><input type="text" className="form-control" value={person.gender} onChange={e => {
                      this.props.updateProfile(person.id, "gender", e.target.value);
                    }}/></td>
                    <td><input type="text" className="form-control" value={person.branch} onChange={e => {
                      this.props.updateProfile(person.id, "branch", e.target.value);
                    }}/></td>
                    <td><input type="text" className="form-control" value={person.rank} onChange={e => {
                      this.props.updateProfile(person.id, "rank", e.target.value);
                    }}/></td>
                    <td><input type="text" className="form-control" value={person.baseName} onChange={e => {
                      this.props.updateProfile(person.id, "baseName", e.target.value);
                    }}/></td>
                    <td><input type="text" className="form-control" value={person.location} onChange={e => {
                      this.props.updateProfile(person.id, "location", e.target.value);
                    }}/></td>
                    <td><button type="button" className="form-control btn btn-danger m-0" onClick={() => this.props.removeProfile(i)}>Remove</button></td>
                  </tr> :
                  <tr key={i}>
                    
                    <td><Link to={"/soldiers/" + person.id}>{person.name}</Link></td>
                    
                    <td>{person.age}</td>
                    <td className="no-show-mobile">{person.gender}</td>
                    <td>{person.branch}</td>
                    <td className="no-show-mobile">{person.rank}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
        <div className="d-flex">
          <div className="btn-group mx-auto" role="group">
            {this.state.page > 0 ?
              <button onClick={() => this.setState({page: this.state.page - 1})} className="btn btn-primary m-0" type="button">&larr;</button> :
              <button className="btn btn-secondary m-0" type="button">&larr;</button>}
            {/* Using a button for formatting reasons */}
            <button type="button" className="btn btn-primary m-0 border-left border-right">
              Page {this.state.page + 1}/{Math.max(1, Math.ceil(this.props.displayedResults.length/this.props.PEOPLE_PER_PAGE))}
            </button>
            {this.state.page < Math.ceil((this.props.displayedResults.length)/this.props.PEOPLE_PER_PAGE) - 1 ?
              <button onClick={() => this.setState({page: this.state.page + 1})} className="btn btn-primary m-0" type="button">&rarr;</button> :
              <button className="btn btn-secondary m-0" type="button">&rarr;</button>}
          </div><br/>
        </div>
        {this.props.editableContent && <button type="button" className="btn btn-info float-right" onClick={() => {this.setState({page: 0}); this.props.resetSort();}}>Add Soldier</button>}
        <div className="clear-fix"></div>
      </>
    )
  }
}
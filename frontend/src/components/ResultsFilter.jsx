import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './../style/general.css';
import './../style/ResultsFilter.css';

export class ResultsFilter extends React.Component {

  render() {
    return (
      <>
      <form>
          <table className="table table-bordered table-sm">
            <thead className="thead-dark">
              <tr>
                <th><label htmlFor="filter_name" placeholder="Name">Name</label></th>
                <th><label htmlFor="filter_age_min">Age Min</label></th>
                <th><label htmlFor="filter_age_max">Age Max</label></th>
                <th><label htmlFor="filter_male">Male</label></th>
                <th><label htmlFor="filter_female">Female</label></th>
                <th><label htmlFor="filter_branch">Branch</label></th>
                <th><label htmlFor="filter_rank">Rank</label></th>
                {/*
                <th><label htmlFor="filter_location">Location</label></th>
                <th><label htmlFor="filter_baseName">Base Name</label></th>
                */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    id="filter_name"
                    name="filter_name"
                    className="form-control"
                    value={this.props.filter.name}
                    onChange={event => {
                      let newName = event.target.value;
                      let newFilter = this.props.filter;
                      newFilter.name = newName;

                      this.props.onFilterChange(newFilter);
                    }}/>
                </td>
                <td>
                  <input
                    type="number"
                    id="filter_age_min"
                    name="filter_age_min"
                    className="form-control"
                    min="0"
                    max="100"
                    value={this.props.filter.age.min}
                    onChange={event => {
                      let newMinAge = event.target.value;
                      let newFilter = this.props.filter;
                      newFilter.age.min = newMinAge;

                      this.props.onFilterChange(newFilter);
                    }}/>
                </td>
                <td>
                  <input
                    type="number"
                    id="filter_age_max"
                    name="filter_age_max"
                    className="form-control"
                    min="0"
                    max="100"
                    value={this.props.filter.age.max}
                    onChange={event => {
                      let newMaxAge = event.target.value;
                      let newFilter = this.props.filter;
                      newFilter.age.max = newMaxAge;

                      this.props.onFilterChange(newFilter);
                    }}/>
                </td>
                <td>
                <input type="checkbox"
                  id="filter_male"
                  name="filter_male"
                    className="form-control"
                  checked={this.props.filter.gender.Male}
                  onChange={event => {
                    let newMale = event.target.checked;
                    let newFilter = this.props.filter;
                    newFilter.gender.Male = newMale;

                    this.props.onFilterChange(newFilter);
                  }}/>
                </td>
                <td>
                  <input type="checkbox"
                    id="filter_female"
                    name="filter_female"
                    className="form-control"
                    checked={this.props.filter.gender.Female}
                    onChange={event => {
                      let newFemale = event.target.checked;
                      let newFilter = this.props.filter;
                      newFilter.gender.Female = newFemale;

                      this.props.onFilterChange(newFilter);
                    }}/>
                </td>
                <td>
                  <select
                    id="filter_branch"
                    name="branch"
                    className="form-control"
                    value={this.props.filter.branch}
                    onChange={event => {
                      let newBranch = parseInt(event.target.value) || 0;
                      let newFilter = this.props.filter;
                      newFilter.branch = newBranch;

                      this.props.onFilterChange(newFilter);
                    }}>
                    <option value="0"></option>
                    <option value="1">Army</option>
                    <option value="2">Marines</option>
                    <option value="3">Navy</option>
                    <option value="4">Air Force</option>
                    <option value="5">Coast Guard</option>
                  </select>
                </td>
                <td>
                  <select
                    id="filter_rank"
                    name="rank"
                    className="form-control"
                    value={this.props.filter.rank}
                    onChange={event => {
                      let newRank = event.target.value;
                      let newFilter = this.props.filter;
                      newFilter.rank = newRank;

                      this.props.onFilterChange(newFilter);
                    }}>
                    <option value=""></option>
                    <option value="Private">Private</option>
                    <option value="Corporal">Corporal</option>
                    <option value="Sergeant">Sergeant</option>
                  </select>
                </td>
                {/*
                <td>
                  <input
                    type="text"
                    id="filter_location"
                    name="filter_location"
                    className="form-control"
                    value={this.props.filter.location}
                    onChange={event => {
                      let newLocation = event.target.value;
                      let newFilter = this.props.filter;
                      newFilter.location = newLocation;

                      this.props.onFilterChange(newFilter);
                    }}/>
                </td>
                <td>
                  <input
                    type="text"
                    id="filter_baseName"
                    name="filter_baseName"
                    className="form-control"
                    value={this.props.filter.baseName}
                    onChange={event => {
                      let newBaseName = event.target.value;
                      let newFilter = this.props.filter;
                      newFilter.baseName = newBaseName;

                      this.props.onFilterChange(newFilter);
                    }}/>
                </td>
                  */}
              </tr>
            </tbody>
          </table>
        </form>
      </>
    );
  }
}
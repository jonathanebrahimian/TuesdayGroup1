import React from 'react';

import './general.css';
import './ResultsFilter.css';

export class ResultsFilter extends React.Component {

  render() {
    return (
      <>
      <form>
          <label htmlFor="filter_name">Name: </label>
          <input
            type="text"
            id="filter_name"
            name="filter_name"
            value={this.props.filter.name}
            onChange={event => {
              let newName = event.target.value;
              let newFilter = this.props.filter;
              newFilter.name = newName;

              this.props.onFilterChange(newFilter);
            }}/>
          <br/>
            
          <label htmlFor="filter_male">Male: </label>
          <input type="checkbox"
            id="filter_male"
            name="filter_male"
            checked={this.props.filter.gender.Male}
            onChange={event => {
              let newMale = event.target.checked;
              let newFilter = this.props.filter;
              newFilter.gender.Male = newMale;

              this.props.onFilterChange(newFilter);
            }}/>
            
          <label htmlFor="filter_female">Female: </label>
          <input type="checkbox"
            id="filter_female"
            name="filter_female"
            checked={this.props.filter.gender.Female}
            onChange={event => {
              let newFemale = event.target.checked;
              let newFilter = this.props.filter;
              newFilter.gender.Female = newFemale;

              this.props.onFilterChange(newFilter);
            }}/>
          <br/>

          <label htmlFor="filter_location">Location: </label>
          <input
            type="text"
            id="filter_location"
            name="filter_location"
            value={this.props.filter.location}
            onChange={event => {
              let newLocation = event.target.value;
              let newFilter = this.props.filter;
              newFilter.location = newLocation;

              this.props.onFilterChange(newFilter);
            }}/>
          <br/>

          <label htmlFor="filter_army">Army: </label>
          <input type="checkbox"
            id="filter_army"
            name="filter_army"
            checked={this.props.filter.branch.Army}
            onChange={event => {
              let newArmy = event.target.checked;
              let newFilter = this.props.filter;
              newFilter.branch.Army = newArmy;

              this.props.onFilterChange(newFilter);
            }}/>

          <label htmlFor="filter_marines">Marines: </label>
          <input type="checkbox"
            id="filter_marines"
            name="filter_marines"
            checked={this.props.filter.branch.Marines}
            onChange={event => {
              let newMarines = event.target.checked;
              let newFilter = this.props.filter;
              newFilter.branch.Marines = newMarines;

              this.props.onFilterChange(newFilter);
            }}/>

          <label htmlFor="filter_navy">Navy: </label>
          <input type="checkbox"
            id="filter_navy"
            name="filter_navy"
            checked={this.props.filter.branch.Navy}
            onChange={event => {
              let newNavy = event.target.checked;
              let newFilter = this.props.filter;
              newFilter.branch.Navy = newNavy;

              this.props.onFilterChange(newFilter);
            }}/>

          <label htmlFor="filter_airforce">Air Force: </label>
          <input type="checkbox"
            id="filter_airforce"
            name="filter_airforce"
            checked={this.props.filter.branch["Air Force"]}
            onChange={event => {
              let newAirForce = event.target.checked;
              let newFilter = this.props.filter;
              newFilter.branch["Air Force"] = newAirForce;

              this.props.onFilterChange(newFilter);
            }}/>

          <label htmlFor="filter_coastguard">Coast Guard: </label>
          <input type="checkbox"
            id="filter_coastguard"
            name="filter_coastguard"
            checked={this.props.filter.branch["Coast Guard"]}
            onChange={event => {
              let newCoastGuard = event.target.checked;
              let newFilter = this.props.filter;
              newFilter.branch["Coast Guard"] = newCoastGuard;

              this.props.onFilterChange(newFilter);
            }}/>
          <br/>

          <label htmlFor="filter_baseName">Base Name: </label>
          <input
            type="text"
            id="filter_baseName"
            name="filter_baseName"
            value={this.props.filter.baseName}
            onChange={event => {
              let newBaseName = event.target.value;
              let newFilter = this.props.filter;
              newFilter.baseName = newBaseName;

              this.props.onFilterChange(newFilter);
            }}/>
          <br/>

          <label htmlFor="filter_baseLocation">Base Location: </label>
          <input
            type="text"
            id="filter_baseLocation"
            name="filter_baseLocation"
            value={this.props.filter.baseLocation}
            onChange={event => {
              let newBaseLocation = event.target.value;
              let newFilter = this.props.filter;
              newFilter.baseLocation = newBaseLocation;

              this.props.onFilterChange(newFilter);
            }}/>
          <br/>
        </form>
      </>
    );
  }
}
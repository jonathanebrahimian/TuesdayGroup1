import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './../style/general.css';
import './../style/ResultsFilter.css';

export const ResultsFilter = props => {
  return <>
  <form>
      <table className="table table-bordered table-sm">
        <thead className="thead-dark">
          <tr>
            <th><label className="m-auto" htmlFor="filter_name" placeholder="Name">Name</label></th>
            <th className="no-show-mobile"><label className="m-auto" htmlFor="filter_age_min">Age Min</label></th>
            <th className="no-show-mobile"><label className="m-auto" htmlFor="filter_age_max">Age Max</label></th>
            <th className="no-show-mobile"><label className="m-auto" htmlFor="filter_male">Male</label></th>
            <th className="no-show-mobile"><label className="m-auto" htmlFor="filter_female">Female</label></th>
            <th className="no-show-mobile"><label className="m-auto" htmlFor="filter_branch">Branch</label></th>
            <th className="no-show-mobile"><label className="m-auto" htmlFor="filter_rank">Rank</label></th>
            {props.showAll && <>
            <th className="no-show-mobile"><label className="m-auto" htmlFor="filter_baseName">Base Name</label></th>
            <th className="no-show-mobile"><label className="m-auto" htmlFor="filter_location">Location</label></th>
            </>}
            <th className="m-auto no-show-mobile">Clear Filter</th>
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
                value={props.filter.name}
                onChange={event => {
                  let newName = event.target.value;
                  let newFilter = props.filter;
                  newFilter.name = newName;

                  props.onFilterChange(newFilter);
                }}/>
            </td>
            <td className="no-show-mobile">
              <input
                type="number"
                id="filter_age_min"
                name="filter_age_min"
                className="form-control"
                min="0"
                max="100"
                value={props.filter.age.min}
                onChange={event => {
                  let newMinAge = event.target.value;
                  let newFilter = props.filter;
                  newFilter.age.min = newMinAge;

                  props.onFilterChange(newFilter);
                }}/>
            </td>
            <td className="no-show-mobile">
              <input
                type="number"
                id="filter_age_max"
                name="filter_age_max"
                className="form-control"
                min="0"
                max="100"
                value={props.filter.age.max}
                onChange={event => {
                  let newMaxAge = event.target.value;
                  let newFilter = props.filter;
                  newFilter.age.max = newMaxAge;

                  props.onFilterChange(newFilter);
                }}/>
          </td>
          <td className="no-show-mobile">
            <input type="checkbox"
              id="filter_male"
              name="filter_male"
                className="form-control"
              checked={props.filter.gender.Male}
              onChange={event => {
                let newMale = event.target.checked;
                let newFilter = props.filter;
                newFilter.gender.Male = newMale;

                props.onFilterChange(newFilter);
              }}/>
            </td>
            <td className="no-show-mobile">
              <input type="checkbox"
                id="filter_female"
                name="filter_female"
                className="form-control"
                checked={props.filter.gender.Female}
                onChange={event => {
                  let newFemale = event.target.checked;
                  let newFilter = props.filter;
                  newFilter.gender.Female = newFemale;

                  props.onFilterChange(newFilter);
                }}/>
            </td>
            <td className="no-show-mobile">
              <select
                id="filter_branch"
                name="branch"
                className="form-control"
                value={props.filter.branch}
                onChange={event => {
                  let newBranch = parseInt(event.target.value) || "0";
                  let newFilter = props.filter;
                  newFilter.branch = newBranch;

                  props.onFilterChange(newFilter);
                }}>
                <option value="0"></option>
                <option value="1">Army</option>
                <option value="2">Marines</option>
                <option value="3">Navy</option>
                <option value="4">Air Force</option>
                <option value="5">Coast Guard</option>
              </select>
            </td>
            <td className="no-show-mobile">
              <select
                id="filter_rank"
                name="rank"
                className="form-control"
                value={props.filter.rank}
                onChange={event => {
                  let newRank = event.target.value;
                  let newFilter = props.filter;
                  newFilter.rank = newRank;

                  props.onFilterChange(newFilter);
                }}>
                <option value=""></option>
                {{ // Army, Navy, Marines, Air Force, Coast Guard
                  "0": [],
                  "1": ["Private", "Private First Class", "Specialist", "Corporal", "Sergeant", "Staff Sergeant", "Sergeant First Class", "Master Sergeant", "First Sergeant", "Sergeant Major", "Command Sergeant Major", "Sergeant Major of the Army"],
                  "2": ["Private", "Private First Class", "Corporal", "Sergeant", "Staff Sergeant", "Gunnery Sergeant", "Master Sergeant", "First Sergeant", "Master Gunnery Sergeant", "Sergeant Major", "Sergeant Major of the Marine Corps"],
                  "3": ["Seaman Recruit", "Seaman Apprentice", "Seaman", "Petty Officer Third Class", "Petty Officer Second Class", "Petty Officer First Class", "Chief Petty Officer", "Senior Chief Petty Officer", "Master Chief Petty Officer", "Command Master Chief Petty Officer", "Master Chief Petty Officer of the Coast Guard", "Chief Warrant Officer 2", "Chief Warrant Officer 3", "Chief Warrant Officer 4", "Chief Warrant Officer 5", "Ensign", "Lieutenant Junior Grade", "Lieutenant", "Lieutenant Commander", "Commander", "Captain", "Rear Admiral Lower Half", "Rear Admiral", "Vice Admiral", "Admiral", "Fleet Admiral"],
                  "4": ["Airman Basic", "Airman", "Airman First Class", "Senior Airman", "Staff Sergeant", "Technical Sergeant", "Master Sergeant", "Senior Master Sergeant", "Chief Master Sergeant", "Command Master Sergeant", "Command Chief Master Sergeant", "Chief Master Sergeant of the Aur Force", "Second Lieutenant", "First Lieutenant", "Captain", "Major", "Lieutenant Colonel", "Colonel", "Brigadier General", "Major General", "Lieutenant General", "General", "General of the Air Force"],
                  "5": ["Seaman Recruit", "Seaman Apprentice", "Seaman", "Petty Officer Third Class", "Petty Officer Second Class", "Petty Officer First Class", "Chief Petty Officer", "Senior Chief Petty Officer", "Master Chief Petty Officer", "Command Master Chief Petty Officer", "Master Chief Petty Officer of the Coast Guard", "Chief Warrant Officer 2", "Chief Warrant Officer 3", "Chief Warrant Officer 4", "Ensign", "Lieutenant Junior Grade", "Lieutenant", "Lieutenant Commander", "Commander", "Captain", "Rear Admiral Lower Half", "Rear Admiral", "Vice Admiral", "Admiral"],
                }[props.filter.branch].map((x, i) => <option key={i} value={x}>{x}</option>)}
              </select>
            </td>
            {props.showAll && <>
            <td className="no-show-mobile">
              <input
                type="text"
                id="filter_baseName"
                name="filter_baseName"
                className="form-control"
                value={props.filter.baseName}
                onChange={event => {
                  let newBaseName = event.target.value;
                  let newFilter = props.filter;
                  newFilter.baseName = newBaseName;

                  props.onFilterChange(newFilter);
                }}/>
            </td>
            <td className="no-show-mobile">
              <input
                type="text"
                id="filter_location"
                name="filter_location"
                className="form-control"
                value={props.filter.location}
                onChange={event => {
                  let newLocation = event.target.value;
                  let newFilter = props.filter;
                  newFilter.location = newLocation;

                  props.onFilterChange(newFilter);
                }}/>
            </td>
            </>}
            <td className="no-show-mobile">
              <button type="button" className="btn btn-warning form-inline m-0" onClick={props.clearFilter}>Clear</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </>
}
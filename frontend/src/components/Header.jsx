import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = props => <>
  <nav className="navbar navbar-dark navbar-expand-md bg-dark">
    <button className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar-supported-content"
      aria-controls="navbar-supported-content"
      aria-expanded="false"
      aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar-supported-content">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item mx-auto">
          <NavLink className="nav-link" activeClassName="text-white font-weight-bold" to="/soldiers">Soldiers</NavLink>
        </li>
        <li className="nav-item mx-auto">
          <NavLink className="nav-link" activeClassName="text-white font-weight-bold" to="/notifications">Notifications</NavLink>
        </li>
          {props.authentication.authLevel > 1 && 
            <li className="nav-item mx-auto">
              <NavLink className="nav-link" activeClassName="text-white font-weight-bold" to="/personnelManagement">Manage Personnel</NavLink>
            </li>}
        <li className="nav-item mx-auto">
          <NavLink className="nav-link" activeClassName="text-white font-weight-bold" to="/profile">Profile</NavLink>
        </li>
          {!props.authentication.identity &&
            <li className="nav-item mx-auto">
              <NavLink className="nav-link" activeClassName="text-white font-weight-bold" to="/identityCheck">Verify Identity</NavLink>
            </li>}
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item nav-link text-white font-weight-bold mx-auto">{props.authentication.username}</li>
        {props.authentication.loggedIn && 
          <li className="nav-item mx-auto">
            <button type="button" className="btn btn-secondary m-0"
              onClick={() => {let newAuth = props.authentication; newAuth.loggedIn = false; props.onAuthChange(newAuth)}}>Sign Out</button>
          </li>
        }
      </ul>
    </div>
  </nav>
</>
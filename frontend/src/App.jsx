import React from 'react';
import axios from 'axios';
import { ResultsTable } from './components/ResultsTable';
import { ResultsFilter } from './components/ResultsFilter';
import { PersonnelManagement } from './components/PersonnelManagement';
import { NotificationPage } from './components/NotificationPage';
import { DocumentSubmission } from './components/DocumentSubmission';
import { InformationRequest } from './components/InformationRequest';

import './style/general.css';
import './style/App.css';

import 'bootstrap';

//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filter: {
        name: "",
        gender: {Male: true, Female: true},
        age: {min: "0", max: "100"},
        branch: 0,
        rank: "",
        location: "",
        baseName: "",
        baseLocation: ""
      }
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle input field state change
  handleChange = (e) => {
    this.setState({number: e.target.value})
  }

  // handle input form submission to backend via POST request
  handleSubmit = (e) => {
    e.preventDefault();
    let prod = this.state.number * this.state.number;
    axios.post('http://localhost:8000/multplynumber', {product: prod}).then(res => {
      console.log(res);
      this.fetchVals();
    });
    this.setState({number: ""});
  }

  // handle intialization and setup of database table, can reinitialize to wipe db
  reset = () => {
    axios.post('http://localhost:8000/reset').then(res => {
      console.log(res);
      this.fetchVals();
    });
  }

  // tell app to fetch values from db on first load (if initialized)
  componentDidMount(){
//    this.fetchVals();
  }

  // fetches vals of db via GET request
  /*
  fetchVals = () => {
    axios.get('http://localhost:8000/values').then(
      res => {
        const values = res.data;
        console.log(values.data);
        this.setState({ values: values.data });
    });
  }
  */

  onFilterChange = newFilter => {
    this.setState({filter: newFilter});
  };

  render() {
    return (
      <div className="App">
        {
        <ResultsTable
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}/>
        }
        {/*
        <PersonnelManagement />
        */}
        {/*
        <NotificationPage />
        */}
        {/*
        <DocumentSubmission/>
        <InformationRequest soldierName="John Smith"></InformationRequest>
        */}
      </div>
    );
  }

}

export default App;

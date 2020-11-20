import React from 'react';
import axios from 'axios';
import './style/general.css';
import './style/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from './routes';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

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
        baseName: ""
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
        <Router>
          <Switch>
            { ROUTES.map((route, index) => <Route exact key={ index } { ...route }></Route>) }
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;

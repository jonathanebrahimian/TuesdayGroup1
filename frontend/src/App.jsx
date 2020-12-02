import React from 'react';
import './style/general.css';
import './style/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { ROUTES } from './routes';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { LoginPage } from './components/LoginPage';
import { Signup } from './components/Signup';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { DocumentSubmission } from './components/DocumentSubmission';
import { Soldiers } from './components/Soldiers';
import { NotificationPage } from './components/NotificationPage';
import { SoldierProfile } from './components/SoldierProfile';
import { PersonnelManagement } from './components/PersonnelManagement';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      authentication: {
        userID: -1,
        username: "",
        loggedIn: false,
        authLevel: 0,
        identity: false,
        relatives: []
      }
    };
  }

  // handle input field state change
  handleChange = (e) => {
    this.setState({number: e.target.value})
  }

  // handle input form submission to backend via POST request
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   let prod = this.state.number * this.state.number;
  //   axios.post('http://localhost:8000/multplynumber', {product: prod}).then(res => {
  //     console.log(res);
  //     this.fetchVals();
  //   });
  //   this.setState({number: ""});
  // }

  // handle intialization and setup of database table, can reinitialize to wipe db
  // reset = () => {
  //   axios.post('http://localhost:8000/reset').then(res => {
  //     console.log(res);
  //     this.fetchVals();
  //   });
  // }

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

  onAuthChange = newAuth => {
    this.setState({authentication: newAuth});
  }

  render() {
    return (
      <div className="App">
        <Router>
          {this.state.authentication.loggedIn && <Header authentication={this.state.authentication} onAuthChange={this.onAuthChange}/>}
          <Switch>
            <Route exact path="/login" render={props => <LoginPage authentication={this.state.authentication} onAuthChange={this.onAuthChange}/>}/>
            <Route exact path="/signup" render={props => <Signup authentication={this.state.authentication} onAuthChange={this.onAuthChange}/>}/>
            <Route exact path="/soldiers/:soldierId"  render={props => <SoldierProfile {...props} authentication={this.state.authentication} onAuthChange={this.onAuthChange}/>}/>
            <Route exact path="/soldiers" render={props => <Soldiers authentication={this.state.authentication} onAuthChange={this.onAuthChange}/>}/>
            <Route exact path="/notifications" render={props => <NotificationPage authentication={this.state.authentication} onAuthChange={this.onAuthChange}/>}/>
            <Route exact path="/personnelManagement" render={props => <PersonnelManagement authentication={this.state.authentication} onAuthChange={this.onAuthChange}/>}/>
            <Route exact path="/identityCheck" render={props => <DocumentSubmission authentication={this.state.authentication} onAuthChange={this.onAuthChange}/>}/>
            <Route exact path="/profile" render={props => <Profile authentication={this.state.authentication} onAuthChange={this.onAuthChange}/>}/>
            <Route exact path="/" render={props => <Home authentication={this.state.authentication} onAuthChange={this.onAuthChange}/>}/>
            { /*ROUTES.map((route, index) => (
              <Route exact key={ index } {...route}></Route>))*/ }
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;

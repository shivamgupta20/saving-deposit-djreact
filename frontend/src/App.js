import React from 'react';
import ListDeposits from './components/listdeposits';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import CreateDeposit from './components/CreateDeposit';
import UpdateDeposit from './components/UpdateDeposit';
import User from './components/user';
import DetailDeposit from './components/detaildeposit';
import './components/Layouts/styling.css';

class App extends React.Component {
  state ={
    buttonVal : "createdeposit"
  } 
    
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/deposit">Saving Deposits</NavLink>
            <NavLink to="/user">User</NavLink>
          </nav>

          <Route path="/" exact render={() => {
            return (<h1>Welcome Home</h1>);
          }} />
          <Route exact  strict path="/deposit" component={ListDeposits} />
          <Route path="/createdeposit" component={CreateDeposit} />
          <Route path="/updatedeposit" component={UpdateDeposit} />
          <Route exact strict path="/deposit/:depositId" component={DetailDeposit} />
          <Route path="/user" component={User} />
        </div>
      </Router>
    );
  }

}

export default App;

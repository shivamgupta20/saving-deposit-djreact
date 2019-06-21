import React from 'react';
import ListDeposits from './components/listdeposits';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import CreateDeposit from './components/CreateDeposit';
import UpdateDeposit from './components/updateDeposit';
import User from './components/user';
import './components/Layouts/styling.css';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>

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
            <Route exact strict path="/deposit" component={ListDeposits} />
            <Route path="/createdeposit" component={CreateDeposit} />
            <Route exact strict path="/deposit/:depositId" component={UpdateDeposit} />
            <Route path="/user" component={User} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
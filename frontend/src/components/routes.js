import React from 'react';
import ListDeposits from './listdeposits';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './login';
import CreateDeposit from './CreateDeposit';
import UpdateDeposit from './updateDeposit';
import DeleteDeposit from './deletedeposit';
import ListUser from './listUser';
import CreateUser from './createUser';
import UpdateUser from './updateUser';
import DeleteUser from './deleteUser';
import './Layouts/styling.css';
import { connect } from 'react-redux';
// import { Tabs, Tab } from 'react-bootstrap';

class Routes extends React.Component {
    render() {///try menu and menu items with link from router dom
        console.log("in routes", this.props.isAuthenticated)
        return (

            < Router >
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink className="navlink-class" to="/">Home</NavLink>
                        <NavLink className="navlink-class" to="/deposit">Saving Deposits</NavLink>
                        <NavLink className="navlink-class" to="/user">User</NavLink>
                        {
                            this.props.isAuthenticated !== null
                                ?
                                <NavLink className="navlink-class allignright" to="/login" >
                                    Logout
                                </NavLink>
                                :
                                <NavLink className="navlink-class allignright" to="/login" >
                                    Login
                                </NavLink>
                        }

                    </nav>
                    <Route path="/" exact render={() => {
                        return (<h1>Welcome Home</h1>);
                    }} />
                    <Route exact strict path="/login" component={Login} />
                    <Route exact strict path="/deposit" component={ListDeposits} />
                    <Route path="/createdeposit" component={CreateDeposit} />
                    <Route exact strict path="/deposit/:depositId" component={UpdateDeposit} />
                    <Route exact strict path="/deldeposit/:depositId" component={DeleteDeposit} />
                    <Route path="/user" component={ListUser} />
                    <Route path="/createuser" component={CreateUser} />
                    <Route path="/deposituser/:userid" component={UpdateUser} />
                    <Route path="/deluser/:userid" component={DeleteUser} />
                </div>
            </Router >

        );
    }
}

const mapStateToProp = state => {
    return {
        isAuthenticated: state.token
    }
}

export default connect(mapStateToProp)(Routes);
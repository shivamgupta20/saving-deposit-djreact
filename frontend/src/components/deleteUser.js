import React from 'react';
import { connect } from 'react-redux';
import { delUser } from '../store/actions/userActions';

class DeleteUser extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userid;
        this.props.delUser(userId);
    }
    render() {
        return (
            <h1>User Deleted</h1>

        )
    }
}

export default connect(null, { delUser })(DeleteUser);
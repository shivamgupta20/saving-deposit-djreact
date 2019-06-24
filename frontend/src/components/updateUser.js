import React from 'react';
import UserForm from './userForm';

class UpdateUser extends React.Component {
    render() {

        return (<div>
            <h1>
                Udate User</h1>
            <UserForm requestType="PUT" userId={this.props.match.params.userid} />
        </div>
        )
    }
}
export default UpdateUser;
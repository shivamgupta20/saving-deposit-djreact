import React from 'react';
import UserForm from './userForm';

class CreateUser extends React.Component {
    render() {
        return (
            <div>
                <h1> inside create user </h1>
                <UserForm requestType="POST" depositId="" />
            </div>
        )

    }
}
export default CreateUser;
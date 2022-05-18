import React from 'react';

function UserList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.userPrivilege}</td>
            </tr>
        </React.Fragment>
    )
}
export default UserList;
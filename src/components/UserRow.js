import React from "react";

function UserRow(props) {
    return (
        <tr>
            <th scope="row">{props.image}</th>
            <td>{props.firstName} {props.lastName}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    );
}

export default UserRow;
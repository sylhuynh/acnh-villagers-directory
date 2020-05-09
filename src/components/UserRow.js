import React from "react";

function UserRow(props) {
    return (
        <tr>
            <th scope="row"><img src= {props.image} alt= {props.name}></img></th>
            <td>{props.name}</td>
            <td>{props.weapon}</td>
            <td>{props.profession}</td>
            <td>{props.affiliation}</td>
        </tr>
    );
}

export default UserRow;
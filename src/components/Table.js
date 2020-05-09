import React from "react";

function Table(props) {
    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Weapon</th>
                    <th scope="col">Profession</th>
                    <th scope="col">Affiliation</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    );
}

export default Table;
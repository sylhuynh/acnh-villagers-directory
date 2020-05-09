import React from "react";

function UserRow({ charactersArray }) {
    return charactersArray.map(character => {
        return (
            <tr key = {character.id}>
                <th scope="row"><img src={character.photoUrl} alt={character.name}></img></th>
                <td>{character.name}</td>
                <td>{character.weapon}</td>
                <td>{character.profession}</td>
                <td>{character.affiliation}</td>
            </tr>
        );
    });
}

export default UserRow;
import React from 'react'
import DeleteButton from './DeleteButton'


const List = (props) => {
    const {players, removeFromDom} = props

    return (
        <table>
            <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    players.map((player, i) => 
                        <tr key={i}>
                            <td>{ player.name }</td>
                            <td>{ player.position }</td>
                            <DeleteButton playerId={player._id} success={() => removeFromDom(player._id)}></DeleteButton>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default List

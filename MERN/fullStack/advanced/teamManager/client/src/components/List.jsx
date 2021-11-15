import React, {useState} from 'react'
import DeleteButton from './DeleteButton'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';


const List = (props) => {
    const { players, removeFromDom } = props
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)

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
                            {/* <td><DeleteButton playerId={player._id} success={() => removeFromDom(player._id)}></DeleteButton></td> */}
                            <td>
                                <Popup trigger={<button>Delete</button>}>
                                    {
                                        close => (
                                            <div>
                                                <p>Are you sure you want to delete {player.name}?</p>
                                                <div>
                                                    <DeleteButton playerId={player._id} success={() => removeFromDom(player._id)}>Yes</DeleteButton>
                                                    <button onClick={close}>No</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </Popup>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default List

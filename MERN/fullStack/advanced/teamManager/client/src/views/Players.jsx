import React, {useState, useEffect} from 'react'
import { Switch, Route, Link, useRouteMatch, useHistory } from 'react-router-dom'
import List from '../components/List'
import Form from '../components/Form'
import axios from 'axios'

const Players = () => {
    const history = useHistory()
    const { url, path } = useRouteMatch()
    const [players, setPlayers] = useState([])
    
    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players', player)
            .then(res => {
                console.log(res.data)
                setPlayers([...players, res.data])
                history.push(`${url}/list`)
            })
            .catch(err => {
                console.log(err.response.data.errors)
            })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(res => {
                setPlayers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId))
    }

    return (
        <>
            <div><Link to={`${url}/list`}>List</Link> | <Link to={`${url}/addplayer`}>Add Player</Link></div>
            <Switch>
                <Route exact path={`${path}/list`}>
                    <List players={players} removeFromDom={removeFromDom}></List>
                </Route>
                <Route exact path={`${path}/addplayer`}>
                    <Form submitProp={createPlayer} ></Form>
                </Route>
            </Switch>
        </>
    )
}

export default Players

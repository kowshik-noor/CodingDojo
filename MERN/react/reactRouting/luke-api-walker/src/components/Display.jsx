import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const Display = () => {
    const { cat, id } = useParams()
    const [thing, setThing] = useState({})
    const [error, setError] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${cat}/${id}`)
            .then(res => {
                setError(false)
                setThing(res.data)
            })
            .catch(err => setError(true))
    }, [id, cat])

    return (
        (!error) ?
            <div>
                <h1>{thing.name}</h1>
                {
                    (cat === 'planets') ?
                        <div>
                            <p><strong>Climate: </strong>{thing.climate}</p>
                            <p><strong>Terrain: </strong>{thing.terrain}</p>
                            <p><strong>Surface Water: </strong>{thing.surface_water}</p>
                            <p><strong>Population: </strong>{thing.population}</p>
                        </div>
                        :
                        <div>
                            <p><strong>Height: </strong>{thing.height} cm</p>
                            <p><strong>Mass: </strong>{thing.mass} kg</p>
                            <p><strong>Hair Color: </strong>{thing.hair_color}</p>
                            <p><strong>Skin Color: </strong>{thing.skin_color}</p>
                        </div>
                }
            </div>
            :
            <div>
                <h1>These aren't the droids you're looking for.</h1>
                <img src="https://imgr.search.brave.com/_UyHsFJ3bdL4KgA1lPEcki8YTZz-vJfNV9NPrN1Uhxk/fit/625/625/ce/1/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JjLzBj/L2ZkL2JjMGNmZGM4/NjEwNzcxN2Y1YjFi/YWUzNDY0NmYyNzI1/LmpwZw" alt="obi wan messiah" />
            </div>
    )
}

export default Display

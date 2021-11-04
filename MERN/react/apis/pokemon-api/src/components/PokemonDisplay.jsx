import React, {useState} from 'react'

const PokemonDisplay = () => {
    const [poke, setPoke] = useState([])

    const getPoke = async (e) => {
        const res = await (await fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")).json()
        console.log(res)
        const pokeList = res.results.map((p) => p.name)
        setPoke(pokeList)
    }
    return (
        <div>
            <button onClick={getPoke}>Fetch Pokemon</button>
            <ul>
                {
                    poke.map((p, i) => 
                        <li key={i}>{p}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default PokemonDisplay

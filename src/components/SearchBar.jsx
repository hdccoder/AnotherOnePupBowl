import { useState } from "react";

const SearchBar = ({allPlayers}) => {
    const [searchPup, setSearchPup] = useState('')

    const filteredPups = allPlayers.filter((puppy) => {
        return puppy.name.indexOf(searchPup) !== -1
    })

    return (
        <div>
           <label>
            <input
                type="text"
                value={searchPup}
                onChange={(event) => {setSearchPup(event.target.value)}}
            />
           </label>
           {
                searchPup.length > 0 ?
                <div>
                    <h2>Viewing {filteredPups.length} of {allPlayers.length}</h2>
                    <ul>
                        {
                            filteredPups.map(() => {
                                return <li key={player.id}>{player.name}</li>
                            })
                        }
                    </ul>
                    </div>
                    :null
           }
        </div>
    )
}

export default SearchBar
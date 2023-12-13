import { useParams, Link} from "react-router-dom"

const SinglePlayer = ({allPlayers, deletePlayer, updatePlayer}) => {

    const params = useParams()
    const id = params.id*1

    const player = allPlayers.find((player) => {
        return player.id === id
    }) 

    if(!player){
        return null
    }

    return (

        <div>
            <h1 className="snglplyr">{player.name}</h1>
            <img className="pup" src={player.imageUrl} />
            <h2>{player.breed}</h2>
            <h3>{player.status}</h3>
            <button onClick={() => {deletePlayer(player)}}>Bye Puppicia</button>
            <br></br>
                <Link className="lnky" to='/allplayers'>
                    Back to Puppy Baes Roster
                </Link>
        </div>
    )



}

export default SinglePlayer
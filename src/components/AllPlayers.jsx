import { Link } from "react-router-dom"


const AllPlayers = ({allPlayers}) => {
    return(
        <div>
          <h1 className="nm1">The Jacksonville Puppies Baes</h1>
          
            {
              allPlayers.map((player) => {
                return (
                    <ul>
                  <li key={player.id}>
                    <Link className="plyz" to={`/allplayers/${player.id}`}>
                        {player.name}
                    </Link>
                    </li>
                    </ul>
                )
              })
            }
         
        </div>
      )
    }

export default AllPlayers
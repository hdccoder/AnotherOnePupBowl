import { useState, useEffect } from 'react'
import axios from 'axios'
import TheHuddle from './components/TheHuddle'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NewPlayerForm from './components/NewPlayerForm'
import SearchBar from './components/SearchBar'
import './App.css'


function App() {
const [allPlayers, setAllPlayers] = useState([])
const [singlePlayer, setSinglePlayer] = useState([])
const navigate = useNavigate()


useEffect(()=> {
  const fetchAllPlayers = async () => {
    const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2310/players')
    console.log(data)
    setAllPlayers(data.data.players)
  }
  fetchAllPlayers()
},[])

  const create = async (newPup) => {
    const {data} = await axios.post("https://fsa-puppy-bowl.herokuapp.com/api/2310/players", newPup)
    setAllPlayers([...allPlayers, data])
    navigate(`/allplayers/${data.id}`)
}

  const deletePlayer = async (player) => {
    await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${player.id}`)
    setAllPlayers(players.filter((_player) => {return_player.id !== player.id}))
    navigate('/allplayers')
  }

  const updatePlayer = async (updatedPlayer) => {
    const {data} = await axios.put(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${updatedPlayer.id}`)
    setAllPlayers(players.map((player) => {return player.id !== data.id ? player : data}))
  }


  return (
    <div>
      <NavBar/>
      
      <Routes>
          <Route path='/' element={<TheHuddle />}/>
          <Route path='/allplayers' element={<AllPlayers allPlayers={allPlayers} />}/>
          <Route path='/allplayers/:id' element={<SinglePlayer allPlayers={allPlayers} deletePlayer={deletePlayer} />}/>
          <Route path='/newplayer' element={<NewPlayerForm />}/>
      </Routes>
      <h3 className='srch'>Search:</h3> 
      <SearchBar allPlayers={allPlayers}/>
     
       </div>
  
  )
}

export default App

import axios from "axios"
import { useState } from "react"

const NewPlayerForm = ({create}) => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newPup = {
            id,
            name,
            breed,
            status
        }
        create(newPup)
        setName('')
        setBreed('')
        setStatus('')

    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Enter Name Here"
                        onChange={(event) => {setName(event.target.value)}}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="breed"
                        value={breed}
                        placeholder="Enter Breed Here"
                        onChange={(event) => {setBreed(event.target.value)}}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="status"
                        value={status}
                        placeholder="Enter Breed Here"
                        onChange={(event) => {setStatus(event.target.value)}}
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>

    )

}

export default NewPlayerForm
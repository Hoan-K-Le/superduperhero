import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SuperheroDetails from '../SuperheroDetails'
import { useNavigate } from 'react-router-dom'
import HeroForm from '../HeroForm'

export default function Superhero() {
  // state to get the bounty
  const [superhero, setSuperhero] = useState({})
  const { id } = useParams()
  const [showForm, setShowForm] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/superhero/${id}`)
      .then(response => {
        console.log(response)
        setSuperhero(response.data)
      })
  }, [id])

  // event handler edit / delete
  const handleSubmit = (e, form, setForm) => {
    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/superhero/${id}`, form)
      .then(response => {
        setSuperhero(response.data)
        setShowForm(false)
      })
  }

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/superhero/${id}`)
      .then(response => {
        navigate('/')
      })
  }

  return (
    <div>
      {showForm ? (
        <HeroForm initialForm={superhero} submitHandler={handleSubmit} />
      ) : (
        <SuperheroDetails superhero={superhero} />
      )}

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'GoBack' : 'Edit ME!'}
      </button>

      {showForm ? <button onClick={handleDelete}>Delete</button> : ''}
    </div>
  )
}

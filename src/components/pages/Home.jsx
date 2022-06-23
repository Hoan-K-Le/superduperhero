import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import HeroForm from '../HeroForm'

const server = process.env.REACT_APP_SERVER_URL

export default function Home() {
  // superhero from backend
  const [superhero, setSuperhero] = useState([])

  useEffect(() => {
    const fetchHero = async () => {
      const response = await axios.get(`${server}/superhero`)
      setSuperhero(response.data)
      console.log(response.data)
    }
    fetchHero()
  }, [])

  const handleSubmit = async (e, form, setForm) => {
    e.preventDefault()
    console.log('the form data is:', form)
    try {
      const response = await axios.post(`${server}/superhero`, form)
      // update the data
      setSuperhero([...superhero, response.data])
      setForm({
        name: '',
        age: 100,
        power: '',
      })
    } catch (err) {
      console.log(err)
    }
  }
  console.log('my server url is', server)
  const heroLinks = superhero.map((hero, idx) => {
    return (
      <div key={`heroKey${idx}`}>
        <Link to={`/superhero/${hero._id}`}>{hero.name}</Link>
      </div>
    )
  })
  return (
    <div>
      <h1>SuperHero: </h1>
      <HeroForm
        submitHandler={handleSubmit}
        initialForm={{
          name: '',
          age: 100,
          power: '',
        }}
      />
      {heroLinks}
    </div>
  )
}

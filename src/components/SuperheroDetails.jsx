import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import SuperheroType from './pages/superherotype'

export default function SuperheroDetails({ superhero }) {
  const { id } = useParams()

  return (
    <div>
      <h2>
        <Link to={`/${id}/superherotype`}>{superhero.name}</Link>
      </h2>
      <p>Age: {superhero.age} years old</p>
      <p>Power: {superhero.power}</p>
      <SuperheroType superhero={superhero} />
    </div>
  )
}

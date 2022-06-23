import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SuperHeroType({ superhero }) {
  const [SuperHeroType, setSuperHeroType] = useState([])
  const { id } = useParams()
  //   useEffect(() => {
  //     const fetchHero = async () => {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_SERVER_URL}/${id}/superherotype`
  //       )
  //       setSuperHeroType(response.data)
  //       console.log(response.data)
  //     }
  //     fetchHero()
  //   }, [])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/${id}/superherotype`)
      .then(response => {
        console.log(response.data)
        setSuperHeroType(response.data)
      })
  }, [id])

  return <div>{superhero.marvel}</div>
}

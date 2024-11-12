import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ coffee }) {
  const { name, image, category, origin, type, rating, popularity } = coffee || {}


  return (
    <Link to={`/coffees/${'id'}`}>
      <div className="card card-compact border shadow-xl rounded-xl overflow-hidden">
        <figure>
          <img className='h-52 rounded-lg' src={image} />
        </figure>
        <div className="card-body ">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <div className='text-xl'>
            <p>Category: {category}</p>
            <p>Origin: {origin}</p>
            <p>Type: {type}</p>
            <p>Popularity: {popularity}</p>
            <p>Rating: {rating}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}



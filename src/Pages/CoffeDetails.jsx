import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CoffeDetails() {
  const { id } = useParams()
  const data = useLoaderData()
  const [coffees, setCoffees] = useState({})

  const {
    name,
    image,
    category,
    origin,
    type,
    rating,
    popularity,
    description,
    nutrition_info,
    making_process
  } = coffees

  useEffect(() => {
    const singleData = data.find(coffee => coffee.id == id)
    setCoffees(singleData)
  }, [id, data])
  return (
    <div>
      <figure>
        <img className='w-2/3 mx-auto rounded-lg' src={image} />
      </figure>
      <div className='flex justify-end'>
        <button className='btn btn-warning'>Add To Dashboard</button>
      </div>
      <div className="card-body ">
        <h2 className="text-4xl font-bold">{name}</h2>
        <p>Description:{description}</p>
        <hr />
        <div className='text-xl'>
          <div className='grid grid-cols-2 space-y-2 mb-2'>
            <p>Category: {category}</p>
            <p>Origin: {origin}</p>
            <p>Type: {type}</p>
            <p>Popularity: {popularity}</p>
            <p>Rating: {rating}</p>
          </div>
          <hr />
          <p>Making_Process: {making_process}</p>

        </div>
      </div>
    </div>

  )
}

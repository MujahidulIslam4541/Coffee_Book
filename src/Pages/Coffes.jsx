import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'

export default function Coffes() {
  const data = useLoaderData()
  const [coffees, setCoffees] = useState(data)

  const handleSort = (SortBy) => {
    if (SortBy === 'popularity') {

      const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
      setCoffees(sorted)

    }
    else if (SortBy === 'rating') {
      const sorted = [...data].sort((a, b) => b.rating - a.rating)
      setCoffees(sorted)

    }
  }
  return (
    <>
      <div className='flex justify-between items-center my-6'>
        <div>
          <h1 className='text-xl font-semibold'>
            Short Coffees; S By Popularity&Rating
          </h1>
        </div>
        <div>
          <button onClick={() => handleSort('popularity')} className='btn btn-warning'>Short By Popularity</button>
          <button onClick={() => handleSort('rating')} className='ml-2 btn btn-warning'>Short By Rating</button>
        </div>
      </div>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
        {
          coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
        }
      </div>
      
    </>
  )
}

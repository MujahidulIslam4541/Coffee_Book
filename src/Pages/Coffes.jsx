import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'

export default function Coffes() {
  const data = useLoaderData()
  const [coffees, setCoffees] = useState([data])

  const handleSort = (SortBy) => {
    if (SortBy === 'Popularity') {

    }
    else if (SortBy === 'rating') {

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
          <button className='btn btn-warning'>Short By Rating</button>
          <button className='ml-2 btn btn-warning'>Short By Popularity</button>
        </div>
      </div>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
        {
          data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
        }
      </div>
    </>
  )
}

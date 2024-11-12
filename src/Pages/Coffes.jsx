import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'

export default function Coffes() {
  const data = useLoaderData()
  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
      {
        data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
      }
    </div>
  )
}

import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Card from './Card'

export default function CoffeeCard() {
    const coffees = useLoaderData()
    const { category } = useParams()
    console.log(coffees)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
    )
}

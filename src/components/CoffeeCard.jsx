import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Card from './Card'

export default function CoffeeCard() {
    const navigate=useNavigate()
    const coffees = useLoaderData()
    const { category } = useParams()

    const [Coffees, setCoffees] = useState([]);

    useEffect(() => {
        if (category) {
            const filterByCategory = [...coffees].filter(
                coffee => coffee.category === category
            )
            setCoffees(filterByCategory)
        }
        else {
            setCoffees(coffees.slice(0, 6))
        }
    }, [coffees, category])


    console.log(coffees)
    return (
        <>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {
                    Coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>

            <button className='btn btn-warning my-4' onClick={()=>navigate('./coffees')}>View More</button>

        </>
    )
}

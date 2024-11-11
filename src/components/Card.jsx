import React from 'react'

export default function Card({ coffee }) {
    const { name, image, category, ingredients, origin, type } = coffee
    return (
        <div>
          <h2>{name}</h2>
        </div>
    )
}

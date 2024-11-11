import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Categories({ categories }) {
    console.log(categories)
    return (
        <div>
            <div role="tablist" className="tabs tabs-bordered">
                {
                    categories.map(category => (

                        <Link key={category.category}
                            to={`/category/${category.category}`} role="tab" className="tab">
                            {category.category}
                        </Link>
                    )
                    )
                }

            </div>
        </div>
    )
}

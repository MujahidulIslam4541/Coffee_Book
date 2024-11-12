import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories({ categories }) {
    console.log(categories)
    return (
        <div>
            <div role="tablist" className="tabs tabs-bordered">
                {
                    categories.map(category => (

                        <NavLink key={category.category}
                            to={`/category/${category.category}`} role="tab"
                            className={({ isActive }) => `tab ${isActive ? 'tab-active' : ''}`}>
                {category.category}
            </NavLink>
            )
            )
                }

        </div>
        </div >
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import ApiData from './api.json'

const Blogs = () => {

  return (
    <>
        {
            ApiData.map ( ( items ) => {
                const { id, name, slug, position } = items
                return (
                    <div key={id}>
                        <h2>
                            <NavLink to={ slug }>{ name }</NavLink>
                        </h2>
                    </div>
                    
                )
            } )
        }
    </>
  )
}

export default Blogs
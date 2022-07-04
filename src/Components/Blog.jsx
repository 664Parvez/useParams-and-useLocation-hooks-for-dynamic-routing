// Use Only UseParam hook

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ApiData from './api.json'

const Blog = () => {

    const { slug } = useParams()

    const [pos, setPos] = useState()
    const [name, setName] = useState ()

    useEffect ( () => {
        ApiData.filter ( (items) => {
                if ( items.slug === slug ) {
                    setPos (items.position)
                    setName (items.name)
                } else {
                    console.error();
                }
        } )
    } )

  return (
    <>
        <h2>{ name }</h2>
        <h5>{ pos }</h5>
    </>
  )
}

export default Blog
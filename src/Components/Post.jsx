// Use useLocation Hook

import React from 'react'
import { useLocation } from 'react-router-dom'

const Post = () => {

    const location = useLocation()

  return (
    <>
      <h2>{ location.state.name }</h2>
      <p>{ location.state.position }</p>
    </>
  )
}

export default Post
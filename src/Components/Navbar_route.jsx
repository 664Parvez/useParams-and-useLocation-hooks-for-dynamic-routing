import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavbarDesign from './NavbarDesign'
import Home from'./Home'

import Blogs from './Blogs'
import Blog from './Blog'

import Posts from './Posts'
import Post from './Post'

const Navbar = () => {
  return (
    <>
        <Router>
            <NavbarDesign />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/blogs' element={ <Blogs /> }></Route>
                <Route path='/blogs/:slug' element={ <Blog /> }></Route>
                <Route path='/posts' element={<Posts />}></Route>
                <Route path='/posts/:slug' element={<Post />}></Route>
            </Routes> 
        </Router>
    </>
  )
}

export default Navbar
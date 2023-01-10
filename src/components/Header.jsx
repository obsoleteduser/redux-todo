import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <div className='Header'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/posts' className='link'>Posts</Link>
        <a href="https://github.com/tahirdibirovresearch/redux-todo.git" target="_blank">Source Code</a>
    </div>
  )
}

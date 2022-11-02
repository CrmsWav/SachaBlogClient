import React from 'react'
import '../styles/components/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='Header'>
      <img src='https://i.imgur.com/3Qq3Y7M.png' alt='logo' />

      <ul>
        <Link to={`/projects`}>
          <li>My projects</li>
        </Link>

        <Link to={`/about`}>
          <li>About me</li>
        </Link>

        <Link to={`/services`}>
          <li>Services</li>
        </Link>

        <Link to={`/contact`}>
          <li>Contact</li>
        </Link>

        <Link to={`/shop`}>
          <li>Market place</li>
        </Link>
      </ul>
    </div>
  )
}

export default Header;

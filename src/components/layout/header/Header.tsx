import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
            <nav className='flex'>
                <div>
                  <Link to='/'>
                    <img src='https://via.placeholder.com/50' alt='logo' />
                  </Link>
                </div>
                <div>
                  <Link to='/'>Home</Link>
                </div>
                <div className='place-self-end'>
                  <Link to='/login'>Login</Link>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header
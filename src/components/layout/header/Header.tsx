import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../container/Container'

const Header = () => {
  return (
    <>
      <header>
        <Container className='mx-auto'>
          <nav className='flex justify-center items-center'>
            <div className='flex lg:flex-1'>
              <Link to='/'>
                <img src='https://via.placeholder.com/50' alt='logo' />
              </Link>
            </div>
            <div className='hidden lg:flex lg:gap-x-12'>
              <Link to='/' className='text-sm font-semibold leading-6 text-gray-900'>
                Home
              </Link>
              <Link to='/flights' className='text-sm font-semibold leading-6 text-gray-900'>
                Flights
              </Link>
              <Link to='/' className='text-sm font-semibold leading-6 text-gray-900'>
                Home
              </Link>
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
              <Link to='/login' className='text-sm font-semibold leading-6 text-gray-900'>
                Login
              </Link>
            </div>
          </nav>
        </Container>
      </header>
    </>
  )
}

export default Header
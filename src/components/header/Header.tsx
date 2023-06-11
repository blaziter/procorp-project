import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../container/Container'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useAppSelector } from '../../app/hooks'

const Header = () => {
  const booking = useAppSelector((state) => state.booking.seats)
  const username = useAppSelector((state) => state.auth.username)
  const loggedIn = useAppSelector((state) => state.auth.loggedIn)

  useEffect(() => {

  }, [])

  return (
    <>
      <header className='bg-white py-2'>
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
              {
                loggedIn &&
                <Link to='/reservations' className='text-sm font-semibold leading-6 text-gray-900'>
                  Reservations
                </Link>
              }
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-8'>
              <Link to='/cart' className='flex flex-row items-center text-sm font-semibold leading-6 text-gray-900'>
                {booking.length} <AiOutlineShoppingCart size={'1.5em'} />
              </Link>
              {
                username ? (
                  <Link to='/reservations' className='text-sm font-semibold leading-6 text-gray-900'>
                    {username}
                  </Link>
                ) : (
                  <Link to='/login' className='text-sm font-semibold leading-6 text-gray-900'>
                    Login
                  </Link>
                )
              }
            </div>
          </nav>
        </Container>
      </header>
    </>
  )
}

export default Header
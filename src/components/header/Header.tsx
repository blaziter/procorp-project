import { Link } from 'react-router-dom'
import Container from '../container/Container'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useAppSelector } from '../../app/hooks'
import { BiMenu } from 'react-icons/bi'
import { useState } from 'react'

const Header = () => {
  const booking = useAppSelector((state) => state.booking.seats)
  const username = useAppSelector((state) => state.auth.username)
  const loggedIn = useAppSelector((state) => state.auth.loggedIn)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <header className='bg-white py-2'>
        <Container className='mx-auto'>
          <nav className='flex justify-center items-center mx-4'>
            <div className='flex lg:flex-1'>
              <Link to='/'>
                <img src='https://via.placeholder.com/50' alt='logo' />
              </Link>
            </div>
            <div className='flex-1 lg:hidden'>
              <BiMenu size={'3rem'} className='float-right' onClick={() => setOpen(!open)} />
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
      <div className={`w-full bg-white duration-200 ease-in-out origin-top ${open ? 'scale-y-100' : 'scale-y-0 max-h-0'}`}>
        <div className='flex flex-col'>
          <Link to='/' className='text-sm font-semibold leading-6 text-gray-900 h-10 flex items-center justify-center'>
            Home
          </Link>
          <Link to='/flights' className='text-sm font-semibold leading-6 text-gray-900 h-10 flex items-center justify-center'>
            Flights
          </Link>
          {
            loggedIn &&
            <Link to='/reservations' className='text-sm font-semibold leading-6 text-gray-900 h-10 flex items-center justify-center'>
              Reservations
            </Link>
          }
          <Link to='/cart' className='flex flex-row items-center text-sm font-semibold leading-6 text-gray-900 h-10 justify-center'>
            {booking.length} <AiOutlineShoppingCart size={'1.5em'} />
          </Link>
          {
            username ? (
              <Link to='/reservations' className='text-sm font-semibold leading-6 text-gray-900 h-10 flex items-center justify-center'>
                {username}
              </Link>
            ) : (
              <Link to='/login' className='text-sm font-semibold leading-6 text-gray-900 h-10 flex items-center justify-center'>
                Login
              </Link>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Header
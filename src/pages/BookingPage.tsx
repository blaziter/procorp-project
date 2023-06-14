import React, { useRef, useState } from 'react'
import Container from '../components/container/Container'
import BookingCard from '../components/bookingCard/BookingCard'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Link, Navigate } from 'react-router-dom'
import { addReservation } from '../features/reservationSlice'
import { removeAllSeats } from '../features/bookingSlice'
import { takeSeat } from '../features/flightSlice'
import Booker from '../types/Booker'
import { DateNow } from '../hooks/DateNow'

const BookingPage = () => {
  const loggedIn = useAppSelector((state) => state.auth.loggedIn)
  const booked = useAppSelector((state) => state.booking.seats)
  const [redir, setRedir] = useState<boolean>()
  const dispatch = useAppDispatch();
  const MOCK_BOOKER_KEY = -999;
  const [reservations, setReservations] = useState<Booker[]>([
    {
      id: MOCK_BOOKER_KEY,
      createdAt: new Date().toISOString(),
      flightId: 0,
      seatId: 0,
      adult: false,
      name: '',
      surname: '',
      gender: 'male',
      citizenship: 'cz',
      birthday: DateNow(),
    }
  ])
  const [valid, setValid] = useState<boolean>()
  const formRef = useRef<HTMLFormElement>(null);

  const reserveFlights = (e: React.FormEvent) => {
    e.preventDefault()

    if (reservations.length < 1) return setValid(false);
    reservations.map(reservation =>
      reservation.name == '' ||
        reservation.surname == '' ||
        reservation.id == MOCK_BOOKER_KEY && (
          reservation.state == undefined ||
          reservation.email == undefined ||
          reservation.phone == undefined ||
          reservation.street == undefined ||
          reservation.city == undefined ||
          reservation.zip == undefined
        ) ? setValid(false) : setValid(true))
    if (!valid) return;

    const excludeBooker = reservations.filter(reservation => reservation.id !== MOCK_BOOKER_KEY)
    dispatch(addReservation(excludeBooker))
    dispatch(removeAllSeats())
    booked.map(book => dispatch(takeSeat({ flightId: book.flightId, seatId: book.seatId, take: true })))
    setRedir(true)
  }

  return (
    <>
      {redir && <Navigate to={'/reservations'} />}
      <Container className='mx-auto'>
        <div className='bg-white shadow-xl p-8 mt-8 mb-4 grid grid-rows-2 font-semibold leading-6'>
          <h1 className='text-center text-gray-900'>My flights</h1>
          {
            valid == false && (
              <h2 className='text-center text-red-600'>Missing values!</h2>
            )
          }
          {
            loggedIn ?
              booked.length > 0 &&
              <button type='submit' className='bg-cyan-500 p-2 rounded hover:bg-cyan-300 transition-all float-right justify-self-end' onClick={() => formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}>Reserve</button>
              :
              <Link to='/login' className='bg-cyan-500 p-2 rounded hover:bg-cyan-300 transition-all float-right justify-self-end'>Proceed</Link>
          }
        </div>
        <form ref={formRef} onSubmit={(e) => reserveFlights(e)}>
          <div className='grid lg:grid-cols-2 py-8'>
            {
              booked.map((book, key) => {
                return <BookingCard
                  key={key}
                  id={key}
                  {...book}
                  reservations={reservations}
                  setReservations={setReservations}
                />
              })
            }
          </div>
          <BookingCard id={MOCK_BOOKER_KEY} type='booker' reservations={reservations} setReservations={setReservations} />
        </form>
      </Container>
    </>
  )
}

export default BookingPage
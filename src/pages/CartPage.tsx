import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { FlightsState } from '../features/flightSlice'
import FlightCard from '../components/flightCard/FlightCard'
import Container from '../components/container/Container'
import Seat from '../types/Seats'

const CartPage = () => {
  const booked = useAppSelector(state => state.booking.seats)
  const flights = useAppSelector(state => state.flights)
  const [filteredFlights, setFilteredFlights] = useState<FlightsState[]>([])
  const loggedIn = useAppSelector(state => state.auth.loggedIn)

  useEffect(() => {
    let seats: FlightsState[] = [];
    if (booked.length === 0) return setFilteredFlights([])
    booked.map((book, key) => {
      seats.push(flights[flights.findIndex(flight => flight.id == book.flightId)]!)
    })
    setFilteredFlights([...new Set(seats)])
  }, [booked])

  return (
    <>
      <Container className='mx-auto'>
        <div>
          <div className='bg-white shadow-xl p-8 mt-8 mb-4 grid grid-rows-2 font-semibold leading-6 text-gray-900'>
            <h1 className='text-center'>My flights</h1>
            {
              loggedIn ?
                booked.length > 0 &&
                <Link to='proceed' className='bg-cyan-500 p-2 rounded hover:bg-cyan-300 transition-all float-right justify-self-end'>Proceed</Link>
                :
                <Link to='/login' className='bg-cyan-500 p-2 rounded hover:bg-cyan-300 transition-all float-right justify-self-end'>Proceed</Link>
            }
          </div>
          <div className='p-4'>
            <div className='lg:grid lg:grid-cols-2'>
              {
                filteredFlights.map((flight, key) => {
                  const bookedSeats = booked.filter(book => book.flightId == flight.id).map(book => book.seatId).map(seat => flight.seats?.filter(flightSeat => flightSeat.id == seat))
                  const result: Seat[] = []
                  bookedSeats.forEach(seat => result.push(...seat!))
                  return <FlightCard
                    key={key}
                    id={flight.id}
                    from={flight.from}
                    to={flight.to}
                    departure={flight.departure}
                    arrival={flight.arrival}
                    duration={flight.duration}
                    price={flight.price}
                    seats={result}
                  />
                })
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CartPage
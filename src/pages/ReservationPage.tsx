import { useAppSelector } from '../app/hooks'
import FlightCard from '../components/flightCard/FlightCard'
import Seat from '../types/Seats'
import Container from '../components/container/Container'

const ReservationPage = () => {
  const reservations = useAppSelector(state => state.reservation)
  const flights = useAppSelector(state => state.flights)

  return (
    <>
      <Container className='mx-auto'>
        <div className="grid grid-cols-2">
          {
            reservations.map((reservation, key) => {
              const bookedSeats: Seat[] = []
              bookedSeats.push(flights.find(flight => flight.id == reservation.flightId)?.seats?.find(seat => seat.id == reservation.seatId) as Seat)
              return <FlightCard
                key={key}
                from={flights.find(flight => flight.id == reservation.flightId)!.from}
                to={flights.find(flight => flight.id == reservation.flightId)!.to}
                departure={flights.find(flight => flight.id == reservation.flightId)!.departure}
                arrival={flights.find(flight => flight.id == reservation.flightId)!.arrival}
                duration={flights.find(flight => flight.id == reservation.flightId)!.duration}
                price={flights.find(flight => flight.id == reservation.flightId)!.price}
                seats={bookedSeats}
              />
            })
          }
        </div>
      </Container>
    </>
  )
}

export default ReservationPage
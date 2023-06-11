import React from 'react'
import { useAppSelector } from '../app/hooks'
import FlightCard from '../components/flightCard/FlightCard'
import Container from '../components/container/Container'
import Search from '../components/search/Search'

const FlightsPage = () => {
  const flights = useAppSelector((state) => state.flights)

  return (
    <>
      <Container className='mx-auto'>
        <div className="flex gap-4 mt-4">
          <Search />
          <div className='flex-1'>
            {
              flights.map((flight, key) => {
                return (
                  <FlightCard
                    key={key}
                    id={flight.id}
                    from={flight.from}
                    to={flight.to}
                    departure={flight.departure}
                    arrival={flight.arrival}
                    duration={flight.duration}
                    price={flight.price}
                    seats={flight.seats}
                  />
                )
              })
            }
          </div>
        </div>
      </Container>
    </>
  )
}

export default FlightsPage
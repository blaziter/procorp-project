import { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import FlightCard from '../components/flightCard/FlightCard'
import Container from '../components/container/Container'
import Search from '../components/search/Search'
import { SearchParameters } from '../types/SearchParameters'
import { FlightsState } from '../features/flightSlice'
import { FormatDate } from '../hooks/FormatDate'

const FlightsPage = () => {
  const flights = useAppSelector((state) => state.flights)
  const [filter, setFilter] = useState<FlightsState[]>([]);
  const [find, setFind] = useState<boolean>(true)

  const handleSearch = (searchParameters: SearchParameters) => {
    const temp: FlightsState[] = []
    flights.filter(flight => {
      if (flight.from?.includes(searchParameters.from!) && flight.to?.includes(searchParameters.to!) && flight.price! <= searchParameters.price! && flight.departure! > searchParameters.when!) temp.push(flight)
    })
    temp.length > 0 ? setFind(true) : setFind(false)
    setFilter(temp)
  }

  return (
    <>
      <Container className='mx-auto'>
        <div className="flex gap-4 mt-4">
          <Search onClick={handleSearch} message={find ? true : false} />
          <div className='flex-1'>
            {
              filter.length > 0 ? 
              filter.map((flight, key) => {
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
              :
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
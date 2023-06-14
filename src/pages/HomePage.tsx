import Container from '../components/container/Container'
import { useAppSelector } from '../app/hooks'
import FlightCard from '../components/flightCard/FlightCard'

const HomePage = () => {
    const flights = useAppSelector((state) => state.flights)
    return (
        <>
            <Container className='mx-auto'>
                <div className='lg:grid lg:grid-cols-2'>
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
            </Container>
        </>
    )
}

export default HomePage
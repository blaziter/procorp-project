import React, { useEffect } from 'react'
import Card from '../components/flightCard/FlightCard'
import Container from '../components/container/Container'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { takeSeat } from '../features/flightSlice'

const HomePage = () => {
    const dispatch = useAppDispatch()
    const flights = useAppSelector((state) => state.flights)

    const click = () => {
        dispatch(takeSeat([1, 1, true]))
    }

    useEffect(() => {
        click()
    }, [])

    return (
        <>
            <Container className='mx-auto'>
                <div className='grid grid-cols-2'>
                    {
                        flights.map((flight, key) => {
                            return (
                                <Card
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
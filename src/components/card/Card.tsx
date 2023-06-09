import React, { useEffect, useState } from 'react'
import FlightsProps from '../../types/Flights'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { TbPlaneArrival, TbPlaneDeparture, TbPlaneInflight } from 'react-icons/tb'
import { GiPriceTag } from 'react-icons/gi'
import { FormatDate } from '../../hooks/FormatDate'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addSeat, removeSeat } from '../../features/bookingSlice'
import Booking from '../../types/Booking'

type CardProps = Omit<FlightsProps, 'children'>

const Card = (props: CardProps) => {
    const dispatch = useAppDispatch()
    const booked = useAppSelector((state) => state.booking.seats)
    const [seats, setSeats] = useState<Booking[]>([])

    const setSeat = (args: Booking) => {
        let deleteElement = booked.find(deleted => args.flightId == deleted.flightId && deleted.seatId == args.seatId)
        if (booked.find(deleted => args.flightId == deleted.flightId && deleted.seatId == args.seatId)) {
            deleteSeat(deleteElement!)
        } else {
            setSeats([...seats, args])
            dispatch(addSeat([args]))
        }
    }

    const deleteSeat = (args: Booking) => {
        dispatch(removeSeat(args))
        setSeats([...seats.filter(seat => args.flightId !== seat.flightId && args.seatId !== seat.seatId)])
    }

    useEffect(() => {
        console.log(booked)
    }, [])

    return (
        <>
            <div className='rounded-xl p-4 m-6 shadow-lg'>
                <div className="card-title">
                    <h1 className='text-2xl font-bold flex items-center justify-center'>
                        <TbPlaneInflight className='text-cyan-500' />
                        {props.from} - {props.to}
                    </h1>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='grid grid-cols-2 grid-rows-2'>
                        {
                            props.seats?.map((seat, key) => {
                                return (
                                    <div key={key} className='flex flex-row items-center justify-evenly'>
                                        <p className='text-gray-600'>Seat: {seat.number}</p>
                                        <input
                                            onClick={() => { setSeat({flightId: props.id, seatId: seat.id}) }}
                                            type="checkbox"
                                            name={seat.number}
                                            className='mr-2 w-10 h-10 accent-cyan-500 checked:text-blue:500 hover:cursor-pointer disabled:cursor-default'
                                            disabled={seat.available}
                                            checked={booked.map(book => book.flightId === props.id && book.seatId === seat.id).includes(true) ? true : seat.available ? true : undefined}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="grid grid-rows-2 grid-cols-2">
                        <div className='text-gray-600 flex flex-col'>
                            <TbPlaneDeparture size={'1.5em'} className='text-cyan-500' />
                            <p>Departure:</p>
                            <p>{FormatDate(props.departure as string)}</p>
                        </div>
                        <div className='text-gray-600 flex flex-col'>
                            <TbPlaneArrival size={'1.5em'} className='text-cyan-500' />
                            <p>Arrival:</p>
                            <p>{FormatDate(props.arrival as string)}</p>
                        </div>
                        <div className='text-gray-600 flex flex-col'>
                            <AiOutlineClockCircle size={'1.5em'} className='text-cyan-500' />
                            <p>Duration:</p>
                            <p>{props.duration}</p>
                        </div>
                        <div className='text-gray-600 flex flex-col'>
                            <GiPriceTag size={'1.5em'} className='text-cyan-500' />
                            <p>Price:</p>
                            <p>{props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
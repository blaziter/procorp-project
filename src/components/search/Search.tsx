import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'

const Search = () => {
    const flights = useAppSelector((state) => state.flights)
    const uniqueSourceFlights = [...new Set(flights.map((flight) => flight.from))]
    const uniqueDestinationFlights = [...new Set(flights.map((flight) => flight.to))]
    const [min, setMin] = useState<number>()
    const [max, setMax] = useState<number>()
    const sourceRef = React.createRef<HTMLSelectElement>()
    const destinRef = React.createRef<HTMLSelectElement>()
    const dateRef = React.createRef<HTMLInputElement>()
    const priceRef = React.createRef<HTMLInputElement>()

    const minMax = () => {
        let min = 1000
        let max = 0
        flights.map((flight) => {
            if (flight.price! < min) {
                min = flight.price!
            }
            if (flight.price! > max) {
                max = flight.price!
            }
        })
        return [min, max]
    }

    useEffect(() => {
        const [min, max] = minMax()
        setMin(min)
        setMax(max)
        console.log()
    }, [])

    return (
        <>
            <div className='flex flex-col gap-8 w-1/5 p-4 shadow-2xl bg-white my-6'>
                <div className='flex flex-col'>
                    <label>From</label>
                    <select className='flex-1' ref={sourceRef}>
                        {
                            uniqueSourceFlights.map((from, key) => {
                                return (
                                    <option key={key} value={from}>{from}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label>To</label>
                    <select ref={destinRef}>
                        {
                            uniqueDestinationFlights.map((dest, key) => {
                                return (
                                    <option key={key} value={dest}>{dest}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label>When</label>
                    <input type="date" defaultValue={new Date().toISOString().split('T')[0]} ref={dateRef} />
                </div>
                <div className='flex flex-col'>
                    <label>Price</label>
                    <div className="flex flex-col">
                        <input type="range" defaultValue={0} min={min} max={max} ref={priceRef} />
                        <div className="flex flex-row justify-between">
                        <span>{min}</span>
                        <span>{max}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='bg-cyan-500 p-2 rounded w-20 hover:bg-cyan-300 transition-all float-right'>Search</button>
                </div>
            </div>
        </>
    )
}

export default Search
import React from 'react'
import { useAppSelector } from '../../app/hooks'

const Search = () => {
    const flights = useAppSelector((state) => state.flights)
    const uniqueSourceFlights = [...new Set(flights.map((flight) => flight.from))]
    const uniqueDestinationFlights = [...new Set(flights.map((flight) => flight.to))]

    return (
        <>
            <div className='flex flex-col gap-8 w-1/6'>
                <div className='flex flex-col'>
                    <label>From</label>
                    <select className='flex-1'>
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
                    <select>
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
                    <input type="date" />
                </div>
                <div className='flex flex-col'>
                    <label>Price</label>
                    <input type="range" min={0} max={100} />
                </div>
                <div>
                    <button className='float-right bg-cyan-500 hover:bg-cyan-300 p-2 w-20 transition-all text-sm font-semibold leading-6 text-gray-200'>Search</button>
                </div>
            </div>
        </>
    )
}

export default Search
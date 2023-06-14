import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { DateNow } from '../../hooks/DateNow'
import { SearchParameters } from '../../types/SearchParameters'

interface Props {
    onClick: (searchParameters: SearchParameters) => void,
    message: boolean
}

const Search = (props: Props) => {
    const flights = useAppSelector((state) => state.flights)
    const uniqueSourceFlights = [...new Set(flights.map((flight) => flight.from))]
    const uniqueDestinationFlights = [...new Set(flights.map((flight) => flight.to))]
    const [min, setMin] = useState<number>()
    const [max, setMax] = useState<number>()
    const [parameters, setParameters] = useState<SearchParameters>({
        from: 'Prague',
        to: 'London',
        when: DateNow(),
        price: min!
    })

    const minMaxValues = () => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
        console.log('changing' + e.target.value)
        setParameters({ ...parameters, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const [min, max] = minMaxValues()
        setParameters({ ...parameters, price: min})
        setMin(min)
        setMax(max)
    }, [min])

    return (
        <>
            <div className='flex flex-col gap-8 w-1/5 p-4 shadow-2xl bg-white my-6'>
                <div className='flex flex-col'>
                    <label className='font-semibold leading-6 text-gray-900'>From</label>
                    <select className='flex-1' name='from' onChange={handleChange}>
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
                    <label className='font-semibold leading-6 text-gray-900'>To</label>
                    <select name='to' onChange={handleChange}>
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
                    <label className='font-semibold leading-6 text-gray-900'>When</label>
                    <input type="date" name='when' defaultValue={DateNow()} onChange={handleChange} />
                </div>
                <div className='flex flex-col'>
                    <label className='font-semibold leading-6 text-gray-900'>Price</label>
                    <div className="flex flex-col">
                        <input type="range" name='price' defaultValue={0} min={min} max={max} onChange={handleChange} />
                        <div className="flex flex-row justify-between">
                            <span className='font-semibold leading-6 text-gray-900'>{min}</span>
                            <span className='font-semibold leading-6 text-gray-900'>{max}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='bg-cyan-500 p-2 rounded w-20 hover:bg-cyan-300 transition-all float-right font-semibold leading-6 text-gray-900' onClick={() => props.onClick(parameters)}>Search</button>
                </div>
                {
                    !props.message ? <p className='text-red-500 text-center font-semibold leading-6'>No flights found with parameters!</p> : <></>
                }
            </div>
        </>
    )
}

export default Search
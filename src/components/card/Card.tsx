import React from 'react'
import FlightsProps from '../../types/Flights'

const Card = (props: FlightsProps) => {
    return (
        <>
            <div className='rounded-xl p-4 shadow-lg'>
                <div className="card-title">
                    <h1 className='text-2xl font-bold'>{props.title}</h1>
                </div>
                <div className="card-body">
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
            </div>
        </>
    )
}

export default Card
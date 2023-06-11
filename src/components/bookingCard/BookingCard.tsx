import React, { useEffect } from 'react'
import FlightsProps from '../../types/Flights'

type Props = Omit<FlightsProps, 'children'>

const BookingCard = (props: Props) => {

    useEffect(() => console.log(props))

  return (
    <div>BookingCard</div>
  )
}

export default BookingCard
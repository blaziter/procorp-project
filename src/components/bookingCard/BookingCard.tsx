import React from 'react'
import FlightsProps from '../../types/Flights'
import { DateNow } from '../../hooks/DateNow'
import Reservation from '../../types/Reservation';

type Props = Omit<FlightsProps, 'children'>

interface BookingProps extends Props {
  id: number;
  flightId?: number;
  seatId?: number;
  type?: string;
  reservations: Reservation[]
  setReservations: React.Dispatch<React.SetStateAction<Reservation[]>>;
}

const BookingCard = (props: BookingProps) => {
  const updateState = (e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    if (!props.reservations.find(reservation => reservation.id == props.id)) {
      props.setReservations(prevState => [
        {
          id: props.id,
          createdAt: new Date().toISOString(),
          flightId: props.flightId,
          seatId: props.seatId,
          adult: false,
          name: '',
          surname: '',
          gender: 'male',
          citizenship: 'cz',
          birthday: DateNow(),
          [e.target.name]: e.target.name == 'adult' ? e.target.checked : e.target.value },
        ...prevState
      ])
    } else {
      props.setReservations([...props.reservations].map(reservation => {
        if (reservation.id === props.id) {
          return {
            ...reservation,
            [e.target.name]: e.target.name == 'adult' ? e.target.checked : e.target.value
          }
        } else return reservation
      }) as Reservation[])
    }
  }

  return (
    <>
      <div className='bg-white p-4'>
        <div className='p-4 flex flex-col gap-4'>
          {props.type == 'booker' && <h1 className='text-2xl font-bold'>Booker</h1>}
          {
            !props.type && (
              <div className='flex items-center'>
                <input type="checkbox" className='mr-2 w-5 h-5 accent-cyan-500 checked:text-blue:500 hover:cursor-pointer disabled:cursor-default' onChange={updateState} name='adult' /> Adult
              </div>
            )
          }
        </div>
        <div className='grid grid-cols-2 p-4 gap-4'>
          <div className='grid grid-rows-2'>
            Name
            <input className='p-2 border-solid border-2 border-cyan-600' type="text" name='name' placeholder='name' onChange={updateState} />
          </div>
          <div className='grid grid-rows-2'>
            Surname
            <input className='p-2 border-solid border-2 border-cyan-600' type="text" name='surname' placeholder='surname' onChange={updateState} />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-8 p-4'>
          <div>
            <p className='pr-4'>Gender</p>
            <select className='p-2 border-solid border-2 border-cyan-600' onChange={updateState} name='gender'>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <p className='pr-4'>Citizenship</p>
            <select className='p-2 border-solid border-2 border-cyan-600' onChange={updateState} name='citizenship'>
              <option value="cz">cz</option>
              <option value="us">us</option>
              <option value="de">de</option>
              <option value="uk">uk</option>
            </select>
          </div>
          {
            props.type == 'booker' &&
            <div>
              <p className="pr-4">Birthday</p>
              <input className='p-2 border-solid border-2 border-cyan-600' type='date' name='birthday' defaultValue={DateNow()} max={DateNow()} onChange={updateState} />
            </div>
          }
        </div>
        {
          props.type == 'booker' && (
            <div className='grid grid-cols-3 grid-rows-2 gap-8 p-4'>
              <div>
                <p className='pr-4'>State</p>
                <input className='p-2 border-solid border-2 border-cyan-600' type="text" name='state' placeholder='State' onChange={updateState} />
              </div>
              <div>
                <p className='pr-4'>Email</p>
                <input className='p-2 border-solid border-2 border-cyan-600' type="email" name='email' placeholder='Email' onChange={updateState} />
              </div>
              <div>
                <p className='pr-4'>Phone</p>
                <input className='p-2 border-solid border-2 border-cyan-600' type="tel" name='phone' placeholder='Phone' onChange={updateState} />
              </div>
              <div>
                <p className='pr-4'>Street</p>
                <input className='p-2 border-solid border-2 border-cyan-600' type="text" name='street' placeholder='Street' onChange={updateState} />
              </div>
              <div>
                <p className='pr-4'>City</p>
                <input className='p-2 border-solid border-2 border-cyan-600' type="text" name='city' placeholder='City' onChange={updateState} />
              </div>
              <div>
                <p className='pr-4'>ZIP</p>
                <input className='p-2 border-solid border-2 border-cyan-600' type="text" name='zip' placeholder='ZIP' onChange={updateState} />
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default BookingCard
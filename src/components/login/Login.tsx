import React, { useEffect, useRef } from 'react'
import Container from '../container/Container'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setLoggedIn, setRole } from '../../features/authSlice'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useAppDispatch()
  const logged = useAppSelector((state) => state.auth.loggedIn)
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const inputClass = 'login-input w-full h-ful px-4 py-4 pt-8';

  const click = () => {
    if (usernameRef.current && passwordRef.current) {
      dispatch(setLoggedIn([usernameRef.current.value, true]))
      dispatch(setRole('user'))

    }
  }

  const change = () => {
    const username = usernameRef.current
    const password = passwordRef.current
    username!.value == '' ? username?.classList.remove('login--non-empty') : username?.classList.add('login--non-empty')
    password!.value == '' ? password?.classList.remove('login--non-empty') : password?.classList.add('login--non-empty')
  }

  useEffect(() => {
    usernameRef.current?.focus()
    passwordRef.current?.focus()
  },[])

  return (
    <>
      {logged && <Navigate to='/' />}
      <Container className='mx-auto flex justify-center my-32'>
          <div className="flex rounded-xl flex-col justify-center items-center w-1/4 py-5 gap-8 bg-white shadow-xl">
            <div className="input-animation flex-1">
              <input onChange={change} className={inputClass} ref={usernameRef} />
              <label className='login-placeholder absolute left-1/2 my-8 -mx-24 pointer-events-none select-none'>Username</label>
              <span className='login-title absolute -mx-52 pointer-events-none select-none'>Username</span>
            </div>
            <div className="input-animation flex-1">
              <input onChange={change} className={inputClass} ref={passwordRef} />
              <label className='login-placeholder absolute left-1/2 my-8 -mx-24 pointer-events-none select-none'>Password</label>
              <span className='login-title absolute -mx-52 pointer-events-none select-none'>Password</span>
            </div>
            <button onClick={click} className='bg-cyan-500 p-2 rounded w-20 hover:bg-cyan-300 transition-all'>Login</button>
          </div>
      </Container>
    </>
  )
}

export default Login
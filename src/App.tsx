import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'

import './App.css'
import Login from './components/login/Login'
import { BookingPage, CartPage, FlightsPage, ReservationPage } from './pages/Pages'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='login' element={<Login />} />
        <Route path='flights' element={<FlightsPage />} />
        <Route path='reservations' element={<ReservationPage />} />
        <Route path='cart'>
          <Route path='' element={<CartPage />} />
          <Route path='proceed' element={<BookingPage />} />
        </Route>
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </Layout>
  )
}

export default App

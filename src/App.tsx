import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'

import './App.css'
import ReservationPage from './pages/ReservationPage'
import FlightsPage from './pages/FlightsPage'
import Login from './components/login/Login'
import CartPage from './pages/CartPage'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='login' element={<Login />} />
        <Route path='flights' element={<FlightsPage />} />
        <Route path='reservations' element={<ReservationPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </Layout>
  )
}

export default App

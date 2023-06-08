import { createContext, useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'

import './App.css'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </Layout>
  )
}

export default App

import React from 'react'
import Container from '../container/Container'

const Footer = () => {
  return (
    <>
        <footer>
            <Container className='mx-auto'>
            <p className='text-center text-sm font-semibold leading-6 text-gray-900'>
                &copy; 2021
            </p>
            </Container>
        </footer>
    </>
  )
}

export default Footer
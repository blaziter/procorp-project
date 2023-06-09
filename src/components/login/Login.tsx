import React from 'react'
import Container from '../container/Container'

const Login = () => {
  return (
    <>
        <Container className='mx-auto'>
            <div className="rounded-xl">
                <div className="flex flex-col justify-center items-center">
                  <input type="text" />
                  <input type="text" />
                  <button>Login</button>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Login
import React from 'react'
import Card from '../components/card/Card'
import Container from '../components/container/Container'

const HomePage = () => {
    return (
        <>
            <Container className='mx-auto'>
                <Card 
                    title='Card Title'
                />
            </Container>
        </>
    )
}

export default HomePage
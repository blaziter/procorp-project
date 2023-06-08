import React from 'react'
import Header from './header/Header'
import Footer from '../footer/Footer'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            <Header />
            {
                props.children
            }
            <Footer />
        </>
    )
}

export default Layout
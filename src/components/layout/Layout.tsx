import React from 'react'
import Header from '../../header/Header'
import Footer from '../footer/Footer'
import Props from '../../types/Props'

interface LayoutProps extends Props {
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
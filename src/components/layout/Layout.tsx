import Header from '../header/Header'
import Footer from '../footer/Footer'
import Props from '../../types/Props'

interface LayoutProps extends Props {
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            <Header />
            <div className='min-h-screen'>
                {
                    props.children
                }
            </div>
            <Footer />
        </>
    )
}

export default Layout
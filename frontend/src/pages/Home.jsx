import { Fragment } from 'react'
import CallToAction from '../components/Body'


import Header from '../components/Header'

const Home = () => {
    return (
        <Fragment>
            <div className='header'>
                <Header />
                <CallToAction />
            </div>
        </Fragment>
        
    )
}

export default Home
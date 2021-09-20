import React from 'react'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import Navbar from '../components/Navbar/Navbar.Component'

function DefaultLayout(props) {
    return (
        <div>
            <Navbar />
            <HeroCarousel />
            {props.children}

            {console.log(props.children)}
            <div className="footer">This is footer</div>
        </div>
    )
}

export default DefaultLayout

import React from 'react'
import EntertainmentCardSlider from '../components/Entertainment/Entertainment.Component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import Navbar from '../components/Navbar/Navbar.Component'

function DefaultLayout(props) {
    return (
        <div>
            <Navbar />

            {props.children}

            {console.log(props.children)}
            <div className="footer">This is footer</div>
        </div>
    )
}

export default DefaultLayout

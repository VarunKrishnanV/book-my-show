import React from 'react'
import EntertainmentCardSlider from '../components/Entertainment/Entertainment.Component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'

function HomePage() {
    return (
        <>
        <HeroCarousel />
            <div className="container mx-auto">
                <PosterSlider />
                <div className="container mx-auto my-20 px-4">
                    <h1 className="text-2xl font-bold text-gray-800 my-3">
                        The best of Entertainments
                    </h1>
                    <EntertainmentCardSlider />
                </div>
            </div></>
    )
}

export default HomePage

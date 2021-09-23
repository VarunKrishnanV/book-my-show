import React from 'react'
import Slider from 'react-slick'
import Poster from '../Poster/Poster.Component';



const PosterSlider = (props) => {



    const settings = {
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slideToScroll: 2,
                    infinte: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slideToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                }
            },
        ]

    }

    const {posters, title, subtitle, isDark, config} = props;


    // if we pass the slider setting that setting will apply to the slider. else the style that are currently there in this file will apply
    const currentSettings = config ? config : settings;
    

    return (
        <>
            <div className="container px-4 flex flex-col my-10">
                <h3 className={`text-2xl font-bold md:px-3 p-1 ${isDark ? "text-white" : "text-gray-800" } `}>{title}</h3>
                <p className={`text-sm md:px-3 p-1 ${isDark ? "text-white" : "text-gray-800"}`}>{subtitle}</p>
                <Slider {...currentSettings} className="mt-4">
                    {posters.map((each) => {
                        return <Poster {...each} isDark={isDark} />
                    })}
                </Slider>
            </div>
        </>
    )
}

export default PosterSlider

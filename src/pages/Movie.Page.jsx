import React from 'react'
import MovieHero from '../components/MovieHero/MovieHero.Component'
import { FaCcApplePay, FaCcVisa } from 'react-icons/fa'
import Slider from 'react-slick'
import Cast from '../components/Cast/Cast.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'

function MoviePage() {

    const similarMovies = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
    ]

    const cast = [
        {
            profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg",
            original_name: "Ben Affleck",
            character: "as Batman/ Bruce Wayne",
        },
        {
            profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg",
            original_name:"Ben Affleck",
            character: "as Batman/ Bruce Wayne",
        },
        {
            profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg",
            original_name:"Henry Cavill",
            character: "as Superman/ Clark Kent",
        },
        {
            profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/ray-fisher-1072729-17-10-2017-12-14-18.jpg",
            original_name:"Gal Gadot",
            character: "as Wonder Woman/ Diana Prince",
        },
        {
            profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/jason-momoa-25617-24-03-2017-17-39-52.jpg",
            original_name:"Ray Fisher",
            character: "as  Victor Stone / Cyborg",
        },
        {
            profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/ezra-miller-34889-24-03-2017-16-04-22.jpg",
            original_name:"Jason Momoa",
            character: "as Arthur Curry / Aquaman",
        },
        {
            profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/amy-adams-148-24-03-2017-12-40-00.jpg",
            original_name:"Ezra Miller",
            character: "as  Barry Allen / The Flash",
        },
    ]

    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">

                {/* about movie */}
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-gray-800 font-bold text-2xl">
                        About the move
                    </h1>
                    <p>
                        Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.
                    </p>
                </div>

                <div className="my-8 ">
                    <hr />
                </div>

                {/* offers */}
                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-3">
                        Applicable Offers
                    </h2>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">
                                    Visa Stream Offer
                                </h3>
                                <p className="text-gray-600">
                                    Get 50% off upto INR 150 on all RuPay card* on BookMyShow Stream.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcApplePay className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">
                                    Filmy Pass
                                </h3>
                                <p className="text-gray-600">
                                    Get 50% off upto INR 150 on all RuPay card* on BookMyShow Stream.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8 ">
                    <hr />
                </div>

                {/* cast and crew */}
                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h2>
                    <Slider {...settingsCast}>
                        {cast.map((castData) => (
                            <Cast image={castData.profile_path} castName = {castData.original_name} role={castData.character} />
                        ))}
                    </Slider>
                </div>


                {/* Recommended movies */}
                <div className="my-8">
                    <PosterSlider config={settings} title="Recommended movies" posters={similarMovies} isDark={false}/>
                </div>

                <div className="my-8 ">
                    <hr />
                </div>

                <div className="my-8">
                    <PosterSlider config={settings} title="BMD XCLUSIVE" posters={similarMovies} isDark={false} />
                </div>


            </div>

        </>
    )
}

export default MoviePage

import axios from "axios";
import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";

import { NextArrow, PrevArrow } from './Arrows.Component'

function HeroCarousel() {

    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results)
            console.log(getImages);
        }

        requestNowPlayingMovies(); 
    }, [])

    const [images, setImages] = useState([
        // "https://in.bmscdn.com/promotions/cms/creatives/1631989403120_banneradaptnewcreativematrixfightnight_webshowcase_1240x300.jpg",
        // "https://in.bmscdn.com/promotions/cms/creatives/1631818106315_moviesdontbreathe2_tamil_webshowcase_1240x300.jpg",
        // "https://in.bmscdn.com/promotions/cms/creatives/1631025243018_basteachersdaycampaign_webshowcase_1240x300.jpg",
        // "https://in.bmscdn.com/promotions/cms/creatives/1631814448521_freeguy_amazonpay_webshowcase_1240x300.jpg",
    ]);

    const settingsLg = {
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: "20px",
        autoplay: true,
        slidesToShow: 1,
        inifinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const settings = {
        arrows: true,
        dots: true,
        autoplay: true,
        speed: 500,
        inifinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-56 md:h-80 px-2 py-3 shadow-sm">
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="Banner"
                                className="w-full h-full object-center rounded-md object-cover"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>
                    {images.map((image) => (
                        <div className="w-full h-56 md:h-80 px-2 py-3 shadow-sm">
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="Banner"
                                className="w-full h-full object-center rounded-md object-cover"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    );
}

export default HeroCarousel;


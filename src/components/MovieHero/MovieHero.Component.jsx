import React, { useState } from "react";
import MovieInfo from "./MovieInfo.Component";

function MovieHero() {
    const [movie, setMovie] = useState({
        id: "100",
        original__title: "Fast and Furious 9",
        overview:
            "2h 14m • Action, Adventure, Comedy, Sci - Fi • 18+ • 5 Aug, 2021",
        backdrop_path:
            "https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/the-suicide-squad-et00309402-22-09-2021-09-06-01.jpg",
        poster_path:
            "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-22-09-2021-09-06-01.jpg",
    });

    return (
        <>
            <div>
                {/* Mobile and tablet */}
                <div className="lg:hidden w-full">
                    <img
                        src={movie.backdrop_path}
                        alt="Cover Poster"
                        className="m-4 rounded"
                        style={{ width: "calc(100% - 2rem)" }}
                    />
                </div>

                <div className="flex flex-col gap-3 lg:hidden">
                    <div className="flex flex-col-reverse gap-3 px-4 my-3">
                        <div className="text-black flex flex-col gap-2 md:px-4">
                            <h4>4K Ratings</h4>
                            <h4 className="">English, Hindi, Kannada, Tamil</h4>
                            <h4>{movie.overview}</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Rent ₹200
                        </button>
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Buy ₹599
                        </button>
                    </div>
                </div>
                {/* Large screen devices */}
                <div
                    className="relative hidden w-full lg:block"
                    style={{ height: "30rem" }}
                >
                    <div
                        className="absolute z-10 w-full h-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
                        }}
                    ></div>

                    <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                        <div className="w-64 h-96">
                            <img
                                src={movie.poster_path}
                                alt="Movie Poster"
                                className="w-full h-full rounded-xl"
                            />
                        </div>
                        <div>
                            <MovieInfo movie={movie} />
                        </div>
                    </div>

                    <img
                        src={movie.backdrop_path}
                        alt="Backdrop Poster"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </>
    );
}

export default MovieHero;

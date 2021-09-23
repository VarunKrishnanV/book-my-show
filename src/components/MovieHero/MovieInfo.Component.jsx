import React from 'react'

function MovieInfo({ movie }) {

    console.log(movie)

    return (
        <>
           <div className="flex flex-col gap-3 lg:gap-8">
                <h1 className="text-white text-5xl font-bold">{movie.original__title}</h1>
                <div className="flex flex-col gap-5 text-white">
                    <h4 className="">4K Ratings</h4>
                    <h4 className="">English, Hindi, Kannada, Tamil</h4>
                    <h4>{movie.overview}</h4>
                </div>
                <div className="flex items-center gap-3 w-ful">
                    <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                        Rent ₹200
                    </button>
                    <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                        Buy ₹599
                    </button>
                </div>
            </div> 
        </>
    )
}

export default MovieInfo

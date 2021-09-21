import React from 'react'
import {Link} from 'react-router-dom'

function Poster(props) {
    return (
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
            <div>
                <img src={props.src} alt="Poster" className="w-full h-full object-center rounded-md"  />
                <h3 className="text-lg font-bold text-gray-700">The Balkan Line</h3>
                <p className="text-sm">English / Action / Drama / Thriller</p>
            </div>
        </div>
    )
}

export default Poster

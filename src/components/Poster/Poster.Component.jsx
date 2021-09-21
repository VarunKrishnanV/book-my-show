import React from 'react'
import {Link} from 'react-router-dom'

function Poster(props) {
    return (
        <div className="flex flex-col items-start gap-3 md:px-3 p-1 hover:scale-50">
            <div>
                <img src={props.src} alt="Poster" className="w-full h-full object-center rounded-md "  />
                <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    {props.title}
                </h3>
                <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    {props.subtitle}
                </p>
            </div>
        </div>
    )
}

export default Poster

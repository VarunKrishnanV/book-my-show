import React from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbar.Component'


function MovieLayout(props) {
    return (
        <div>

            <MovieNavbar />
            {props.children}
            {console.log(props.children)}
            <div className="footer">This is footer</div>

        </div>
    )
}

export default MovieLayout

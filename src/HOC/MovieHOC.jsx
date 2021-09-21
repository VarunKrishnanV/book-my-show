import React from 'react'
import { Route } from 'react-router'
import MovieLayout from '../layouts/MovieLayout';


function MovieHOC({ component: Component, ...rest }) {
    return (
        <>
            <Route {...rest} component={(...props) => {
                return <MovieLayout>
                    <Component />
                </MovieLayout>;
            }} />
        </>
    )
}

export default MovieHOC

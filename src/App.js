import React from "react";
import { Route } from "react-router";

// importing slick carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Higher order components
import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/MovieHOC";

// Pages
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import Plays from "./pages/Play.Page";


function Contact() {
    return <h1>This is a contact page</h1>
}


function App() {
    return (
        <>
            <DefaultHOC path="/" exact component={HomePage} />
            <MovieHOC path="/movie/:id" exact component={MoviePage} />
            <DefaultHOC path="/plays" exact component={Plays} />
        </>
    );
}

export default App;

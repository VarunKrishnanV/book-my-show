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
import axios from "axios";

// setting a base URL where we will be sending the api request everytime
axios.defaults.baseURL = "https://api.themoviedb.org/3";

// setting the default params to empty and then setting the same to api key
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

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

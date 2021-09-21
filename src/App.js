import React from "react";
import { Route } from "react-router";
import DefaultHOC from "./HOC/DefaultHOC";

// importing slick carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/Home.Page";

function Homepage() {
    return <h1>This homepage</h1>
}
function Contact() {
    return <h1>This is a contact page</h1>
}


function App() {
    return (
        <>
            <DefaultHOC path="/" exact component={HomePage} />
            <DefaultHOC path="/contact" exact component={Contact} />
        </>
    );
}

export default App;

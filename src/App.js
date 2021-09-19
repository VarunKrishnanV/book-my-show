import React from "react";
import { Route } from "react-router";
import DefaultHOC from "./HOC/DefaultHOC";

function Homepage() {
    return <h1>This homepage</h1>
}
function Contact() {
    return <h1>This is a contact page</h1>
}


function App() {
    return (
        <>
            <DefaultHOC path="/" exact component={Homepage}/>
            <DefaultHOC path="/contact" exact component={Contact}/>
        </>
    );
}

export default App;

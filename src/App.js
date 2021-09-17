import React from "react";
import { Route } from "react-router";

function Homepage() {
    return <h1>Hello</h1>
}
function Contact() {
    return <h1>This is a contact page</h1>
}


function App() {
    return (
        <>
            <Route path="/" exact component={Homepage}>

            </Route>
            <Route path="/contact" exact component={Contact}>

            </Route>
        </>
    );
}

export default App;

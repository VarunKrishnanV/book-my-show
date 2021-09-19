import React from 'react'
import Navbar from '../components/Navbar/Navbar.Component'

function DefaultLayout(props) {
    return (
        <div>
            <Navbar />
            {props.children}

            {console.log(props.children)}
            <div className="footer">footer</div>
        </div>
    )
}

export default DefaultLayout

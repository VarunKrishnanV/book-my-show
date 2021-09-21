import React from 'react'
import { Route } from 'react-router'
import DefaultLayout from '../layouts/DefaultLayout'


function DefaultHOC({component : Component, ...rest}) {
    return (
        <>
            <Route {...rest} component = {(...props)=>{
                return <DefaultLayout>
                    <Component />
                </DefaultLayout>;
            }}/>   
        </>
    )
}

export default DefaultHOC

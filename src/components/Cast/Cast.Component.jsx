import React from 'react'

function Cast(props) {
    return (
        <div>
           <div className="flex flex-col items-center">
               <div className="w-32 h-32">
                   <img src={props.image} alt="Cast and Crew member" className="w-full h-full rounded-full object-center object-cover" />
               </div>
               <h1 className="text-xl text-gray-800 text-center">{props.castName}</h1>
               <h5 className="text-sm text-gray-500 text-center">{props.role}</h5>
            </div> 
        </div>
    )
}

export default Cast

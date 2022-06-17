import React from "react"


const Card = ({ children, name, ...props }) => (
    <div {...props} 
    className='m-4 bg-transparent rounded-lg cursor-pointer w-72 h-96 perspective'>
        <div className='bg-cyan-900 text-white pt-3 relative w-full h-full duration-1000 preserve-3d'>
            {children}
        </div>
    </div>
)
export default Card
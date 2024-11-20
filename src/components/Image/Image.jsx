import React from 'react'

const Image = ({image}) => {
  return (
    <div className="w-full h-auto relative pt-[80%] bg-[#f2f4f5] ">
        {image ? <img src = {image} alt="/" className='absolute left-0 top-0 w-full h-full object-cover' /> : null}

    
    </div>
  )
}

export default Image
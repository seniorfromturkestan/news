import React from 'react'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'

import Image from '../Image/Image'


export const NewsBanner = ({item}) => {
  return (
    <div className="w-full border-b border-[#c0c2c3]">
        <div className='max-w-[1240px] mx-auto flex flex-col gap-2'>
            <Image image={item?.image}/>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>{item.title}</h1>
            <p className='text-xl md:text-2xl text-[#6c7072] mb-10'>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
        
                    

    </div>
  )
}

export default NewsBanner
import React from 'react'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'

const NewsItem = ({item}) => {
  return (
    
    <li className="flex w-full">
        <div className='max-w-[1240px] mx-auto  md:flex w-full'>
            <div className="w-full md:w-72 h-48 bg-[#f2f4f5] bg-cover bg-center flex-shrink-0" style={{backgroundImage: `url(${item.image})`}}></div>
            <div className="flex flex-col gap-2 md:ml-7">
                
                <h1 className='text-xl md:text-3xl mt-3 font-bold'>{item.title}</h1>
                <p className='text-sm md:text-xl text-[#6c7072] mb-8'>{formatTimeAgo(item.published)} by {item.author}</p>

            </div>      

        </div>
    </li>
  )
}

export default NewsItem
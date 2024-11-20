import React from 'react'
import NewsItem from '../NewsItem/NewsItem'

const NewsList = ({news}) => {
  return (
    <ul className='w-full flex flex-col gap-2'>
        {news.map(item => {
            return <NewsItem key={item.id} item={item} />


        })}
    </ul>
  )
}

export default NewsList
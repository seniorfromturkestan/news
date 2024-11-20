import React from 'react'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { useEffect } from 'react'
import { getNews } from '../../api/apiNews'
import { useState } from 'react'
import NewsList from '../../components/NewsList/NewsList'

const Main = () => {
        const [news, setNews] = useState([])

    useEffect(()=>{
        const fetchNews = async () =>{
            try{
                const response = await getNews()
                setNews(response.news)
            } catch (error){
                console.log(error)
            }
        }
        fetchNews()

        

    }, [])

  return (
    <div className="max-w-[1240px] mx-auto px-5">

        <main className='flex w-full flex-col gap-2'>
        <div className='md:flex gap-2 '>
            {news.length > 0 ? <NewsBanner item={news[0]} /> : null} 
            {news.length > 0 ? <NewsBanner item={news[1]} /> : null} 
        </div>
        <h1 className="text-3xl font-bold my-5">Actual News</h1>

          <NewsList news={news}/>

        </main>
    </div>
    
  )
} 

export default Main

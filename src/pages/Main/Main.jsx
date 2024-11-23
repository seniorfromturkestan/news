import React from 'react'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { useEffect } from 'react'
import { getNews } from '../../api/apiNews'
import { useState } from 'react'
import NewsList from '../../components/NewsList/NewsList'
import Sceleton from '../../components/Sceleton/Sceleton'

const Main = () => {
        const [news, setNews] = useState([])
        const [isLoading, setIsLoading] = useState(true)
        const [count, setCount] = useState();

    useEffect(()=> {
        setIsLoading(true);

        getNews().then((res) => {
            if (res.data){
                setNews(res.data.news);
            } 
        }).catch((err) => {
            alert("error");
        }).finally(() => {
            setIsLoading(false);
        })
    }, [count])

  return (
    <div className="max-w-[1240px] mx-auto px-5">

        <main className='flex w-full flex-col gap-2'>
        <div className='md:flex gap-2'>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
                ) : (
                <Sceleton type={"banner"} count={1} />
                )} 
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[1]} />
                ) : (
                <Sceleton type={"banner"} count={1} />
                )}         
        </div>
        <h1 className="text-3xl font-bold my-5">Actual News</h1>

          {!isLoading ? (<NewsList news={news}/>) :  
          (<Sceleton type={"item"} count={10} />)}

        </main>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Click</button>
    </div>
    
  )
} 

export default Main

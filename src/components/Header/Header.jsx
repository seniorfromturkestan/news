import React from 'react'
import { formatDate } from '../../helpers/formatDate'

const Header = () => {
  return (
    <div className="w-full border-b border-[#c0c2c3] bg-white">
        <header className='max-w-[1240px] mx-auto flex p-5 flex-col gap-1'>
            <h1 className='uppercase text-4xl font-bold'>Newsletter asl</h1>
            <p className='text-xl'>{formatDate(new Date())}</p>

        </header>
    </div>
  )
}

export default Header
import React from 'react'

const Button = ({children, onClick, isActive}) => {
  return (
    <button 
      className={
        isActive ? 'px-8 py-3 rounded-lg border-2 text-white border-black text-xl font-bold cursor-pointer bg-black active:bg-gray-500' 
        : 'px-8 py-3 rounded-lg border-2 border-black text-xl font-bold cursor-pointer mt-5 hover:bg-black hover:text-white ease-in duration-150 active:bg-gray-500'}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
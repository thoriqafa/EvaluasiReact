import React from 'react'
import { HiHome } from 'react-icons/hi'
import { BsCardList } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Template(props) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className='w-full grid grid-cols-12 items-center text-white bg-teal-500 text-xl'>
        <div className='col-span-2'></div>
        <div className='col-span-8 text-xl text-center'>Aplikasi Evaluasi Web Bootcamp</div>
        <div className='col-span-2 cursor-pointer text-white hover:bg-gray-500 p-3 right-0'>
        </div>
      </div>
      <div className='container mx-auto px-4 space-y-4 my-4 overflow-auto h-full'>
        {props.children}
      </div>
      <footer className="bg-teal-500 grid grid-cols-2 ">
        <Link to="/" className='cursor-pointer text-white hover:bg-gray-500 p-3 mx-auto'>
          <HiHome className='text-xl' />
        </Link>
        <Link to="/bus" className='cursor-pointer text-white hover:bg-gray-500 p-3 mx-auto'>
          <BsCardList className='text-xl' />
        </Link>
      </footer>
    </div>
  )
}

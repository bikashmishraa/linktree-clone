'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavLinks = [
  {
    name:'Templates',
    link:'/templates'
  },
  {
    name:'Marketplace',
    link:'/marketplace'
  },
  {
    name:'Discover',
    link:'/discover'
  },
  {
    name:'Pricing',
    link:'/pricing'
  },
  {
    name:'Learn',
    link:'/learn'
  },
]
const Navbar = () => {

  function search() {
    document.querySelector('.search').style.display = 'flex';
    document.querySelector('.btn').style.display = 'none';
}


  return (
   <div className='flex items-center w-[90%] bg-gray-200 h-20 mt-14 rounded-3xl fixed text-black justify-between p-4 ml-[5%]'>
    <div className='flex text-black items-center gap-2'>
    <Image src="/logo.svg" alt="logo" width={40} height={40}/>
    {NavLinks.map((link,index) => (
      <div className='' key={index}>
      <Link href={link.link} key={index} className='text-[#6b6b5f] p-2 text-lg '>
         {link.name}
      </Link>
      </div>
    ))}
    <div className='text-[#6b6b5f] '>
    <div className="search hidden">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-white" />
    </div >
    <button className="btn btn-ghost btn-circle flex w-[100%] p-2 rounded" onClick={search}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <h3 className='text-lg'>Search</h3>
    </button>
    </div>
    </div>
    <div className='flex gap-2'>
      <button className='bg-green-900 text-white p-3 px-6 rounded-3xl'>Login</button>
      <button className='bg-black text-white p-4 rounded-3xl'>Sign up Free</button>
    </div>
   </div>
  )
}

export default Navbar
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [data, setData] = useState({ handle: '', linkText: '', url: '', pictureLink: '' })

  const addLink = async (link, text, handle,pictureLink) => {
    if (!link?.trim() || !text?.trim() || !handle?.trim() || !pictureLink?.trim()) {
      toast.error('All fields are required !', { position: "top-center", autoClose: 5000 })
      return
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ handle, linkText: text, linkURL: link, pictureLink:pictureLink }),
      redirect: "follow"
    }

    try {
      const response = await fetch("http://localhost:3000/api/add", requestOptions)
      const result = await response.json()
      console.log(result)
      toast.success('Data added successfully', { position: "top-center", autoClose: 5000 })
    } catch (error) {
      console.error(error)
      toast.error('An error occurred', { position: "top-center", autoClose: 5000 })
    }
    setData({ handle: '', linkText: '', url: '', pictureLink: '' })
  }

  const handleData = (key, value) => {
    setData(prevData => ({ ...prevData, [key]: value }))
  }

  return (
    <section className='min-h-screen bg-[#eac1ea] grid grid-cols-2'>
      <div className='mx-[5vw] text-[#49AA27] mt-[25%] flex flex-col gap-2'>
        <h1 className='text-[3vw] font-bold'>Create your Linktree</h1>
        <form onSubmit={e => e.preventDefault()} className='border p-4 flex flex-col gap-2 text-[1.2vw] w-[80%]'>
          <h2>Step 1: Claim Your Handle</h2>
          <input value={data.handle} onChange={e => handleData('handle', e.target.value)} type="text" placeholder='Handle' className='bg-white rounded p-2' />
          <h2>Step 2: Add Links</h2>
          <input value={data.linkText} onChange={e => handleData('linkText', e.target.value)} type="text" placeholder='Link text' className='bg-white rounded p-2' />
          <input value={data.url} onChange={e => handleData('url', e.target.value)} type="text" placeholder='Link URL' className='bg-white rounded p-2' />
          <button  className='bg-[#49AA27] text-white p-2 rounded'>Add Link</button>
          <h2>Step 3: Add Picture and Finalize</h2>
          <input value={data.pictureLink} onChange={e => handleData('pictureLink', e.target.value)} type="text" placeholder='Picture link' className='bg-white rounded p-2' />
          <button type='submit' onClick={() => addLink(data.url, data.linkText, data.handle,data.pictureLink)} className='bg-[#49AA27] text-white p-2 rounded'>Submit your Linktree</button>
        </form>
      </div>
      <div className='mt-5'>
        <Image src='/generate.png' width={330} height={550} alt='generate' />
      </div>
      <ToastContainer />
    </section>
  )
}

export default Page

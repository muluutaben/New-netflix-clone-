import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white '>
    <img 
         className='w-full h-[400px] object-cover'
         src='https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/74d76c5f-f92d-4db3-8725-c74b22db1f24/UG-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_51f416b1-19cd-49fe-9922-d67a3be22fb4_large.jpg' alt='/' 
    />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8 '>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
    </div>
    <SavedShows />
  </>
  )
}

export default Account
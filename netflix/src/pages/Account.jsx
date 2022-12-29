import React from 'react'
import Savedshows from '../Components/Savedshows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/598617d3-a31c-4df8-8410-fe9dd22f0562/CA-fr-20221219-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='' />
      </div>
      <div className='fixed top-0 left-0 w-full h-[550px] bg-black/60'>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold text-white'>My shows</h1>
          
        </div>
      </div>
      <Savedshows/> 
    </>

  )
}

export default Account
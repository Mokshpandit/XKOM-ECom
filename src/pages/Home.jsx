import React, { forwardRef } from 'react'

const Home = forwardRef((props,ref) => {
  return (
    <>
    <div ref={ref} className='z-0'>
      
      <video  src="/Ai_PC_Build.mp4" autoPlay loop muted className='w-[100%] '></video>
      
    </div>

    <div className="bg-white h-100px w-full z-1 pt-20">
      
    </div>
    
    </>
  )
})

export default Home

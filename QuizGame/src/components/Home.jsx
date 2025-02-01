import React from 'react'
import './Home.scss'

const Home = () => {
  
  //----Simple Function to Render the Title Image

  return (
    <>
        <div className='flex flex-col justify-center w-full'>
            <div className='pb-5 text-5xl h-50 flex flex-col items-center'>
              <img src="/logo1.png" alt="QuizLogo" className='h-90 bg-transparent'/>
            </div>
        </div>
    </>
  )
}

export default Home
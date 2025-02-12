import React from 'react'
import '../styles/Home.scss'

const Home = () => {
  
  //----Simple Function to Render the Title Image

  return (
    <>
        <div className='main-outer'>
            <div className='main-inner text-5xl'>
              <img src="/logo1.png" alt="QuizLogo" className='banner bg-transparent'/>
            </div>
        </div>
    </>
  )
}

export default Home
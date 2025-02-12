import { React, useState, useEffect } from 'react'
import '../styles/GreetingPage.scss'


const GreetingPage = ({setStart, name, setName}) => {

  // This Component is used to accept the Players Name

  const handleChange = (e) => {
    setName(e.target.value);
  }


  const handleSubmit = (e) => {
    if(name!==''){

      e.preventDefault();
      playCorrect();
      setTimeout(()=>{setStart(true);},2000)

    }
  }

  useEffect(()=>{
  },[name])

//--Play Sound on Succesful submition
  const playCorrect = () => {
    let audio = new Audio('/correct.mp3');
    audio.loop = false;
    audio.play();
  }

  return (
    
        <div className='first-page'>
            <form action="" className='input-form'>
            
                <input 
                  type="text" 
                  placeholder='Enter your name' 
                  className='mt-10 text-center text-xl outline-none' 
                  value={name}
                  onChange={handleChange}
                  required/>
            
                <button className='mt-5 text-3xl' type='submit' onClick={handleSubmit}>Start</button>
            </form>    
        </div> 
    
  )
}

export default GreetingPage
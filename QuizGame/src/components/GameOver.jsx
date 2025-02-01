import {React, useEffect, useState } from 'react'
import './GameOver.scss'

const GameOver = ({score, name}) => {

  const player = {
    name: "",
    hscore: 0
  }
  const [scores,setScores] = useState([player]);

  const fetchScores = () => {
    setScores(localStorage.getItem('leaderboards'))
  }


  useEffect(()=>{
    fetchScores();
    const audio = new Audio('/game-over.mp3');
    audio.loop = false;
    audio.volume = 0.3;
    audio.play();
  },[])
  return (
    <div className='mt-5  flex h-45 flex-col justify-evenly text-3xl items-center gameOver'>
        <div className=''><img src="game-over.png" alt="" className='h-75'/></div>
        <div className='result'>{name}</div>
        <div className='result score'>{score}</div>
    </div>
  )
}

export default GameOver
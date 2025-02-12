import {React, useEffect, useState } from 'react'
import './GameOver.scss'

const GameOver = ({score, name}) => {

  const [ fetching, setFetching ] = useState(false)

  const [scores,setScores] = useState([]);

  const fetchScores = () => {
    const storedScores = JSON.parse(localStorage.getItem('leaderboards')) || [];
    setScores(storedScores);
    setFetching(true);
  }

  const updateScores = (oldScores) => {

    const player = {name, record: score};
    let newScores = [...oldScores];

    if(newScores.length > 0){

        let newIndex = newScores.findIndex(obj => obj.record < player.record )

        if(newIndex !== -1){
          newScores.splice(newIndex, 0, player)}
        else {
          newScores.push(player)
        }
    } else {  newScores = [player];  }

    localStorage.setItem('leaderboards',JSON.stringify(newScores))
    setScores(newScores);
  }


  useEffect(()=>{
    fetchScores();
    const audio = new Audio('/game-over.mp3');
    audio.loop = false;
    audio.volume = 0.3;
    audio.play();
    },[])

  useEffect(()=>{
      if(fetching){
        updateScores(scores);
      }
  },[fetching]);

  return (
    <div className='mt-5 flex h-auto flex-col justify-evenly text-3xl items-center gameOver'>

        <div className='screen h-auto w-150 relative justify-center items-center'>

                  <button id='restart' className='h-9'><a href="/">Restart</a></button>
                  <img src="game-over.png" alt="" className=' w-120'/>
                  
        </div>

        <div className='result'>{name}</div>
        <div className='result score'>{score}</div>

        <div className="leaderboards">
          
            <div className='p-3 flex flex-col items-center'>
            <label className='p-3 result text-5xl'>Leaderboards</label>
            {
              scores.slice(0, 10).map((item, index) => (<label key={index}>
                <span className='name'>{item.name}</span> 
                <span className='score ml-5'>{item.record}</span>
                <br/>
              </label>))
            }
            </div>

        </div>
        
    </div>
  )
}

export default GameOver
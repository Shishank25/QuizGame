import { React, useEffect, useState } from 'react'
import QuesionCard from './QuesionCard';
import GameOver from './GameOver';

const Questionaire = ({questions, name}) => {

  //---This is the main GamePlay Component

    const [score, setScore] = useState(0);

    const [page, setPage] = useState(0);
    

    useEffect(()=>{

    },[questions])

  return (

    <>
    <div>
    {
      page > 9 ? (<GameOver score={score} name={name}/>) : 
          (<>
              <div className='flex flex-col items-center w-250 mt-10 z-3'>
                 
                  <QuesionCard 
                      page={page}
                      setPage={setPage}
                      question={questions[page].description} 
                      solution={questions[page].solution}
                      options={questions[page].options}
                      score={score}
                      setScore={setScore}/>

              </div>
          </>)
      }
    </div>
    </>
  )


}

export default Questionaire
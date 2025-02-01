import { useState, React, useEffect} from 'react'
import styles from '../styles/QuestionCard.module.scss'

const QuesionCard = ({ page, setPage, question, solution, options, score, setScore }) => {


//--Multiplier increases for consecutive correct answers;
    const [ multiplier, setMultiplier ] = useState(1);


//--States to check if submitted answer is correct or not;
    const [ selectedValue, setSelectedValue ] = useState(null);
    const [ isCorrect, setIsCorrect ] = useState(null);

    const [ animating, setAnimating ] = useState(false);



//--Checks if the selected value is correct or not
    const handleSelection = (event) => {
        const selectedOption = event.target.value === "true";
        setSelectedValue(selectedOption);
    }




    const handleSubmit = (e) => {

        e.preventDefault();

        setAnimating(true);

        setIsCorrect(selectedValue);

    //---Change the question with a delay
        setTimeout(()=>{
                            setPage((prev)=>(prev+1));
                            setAnimating(false);     },2000);
    }


    
    //---To evaluate the score and multiplier, and to play the appropriate sound;
    useEffect(()=>{
                    if(isCorrect === true){
                        
                        playCorrect();
                        setScore((prev)=> (prev + (100*multiplier)))
                        setMultiplier( (prev) => (prev+1) )

                    } else if (isCorrect === false) {

                        setMultiplier(1);
                        playWrong();

                    }           
    },[isCorrect])


    //--Reset Options on new questions;
    useEffect(()=>{
                    setSelectedValue(null);
                    setIsCorrect(null);
    },[page])

    useEffect(()=>{},[animating])



    //--Functions to fetch the appropriate sound effects;
    const playCorrect = () => {
          let audio = new Audio('/correct.mp3');
          audio.loop = false;
          audio.play();
        }

    const playWrong = () => {
        let audio = new Audio('/wrong.mp3');
        audio.loop = false;
        audio.play();
        }


  return (
    <>
    <div className={`${styles["question-card"]} ${animating ? styles["animate"] : ""} mb-4 bg-blue-500`}>

        <form onSubmit={handleSubmit} className='flex flex-col w-100 justify-evenly '>

            <label htmlFor="" className='w-full mb-9'>Q{page+1}: <span className='ml-2'>{question}</span></label>

            <div>
            {
                options.map((option) => ( 

                <label htmlFor="" key={option.id} className='flex mb-2'>
                            <input
                            name='questionOptions'
                            type='radio' 
                            value={option.is_correct} 
                            onChange={handleSelection}/>
                            <label htmlFor="input" className='w-3/4'>{option.description}</label>
                </label> 

                ))
            }
            </div>
            
            <button type='submit' className='w-25 p-1 font-medium self-center'>Submit</button>
        </form>
        <br/>

        </div>
    
    </>
  )
}

export default QuesionCard
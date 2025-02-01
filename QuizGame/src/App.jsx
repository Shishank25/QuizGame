import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import GreetingPage from './components/GreetingPage'
import axios from 'axios'
import Questionaire from './components/Questionaire'
import { use } from 'react'

function App() {


//---To store players name;
  const [name, setName] = useState('');


//---To store the data gathered from the API Endpoint;
  const [data, setData] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [start, setStart] = useState(false);


//---Load Theme Song;
  const audio = new Audio('/theme.mp3');
  audio.loop = false;
  audio.volume = 0.1;


//---Function to fetch API;
  const fetchApi = async () => {
    const respone = await axios.get('http://localhost:8080/proxy');
    setData(respone.data);
  }

//---Fetch the API on first render, and if data gets updated, then store the necessary information; 
  useEffect(() => {
    fetchApi();
  },[])

  useEffect(() => {
    if(data){
        const temp = data.questions.map(item => { return{
        id: item.id,
        description: item.description,
        solution: item.detailed_solution,
        options: item.options
      }}
    );
      setQuestions(temp);
    }
  },[data])

//---Function to play/pause the music;
  const playTheme = () => {
    
    if(audio.paused){audio.play()}
    else{audio.pause()}

  }

  return (
    <>
        <button className='ml-5 mt-5 absolute' onClick={playTheme}>Song</button>
        <div className="game flex flex-col items-center h-1000px">

            <Home />
            {
              start === true ? <Questionaire questions={questions} name={name}/> : 

              (<>
                <GreetingPage setStart={setStart} name={name} setName={setName}/>
                <p className='mt-10'>Enter your Name and Press Start to begin...</p>
              </>)
              
            }

        </div>
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import './App.scss'
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


//---Store Theme Song;
  const [themeSong, setThemeSong] = useState(null);
  

//---Function to fetch API;
  const fetchApi = async () => {
    const respone = await axios.get('http://localhost:8080/proxy');
    setData(respone.data);
  }

//---Fetch the API on first render, and if data gets updated, then store the necessary information; 
  useEffect(() => {
    fetchApi();

    const audio = new Audio('/theme.mp3');
    audio.loop = false;
    audio.volume = 0.1;
    setThemeSong(audio);
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
    
    if(themeSong.paused){themeSong.play()}
    else{themeSong.pause()}

  }

  return (
    <div className='main-page'>
        <button className='theme-button' onClick={playTheme}>Song</button>
        <div className="game">

            <Home />
            {
              start === true ? <Questionaire questions={questions} name={name}/> : 

              (<>
                <GreetingPage setStart={setStart} name={name} setName={setName}/>
                <p className='mt-10'>Enter your Name and Press Start to begin...</p>
              </>)
              
            }

        </div>
    </div>
  )
}

export default App

import {CardWrapper,Header} from '../components/mainComps';
import './App.css';
import {fetchPokemon} from '../components/functionality'
import {useState} from 'react'
const data = await fetchPokemon();
function App() {
  const [score,setScore] = useState([]);
  const [bestScore,setBestScore] = useState(0);
  return (
    <>
    <Header bestScore={bestScore} score={score} />
    <CardWrapper bestScore={bestScore} setBestScore={(num) => {
      setBestScore(num);
    }} score={score} setScore={(name) => {
      if(name === 'stop'){setScore([]);}
      else setScore((result) => {
        if(result.length < 9){
          return [...score,name];}
        else if(result.length === 9){
          alert('you  won'); setBestScore(10);
          return [];
        }
      });

    }}  arr={data}/>
    </>
  )
}

export default App


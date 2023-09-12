import {Card,Caption,Img} from './auxComps'
import {useEffect,useState} from 'react';
import '../styles/style.css';
import { randomSort,isWinOrLose } from './functionality';
function CardWrapper({arr,setScore,score,setBestScore,bestScore}){
    let [arrange,setArrange] = useState(true);
    useEffect(() => {
        randomSort(arr);
        return;
    },[arrange,arr]);
    useEffect(() => {
        if(score.length >= bestScore){
            console.log();
            setBestScore(score.length);
        }  
    },[score,bestScore,setBestScore]);
    function HandleClick(value) {
            setArrange(!arrange);
            if(isWinOrLose(score,value.name)){
                setScore('stop'); return;
            }else{
                setScore(value.name);
            }    
    }

    return (
        <section className='card-wrapper'>
            {arr.map((value) => {
                return (
                <Card onClick={() => {HandleClick(value)}} key={value.name}>
                    <Img name={value.name} img={value.sprite}/>
                    <Caption name={value.name}/>
                </Card>
                )
            })}
        </section>
    )
}

function Header({bestScore,score,}) {
    return (
        <header>
            <div>
                <h1>MEMORY CARD GAME</h1>
                <div>
                    <p className="score">
                        score: <span>{score.length}</span>
                    </p>
                    <p className="best-score">
                        Best score: <span>{bestScore}</span>
                    </p>
                </div>
            </div>
            <h2>press each unique card once to win. if you press a card to times you lose</h2>
        </header>
    )
}
export{Header,CardWrapper}
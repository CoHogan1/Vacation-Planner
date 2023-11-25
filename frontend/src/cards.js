import './App.css';
import React, { useState } from 'react';

let words = ['one', 'two', 'three', 'four',' elephant']


function Cards(){
    let [word, setWord] = useState(words)
    let [index, setIndex] = useState(0)

    const next = (e) => {
        e.preventDefault();
        //console.log('next was clicked', index);
        if (index === words.length -1){
            setIndex(0)
        } else {
            setIndex(index+1)
        }
    }

    const speak = (e) => {
        window.speechSynthesis.cancel();
        console.log("speaking....");
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 0.5;
        msg.text = e.target.innerHTML;
        window.speechSynthesis.speak(msg);
    }

    return (
        <div className="card">
            <div className="flashCard">
                <p className="word" onClick={speak}>{word[index]}</p>
                <button className="nextButton" onClick={next}>Next</button>
            </div>


        </div>
    )
}

export default Cards;

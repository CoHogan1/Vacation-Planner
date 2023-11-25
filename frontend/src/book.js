import './App.css';
import React, { useState } from 'react';
// title,page one, page two, page three, page four

function Book(){
    let [imageSrc, setImageSrc] = useState('larry_01.png');// this is not displaying

    let [text, setText] = useState(["red","pink","blue","green","yellow"])
    let [images, setImages] = useState(['red','blue',"green"])
    let [ind, setInd] = useState(0);

    let ans = [[
  'Hi',     'my',
  'name',   'is',
  'Larry,', 'and',
  'this',   'is',
  'my',     'book'
],[2,4,6,8]]

    const turnPage = () => {
        console.log("turn page clicked");
        if (ind === images.length){
            setInd(ind = 0)
        }
        setInd((ind) => ind + 1)
    }

    const speak = (e) => {
        window.speechSynthesis.cancel();
        //console.time('loop')
        // e.preventDefault();
        // let text = e.target.innerHtml
        console.log("speaking....");
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 0.5;
        msg.text = e.target.innerHTML;
        window.speechSynthesis.speak(msg);
        // console.timeEnd('loop')
    }

    const cncl = () => {
        window.speechSynthesis.cancel();
        if (!window.speechSynthesis.speaking){
            console.log("working");
        }

    }

    const temp = (e) => {
        console.log(e.target.innerHTML);
        //speak(e)

    }

    return(
        <div className="page" >Book is working
            <p>{ind}</p>
            <button onClick={cncl} >Cncl Spk</button>

            <div className="background" style={{background:images[ind]}}>
                <p onClick={temp}>Liliana keep reading</p>
                <p className="title">Don't Push the button</p>

                <div className="text">
                    {ans.map((val, ind) => ans[ind].map((v, i) =>
                        <p key={ind,i}
                            onClick={speak}
                            >{ans[ind][i]}
                        </p>)
                    )}
                </div>
                    <img src={imageSrc} alt="book img"/>

                <button onClick={turnPage}>Turn Page</button>
            </div>
        </div>
    );
}

export default Book;

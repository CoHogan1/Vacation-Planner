
import './App.css';
import Sudoku from './sudoku.js'
import Book from './book.js'
import Card from './cards.js'
let sentence = [];


function App() {

    const randNum = () => {
        return Math.floor(Math.random() * (122 - 97 + 1) + 97);
    }

    const generateWord = () => {
        let word = ''
        let len = Math.floor(Math.random() * (7 - 3 + 1) + 3);
        for( let i = 0; i < len; i++){
            word += String.fromCharCode(randNum())
        }
        return word
    }

    const generateSentence = () => {
        console.log('gen sent');
        let sentenceLength = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        for (let i = 0; i < sentenceLength; i++){
            sentence.push(generateWord())
        }
        console.log(sentence)
        let x = sentence.join(' ')
        console.log(window.speechSynthesis, x, " here");
        //test(sentence)
        test('Hi Isaac.')
    }

    const test = (val) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(val);
        synth.speak(utterance);
        sentence = []
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }





  return (
    <div className="App">
        <Sudoku />
    </div>
  );
}

export default App;

//    <Sudoku />  <Book />   <Card />



// <div>Header</div>
// <p>slogan</p>
//
// <form onSubmit={handleSubmit} className="form1">
//
//     <input placeholder="Destination"></input>
//
//     <input placeholder="Start"></input>
//
//     <input placeholder="End"></input>
//
//     <input type='submit'></input>
//
// </form>

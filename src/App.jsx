


import { useState } from 'react'
import './App.css'
import CardText from './components/CardText'

import phrase from "./json/quotes.json"
const colors = ["#E32E09", "#05E8F9", "#052BF9", "#8905F9", "#000000", "#00FF02","#320269", "#77FF00", "#FFEC00", "#C70039", "#FF0000", "#FF5733", "#00FF54" ]

function App() {

  const createNumbeRandom = (array) => {
  return Math.floor(Math.random() * array.length);
}
 
const elementRandom = array =>{
  const index  = createNumbeRandom(array)
  return array[index]
}
const [phraseRandom, setPhraseRandom] = useState(elementRandom(phrase))
const [colorRandom, setColorRandom] = useState(elementRandom(colors))

const clickButtom = () =>{
  setPhraseRandom(elementRandom(phrase));
  setColorRandom(elementRandom(colors));

}
const styleRandoms  = {
  background: colorRandom
 }


  return (
    <div style={styleRandoms} className="App">
      
      <CardText
      phraseRandom={phraseRandom}
      colorRandom={colorRandom}
      clickButtom={clickButtom}
      />
    </div>
  )
}

export default App

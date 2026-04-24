import {words} from "./words.js"
import LetterOptions from "./LetterOptions.jsx"
import { nanoid } from "nanoid"
import { useState } from "react";

import Fillanswerletterbox from "./Fillanswerletterbox.jsx"


function App() {

  
  // there are 538 words in this array. we will use math,random to get a keybetween 0 and 537 
  //  and get a random word from this array

  

   const [chosenWord, setChosenWord] = useState(()=> getRandomWordArray())

   const [letterGuessedArray, setLetterGuessedArray] = useState([])

   const [ letterClickedArray, setLetterClickedArray ]   = useState([]) // letterClickedArray elements will be (letter, guessedCorrectlyOrNot)

   const [programmingLanguagesArray, setProgrammingLanguagesArray] = useState(["CSS", "HMTL", "Javascript",                                                                                                    
                                                                                                "React",
                                                                                                "Typescript",
                                                                                                "Node.js",
                                                                                                "Python",
                                                                                                "Ruby",
                                                                                                "Assembly"])

   

  function getRandomWordArray() {
    
    return (words[Math.floor(Math.random() * 538)].toUpperCase().split(""))

  }

  

  const fillanswerletterboxword = chosenWord.map((letter, index) => 


                <Fillanswerletterbox
                  key={index}
                  fillletter={letter}
                  letterGuessed = {letterGuessedArray.includes(letter)}
          
                
                />
  )






 const letteroptionsElements = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => {
    const clickedObj = letterClickedArray.find(el => el.letter === letter)
    
    return <LetterOptions
        key={letter}
        fillLetter={letter}
        letterGuessed={() => AlphabetGuessedCorrect(letter)}
        isCorrect={clickedObj?.guessedCorrectlyOrNot === true}
        isWrong={clickedObj?.guessedCorrectlyOrNot === false}
    />
})
  
  function AlphabetGuessedCorrect(guessedLetter) {
      // console.log("AlphabetGuessedCorrect function called when letter clicked")    
      //we will check if the below letter that is guessed is there in the random word or not??
      // console.log(guessedLetter)
      const isGuessedCorrect =  chosenWord.includes(guessedLetter)

      setLetterClickedArray( prevLetterClickedArray => [...prevLetterClickedArray, {letter : guessedLetter, guessedCorrectlyOrNot : isGuessedCorrect}])



      if(chosenWord.includes(guessedLetter)){
        // console.log("the user guessed correctly. we will show the letter in the answer fillbox.")
        // console.log("this means we have to send a signal to Fillanswerletterbox component and change the letterGuessed state to true. but how to do that????? ")
        setLetterGuessedArray(prevLetterGuessedArray => [...prevLetterGuessedArray, guessedLetter])
        

      }
  }
  

  return (

    <main>
    
      <h1>Assembly: Endgame</h1>
      <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      <div id="programmingblocksElm">
          <span className="programmingLBlock" id="css">CSS</span>
          <span className="programmingLBlock" id="html">HMTL</span>
          <span className="programmingLBlock" id="js">Javascript</span>
          <span className="programmingLBlock" id="react">React</span>
          <span className="programmingLBlock" id="ts">Typescript</span>
          <span className="programmingLBlock" id="node">Node.js</span>
          <span className="programmingLBlock" id="python">Python</span>
          <span className="programmingLBlock" id="ruby">Ruby</span>
          <span className="programmingLBlock" id="assembly">Assembly</span>

      </div>

      <div id="letterfillboxes">

          {fillanswerletterboxword}
          
      </div>

      <div id="optionsallLetterboxes">
          
          {letteroptionsElements}
        
      </div>


            
    </main>
  )
}

export default App

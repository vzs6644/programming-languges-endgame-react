import {words} from "./words.js"
import LetterOptions from "./LetterOptions.jsx"
import { nanoid } from "nanoid"
import { useState } from "react";
import  ProgrammingLanguages  from "./ProgrammingLanguages.jsx";

import Fillanswerletterbox from "./Fillanswerletterbox.jsx"


function App() {

  
  // there are 538 words in this array. we will use math,random to get a keybetween 0 and 537 
  //  and get a random word from this array

  

   const [chosenWord, setChosenWord] = useState(()=> getRandomWordArray())

   const [letterGuessedCorrectArray, setLetterGuessedCorrectArray] = useState([])

   const [ letterGuessedWrongArray, setLetterGuessedWrongArray ]   = useState([]) // letterClickedArray elements will be (letter, guessedCorrectlyOrNot)

   const [programmingLanguagesArray, setProgrammingLanguagesArray] = useState(["CSS", "HMTL", "Javascript",                                                                                                    
                                                                                                "React",
                                                                                                "Typescript",
                                                                                                "Node.js",
                                                                                                "Python",
                                                                                                "Ruby",
                                                                                                "Assembly"])

      const [wrongGuesses, setWrongGuesses] = useState(0)

   

  function getRandomWordArray() {
    
    return (words[Math.floor(Math.random() * 538)].toUpperCase().split(""))

  }

  

  const fillanswerletterboxword = chosenWord.map((letter, index) => 


                <Fillanswerletterbox
                  key={index}
                  fillletter={letter}
                  letterGuessed = {letterGuessedCorrectArray.includes(letter)}// we will use to communicate if user 
                  // guess corrrect using the letterGuessedCorrectArray
          
                
                />
  )


  

  
 const programmingLblock = programmingLanguagesArray.map(language => {
    
    
    return <ProgrammingLanguages
            key={language}
            language={language}
            
            
              />
})






 const letteroptionsElements = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => {
    
    
    return <LetterOptions
            key={letter}
            fillLetter={letter}
            guessedCorrect = {letterGuessedCorrectArray.includes(letter)}
            guessedWrong = {letterGuessedWrongArray.includes(letter)}
            letterClickedCheckAnswer = {() => AlphabetGuessedCorrect(letter)}
            
            
              />
})
  
  function AlphabetGuessedCorrect(guessedLetter) {

    console.log("we are inside the AlphabetGuessedCorrect function.")
      
      const isGuessedCorrect =  chosenWord.includes(guessedLetter)
      
      // if the guessedLetter is there in chosen word add this to the  letterGuessedCorrectArray or else
        // add this letter to the letterGuessedWrongArray

      if(isGuessedCorrect){
        setLetterGuessedCorrectArray(prevarray => [...prevarray, guessedLetter])
      }
      else{
        setWrongGuesses(prevWrongGuesses => prevWrongGuesses + 1 )
        setProgrammingLanguagesArray(prevarray => prevarray.slice(1))
        setLetterGuessedWrongArray(prevarray=> [...prevarray, guessedLetter])
      }

      
      
  }
  

  return (

    <main>
    
      <h1>Assembly: Endgame</h1>
      <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      <div id="programmingblocksElm">
          {programmingLblock}

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

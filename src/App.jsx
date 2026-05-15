import {words} from "./words.js"
import LetterOptions from "./LetterOptions.jsx"
import { nanoid } from "nanoid"
import { use, useState } from "react";
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

   const [deadProgrammingLang, setDeadProgrammingLang ] = useState([])                                                                                 

      const [wrongGuesses, setWrongGuesses] = useState(0)

      const [corrrectGuesses,setCorrrectGuesses] = useState(0)

      const [gameLost, setGameLost] = useState(false)

      const [gameWon, setGameWon] = useState(false)



   

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
            isDeadProgramLang= {deadProgrammingLang.includes(language)}
            
            
              />
})






 const letteroptionsElements = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => {
    
    
    return <LetterOptions
            key={letter}
            fillLetter={letter}
            guessedCorrect = {letterGuessedCorrectArray.includes(letter)}
            guessedWrong = {letterGuessedWrongArray.includes(letter)}
            letterClickedCheckAnswer = {() => AlphabetGuessedCorrect(letter)}
            gameEnded = {gameLost || gameWon}
            
            
              />
})
  
  function AlphabetGuessedCorrect(guessedLetter) {

    console.log("we are inside the AlphabetGuessedCorrect function.")
    console.log(chosenWord)
      
      const isGuessedCorrect =  chosenWord.includes(guessedLetter)
      
      // if the guessedLetter is there in chosen word add this to the  letterGuessedCorrectArray or else
        // add this letter to the letterGuessedWrongArray

      if(isGuessedCorrect){
        setLetterGuessedCorrectArray(prevarray => [...prevarray, guessedLetter])


        const guessedCount = chosenWord.filter(letter => letter === guessedLetter).length;


        const newCorrrectGuesses = corrrectGuesses + guessedCount

        setCorrrectGuesses(newCorrrectGuesses)



        if(newCorrrectGuesses == chosenWord.length){
            setGameWon(true)
            console.log("game is won")
        }


      }
      else{

        const newWrongGuesses = wrongGuesses + 1

        setWrongGuesses(newWrongGuesses )
        // we were deleting the programming language from the array. it worked. but we will find a better option. we wil add something visual
        // setProgrammingLanguagesArray(prevarray => prevarray.slice(1))

        const deadProgramlangNewAdded = programmingLanguagesArray[newWrongGuesses-1]

        setDeadProgrammingLang(prevDeadProgLArray => [...prevDeadProgLArray, deadProgramlangNewAdded])
        setLetterGuessedWrongArray(prevarray=> [...prevarray, guessedLetter])

        console.log(newWrongGuesses)

        if(newWrongGuesses == 8 ){
          // call the game done function. we can use a state called gameLost. this is true or false. if true the ui will be updated. 
          //  everything will be greyed out and the new game button will be shown
          // also we can use a state called game won state with true and false. if true the ui changes to some animations and new game is shown
          // if the game won is false nothing happens. the user just continues to play.

          console.log("game is lost. 8 chances are done. you are left only with assembly language")

          setGameLost(true)



        }
      }

      
      
  }


  function gameLostWonNotice(){
    
                          if(gameLost){

                                    return(

                                    

                                    <div className="gameLost">
                                    <h2>Game over!</h2>
                                  <p>You lose! Better start learning Assembly 😭</p> 

                                  </div>
                                  

                                  
                                    )
                              }

                               else if(gameWon) {
                                    return(

                                    

                                    <div className="gameWon">
                                    <h2>You win!</h2>
                                  <p>Well done! 🎉</p> 

                                  </div>
                                

                                  
                                    )
                                  }

                                  else{

                                    var totalString = ""

                                    // lets get the dead prog langs in a str format fromt he deadProgrammingLang state

                                    if(deadProgrammingLang.length >2){// if 3 dead prog lang then 1 comma and 1 &

                                    const firstPartStringCommas = deadProgrammingLang.slice(0,-1).join(", ")

                                    const lastPartStringWithAnd = deadProgrammingLang[deadProgrammingLang.length-1]

                                     totalString = "Farewell " + firstPartStringCommas + " & "+  lastPartStringWithAnd + " 🫡"

                                    

                                    }

                                    else if(deadProgrammingLang.length>0){

                                       totalString =  `Farewell ${deadProgrammingLang.join(" & ")} 🫡`
                                    }
                                    
                                    if(totalString.length>1){

                                    return(
                                      <div className="progLangDeadNotice">
                                        {/* we will show the prog lang that are dead. like how it shows in the figma file */}
                                        {/* eg- “Farewell HTML & CSS” 🫡  */}

                                        <p>{totalString}</p>
                                        

                                      </div>
                                    )

                                  }

                                  else {

                                    return(
                                        <div className="gameWonLostEl">
                                        {/* we will show the prog lang that are dead. like how it shows in the figma file */}
                                        {/* eg- “Farewell HTML & CSS” 🫡  */}

                                        
                                        

                                      </div>
                                      
                                    )
                                  }


                                  }

                }



    function playNewGame(){

      setChosenWord(getRandomWordArray())
      setCorrrectGuesses(0)
      setWrongGuesses(0)
      setGameLost(false)
      setGameWon(false)

      setLetterGuessedCorrectArray([])

      setLetterGuessedWrongArray([])

      setProgrammingLanguagesArray(["CSS", "HMTL", "Javascript",                                                                                                    
                                                                                                "React",
                                                                                                "Typescript",
                                                                                                "Node.js",
                                                                                                "Python",
                                                                                                "Ruby",
                                                                                                "Assembly"])

      setDeadProgrammingLang([])                                                                                                

                                                                                                


      

      

    }

        

  

  return (

    <main>
    
      <h1>Assembly: Endgame</h1>
      <p className="guessWord">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>

      <div className="">
        {gameLostWonNotice()}
      </div>


      <div id="programmingblocksElm">
          {programmingLblock}

      </div>

      <div id="letterfillboxes">

          {fillanswerletterboxword}
          
      </div>

      <div id="optionsallLetterboxes">
          
          {letteroptionsElements}
        
      </div>

      {(gameLost || gameWon) && (<button className="newgame" onClick={()=> playNewGame()} >New Game</button> )}


            
    </main>
  )
}

export default App

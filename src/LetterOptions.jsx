import { useState } from "react"

export default function LetterOptions(props) {


    


    function letterClick(){

        console.log("letter has been clicked and we guessed the letter so we will call the AlphabetGuessedCorrect function in App.jsx")
        props.letterGuessed()
        
    }

    

            const styles = {
        backgroundColor: props.isCorrect ? "#10A95B" 
                       : props.isWrong   ? "#EC5D49" 
                       : ""
    }



    return (

        <button style= {styles} className="letterElm"  onClick={letterClick}> {props.fillLetter}</button>



    )


}

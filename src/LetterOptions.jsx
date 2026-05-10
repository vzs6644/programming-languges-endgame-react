export default function LetterOptions(props) {


    


    function letterClick(){

        console.log("letter has been clicked and we guessed the letter so we will call the AlphabetGuessedCorrect function in App.jsx")
        props.letterClickedCheckAnswer()
        
    }

    

            const styles = {
        backgroundColor: props.guessedCorrect ? "#10A95B" : 
                         props.guessedWrong ? "#EC5D49" :
                         ""
                      
    }



    return (

        <button style= {styles} className="letterElm"  onClick={letterClick} disabled={props.guessedCorrect || props.guessedWrong || props.gameEnded}> {props.fillLetter}</button>



    )


}

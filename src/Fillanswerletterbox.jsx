import { useState } from "react"

export default function Fillanswerletterbox(props){

    // we ran into some issue. we had to elevate the guessed letter state to App.jsx.
    // this problem helped me learn about where to declare state correctly. 
    // const [letterGuessed, setLetterGuessed] = useState(true)




    return(
        <span className="fillanswerletterbox">
            {props.letterGuessed?props.fillletter:""}
        </span>
    )
}
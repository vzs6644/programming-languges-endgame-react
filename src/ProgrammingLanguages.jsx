export default function ProgrammingLanguages(props){



    return (

        <span className="programmingLBlock disabled" id={props.language === "Node.js" ? "node" : props.language}> 
        
        {props.language}
        
        </span>

    )
}
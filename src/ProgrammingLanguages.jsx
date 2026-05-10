export default function ProgrammingLanguages(props){

    const classnames = `programmingLBlock ${
    props.isDeadProgramLang ? "dead" : ""
}`

    // const deadOrNot = props.isDeadProgramLang?`dead`:``

    return (

        <span className = {classnames} id={props.language === "Node.js" ? "node" : props.language}> 
        
        {props.language}
        
        </span>

    )
}
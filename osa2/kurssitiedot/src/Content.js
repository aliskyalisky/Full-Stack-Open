import Part from "./Part"

const Content = (props) => {
    return (
        <ul>
            {props.osat.map(part => <Part key={part.id} nimi={part.name} teht={part.exercises}/>)}
           
        </ul>
    )
}

export default Content
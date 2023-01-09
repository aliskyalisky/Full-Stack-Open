import Part from "./Part"

const Content = (props) => {
    const nimet = props.osat.map(kurssi => kurssi.name)
    const tehtavat = props.osat.map(kurssi => kurssi.exercises)
    return (
        <div>
            <Part nimi={nimet[0]} teht={tehtavat[0]}/>
            <Part nimi={nimet[1]} teht={tehtavat[1]}/>
            <Part nimi={nimet[2]} teht={tehtavat[2]}/>
        </div>
    )
}

export default Content
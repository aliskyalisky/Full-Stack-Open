const Total = (props) => {
    const tehtavat = props.osat.map(osa => osa.exercises).reduce((yht, a) => yht + a, 0)
    return (
        <h3>Tehtaviä yhteensä: {tehtavat}</h3>
    )
}

export default Total
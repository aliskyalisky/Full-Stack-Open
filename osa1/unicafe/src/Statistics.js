import StatisticLine from './StatisticLine'

const Statistics = (props) => {
    const good = props.g
    const neutral = props.n
    const bad = props.b
    const total = good + neutral + bad
    const sum = good * 1 + bad * (-1)
    const average = sum / total
    const positive = good / total * 100
    if (total === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <h1>Statistics</h1>
            <StatisticLine text='good' value={good}/>
            <StatisticLine text='neutral' value={neutral}/>
            <StatisticLine text='bad' value={bad}/>
            <StatisticLine text='all' value={total}/>
            <StatisticLine text='average' value={average}/>
            <StatisticLine text='positive' value={positive}/>
        </div>
    )
}

export default Statistics
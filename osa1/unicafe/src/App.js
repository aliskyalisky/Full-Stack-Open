import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)
  

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={addGood} text='good'/>
      <Button handleClick={addNeutral} text='neutral'/>
      <Button handleClick={addBad} text='bad'/>
      <Statistics g={good} n={neutral} b={bad}/>
    </div>
  )
}

export default App

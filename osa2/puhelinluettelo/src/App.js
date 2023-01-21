import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      num: '040-1234543'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      num: newNum
    }
    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
    setPersons(persons.concat(person))
    setNewName('')
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
          filter results: <input value={filter} onChange={handleFilterChange}/>
      <form>
        <h3>Add new</h3>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          number: <input value={newNum} onChange={handleNumChange}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name} {person.num}</li>)}
      </ul>
    </div>
  )

}

export default App
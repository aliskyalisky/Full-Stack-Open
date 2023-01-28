import { useState, useEffect } from 'react'
import personsService from './services/persons'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="noti">
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')
  const [notiMessage, setNotiMessage] = useState(null)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response)
      })
      
  }, [])

  const delPerson = (event) => {
    const personToDelete = persons.find(person => person.id.toString() === event.target.id)
    if (window.confirm(`Are you sure you want to delete ${personToDelete.name}?`)) {
      personsService
        .deletePerson(personToDelete.id)
      setPersons(persons.filter((person) => person.id !== personToDelete.id))
      setNotiMessage(
        `Deleted ${personToDelete.name}`
      )
      setTimeout(() => {
        setNotiMessage(null)
      }, 5000)
  }
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
    personsService
      .create(person)
      .then(response => {
    setPersons(persons.concat(response))
    setNewName('')
    setNotiMessage(
      `Added ${person.name}`
    )
    setTimeout(() => {
      setNotiMessage(null)
    }, 5000)
    })

  }}
  const filteredSearch = persons.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notiMessage}/>
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
        {filteredSearch.map((person) => ( <li key={person.name}>{person.name} {person.num} <button id={person.id} onClick={delPerson}>delete</button></li>))}
      </ul>
    </div>
  )

}

export default App
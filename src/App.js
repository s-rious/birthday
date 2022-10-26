import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <div id="container">
        <h1>{people.length} Birthdays Today</h1>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
        </div>
      </section>
    </main>
  )
}

export default App
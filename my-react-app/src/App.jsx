import { useState, useEffect } from 'react'

import './App.css'

function App() {
 const [users, setUsers] = useState([]);
 const [skip, setSkip] = useState(0);
 const [loading, setLoading] = useState(false);

  return (
    <>
    <div className='App'>
      <header>
      <h1>User Profiles</h1>
    </header>
    <main>
      <div id="user-list-container">
      </div>
      <button id="load-more-btn">Load More</button>
    </main>
    </div>
    </>
  )
}

export default App

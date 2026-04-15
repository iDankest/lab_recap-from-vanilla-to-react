import { useState, useEffect } from 'react'

import './App.css'

function App() {
 const [users, setUsers] = useState([]);
 const [skip, setSkip] = useState(0);
 const [loading, setLoading] = useState(false);
 const limit = 10;

 const fetchUser = async () => {
    setLoading(true);
      const API = `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;
    try {
       const response = await fetch(API);
        const jsonData = await response.json();
        setUsers(prev => [...prev, ...jsonData.users]);

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
 }

 useEffect(() => {{
  fetchUser();
 }}, []);

  return (
    <>
    <div className='App'>
      <header>
      <h1>User Profiles</h1>
    </header>
    <main>
      <div className="user-list-container">
        {users.map((user) =>(
          <div key={user.key} className='user-card'>
            <img src={user.image} alt="user.firstName" />
            <p>
              {user.firstName} {user.lastName}
            </p>

          </div>
        ))}
      </div>
      <button id="load-more-btn" onClick={fetchUser} disabled={loading}>
        {loading ? "loading..." : "Load More"}
        </button>
    </main>
    </div>
    </>
  )
}

export default App

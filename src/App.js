import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
          const resp = await axios.get('http://localhost:5000/api');
          setBackendData(resp.data)
      } catch (err) {
          console.error(err);
      }
    };
    sendGetRequest();
  }, [])

  return (
    <div>
      {( typeof backendData.users === 'undefined' ) ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, index) => (
          <p key={index}>{user}</p>
        ))
      )}
    </div>
  )
}

export default App

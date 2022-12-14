import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/Home.css'
// import { toast } from 'react-toastify';
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  const [backendData, setBackendData] = useState([{}])

  const sendGetRequest = async () => {
    try {
        const resp = await axios.get('http://localhost:5000/api/get');
        setBackendData(resp.data)
    } catch (err) {
        console.error(err);
    }
  };
  
  useEffect(() => {
    sendGetRequest();
  }, [])

  return (
    <div>
      <Header />

      <h1>Home</h1>

      <h2>Users :</h2>

      { ( backendData === [] ) ? 
        (<p>Loading...</p>) :
        (backendData.map((user, index) => (
          <div key={index}>
            <br />
            <p>{user.userid}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>

            <div className='buttons'>
              <Link to={`/edit/${user.userid}`}>
                <button>Edit</button>
              </Link>

              <button>Delete</button>
              
              <Link to={`/user/${user.userid}`}>
                <button>View</button>
              </Link>
            </div>
            <br />
          </div>
        )))
      }

      <Footer />
    </div>
  )
}

export default Home;

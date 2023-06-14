import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listofUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");


  useEffect(() => {
    // Fetch data from the API endpoint
    Axios.get("http://localhost:3001/getUsers")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  const createUser = () => {
    
    Axios.post("http://localhost:3001/createUser", {
      // name of the state
      name, 
      age, 
      username,
    }).then((response) => {
      setListOfUsers([...listofUsers, {
        // name of the state
        name, 
        age, 
        username,
      }])
      alert("You have created a new user on the abrar app")
    });

  }
  // post requests connects the frontend to the backend
  return (
    <div className="App">
      <div className="usersDisplay">
        {listofUsers.map((user) => (
          <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Username: {user.username}</h1>
          </div>
        ))}
      </div>

    <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      <button onClick={createUser}> create user </button>
    </div>

    </div>
  );
}

export default App;

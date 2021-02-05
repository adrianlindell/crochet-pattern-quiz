import React, { useState } from "react";
import './App.css';
import Form from "./components/Form";
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState();

  return (
    <div className="App">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <h1>
        {/*Quiz title*/}
        Which pattern matches your personality?
      </h1>
      <h2>
        {/*Quiz description/instructions*/}
        Find out which crochet animal matches your personality by answering these 4 questions.
      </h2>
      <Form />
      <div className="GoogleOAuth">
        <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)}/>
        {loggedIn ? <p>Hello {name}</p> : <p>Not logged in</p> }
        <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)}/>
      </div>
    </div>
  );
}

export default App;

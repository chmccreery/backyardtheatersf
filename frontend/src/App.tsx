import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchHello, fetchWorld } from './api';

function App() {

  const [mystr, setMystr] = useState('');

  useEffect(() => {
    async function getStr () {
      const hello = await fetchHello();
      const world = await fetchWorld();
      setMystr(`${hello}, ${world}!`);
    }
    getStr();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. {mystr}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

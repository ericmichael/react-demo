import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
        <h1>Welcome, Eric</h1>
        <h3>Today's Weather: Sunny</h3>
        <h3>My Favorite Foods:</h3>
        <ul>
          <li>Tacos ****</li>
          <li>Burgers ***</li>
          <li>Pizza</li>
        </ul>

        <h3>Todo:</h3>
        <ul>
          <li>Take out the trash <input type="checkbox" checked></input></li>
          <li>Walk the dog <input type="checkbox"></input></li>
        </ul>
    </div>
  );
}

export default App;

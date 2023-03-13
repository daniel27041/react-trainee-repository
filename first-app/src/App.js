import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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


    Készíteni egy alkalmazást, ami egy véletlenszerű ételnek a nevét, az elkészítését és a hozzávalóit megjeleníti a felületen szöveges formában.

    Weboldal:  https://www.themealdb.com/api.php?ref=apilist.fun

    Egy véletlenszerű étel a lekéréséhez URL:
    https://www.themealdb.com/api/json/v1/1/random.php

    Felhasználandó mezők a válaszból:
    "strMeal" - étel neve
    "strInstructions" - elkészítés leírás
    "strIngredient1",...,"strIngredient20" - mezők a hozzávalókhoz
    "strMeasure1",...,"strMeasure20" - mezők az egyes hozzávalók mennyiségeihez
    </div>
  );
}

export default App;

import React, {useState, useEffect } from "react";
import "./App.css";

function App() {
  const [meal, setMeal] = useState({})

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((resp) => resp.json())
      .then((meals) => {
        let mealItem = meals.meals[0];
        setMeal(mealItem);
      });
  }, []);
 
 const mealInfo =()=>{
  for(let i=1;i<=20;i++){
    console.log(meal["strIngredient" + i]+ " " + meal["strMeasure" + i])
  }
 }

  return (
    <div className="App">
      {console.log(meal.strMeal)}
      {console.log(meal.strInstructions)}
      {mealInfo()}
      
      {/* {meals.map((meals) => {
        return(
          <App
          id ={meals.idMeal}
          />
        );
      })} */}
      <h3>Don't know what to eat?</h3>
      <h4>Click here and get a random meal!</h4>
      <button className="button-primary" id="get-meal">
        Create meal
      </button>
      <div id="meal" className="row-meal"></div>
    </div>
  );
}
/*Készíteni egy alkalmazást, ami egy véletlenszerű ételnek a nevét, az elkészítését és a hozzávalóit megjeleníti a felületen szöveges formában.

    Weboldal:  https://www.themealdb.com/api.php?ref=apilist.fun

    Egy véletlenszerű étel a lekéréséhez URL:
    https://www.themealdb.com/api/json/v1/1/random.php

    Felhasználandó mezők a válaszból:
    "strMeal" - étel neve
    "strInstructions" - elkészítés leírás
    "strIngredient1",...,"strIngredient20" - mezők a hozzávalókhoz
    "strMeasure1",...,"strMeasure20" - mezők az egyes hozzávalók mennyiségeihez
    
*/

export default App;

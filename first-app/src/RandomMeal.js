/*import './App.css';
import React, { Component } from 'react';

get_meal_btn.addEventListener('click', () => {
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(res => {
  RandomMeal(res.meals[0]);
})
.catch(e => {
    console.warn(e);
});


 get_meal_btn = document.getElementById('get_meal');
 meal_container = document.getElementById('meal');


export default RandomMeal = (meal) => {
    const ingredients = [];

    for(let i =0;i<= 20;i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
        }
        else{
            break;
        }
    }

    const mealGenerator = `
		<div classname="row">
			<div classname="columns five">
				<img src="${meal.strMealThumb}" alt="Meal Image">
				${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
				${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
			</div>
			<div classname="columns seven">
				<h4>${meal.strMeal}</h4>
				<p>${meal.strInstructions}</p>
			</div>
		</div>
	`;
	
	meal_container.innerHTML = mealGenerator;
}*/
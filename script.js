// INSTRUCTIONS
// Create a Recipe App by integrating the "TheMealDB" API's random recipe endpoint.
// When the page first loads, it should display a random recipe, 
// complete with a picture of the meal, name of the meal, 
// a button to watch the YouTube video, and the instructions of how to make the meal, 
// along with the list of ingredients.
// When a user clicks a button called "new recipe", 
// it should show a new random and update the content on the page using JavaScript.


// SELECTORS
const recipeList = document.querySelector(".recipe-list");
const randomButton = document.querySelector(".random-button");

// DIV PARENT 
// Create recipe DIV
let recipeDiv = document.createElement("div");
recipeDiv.classList.add("recipe-div");

// FUNCTIONS

// Create Title
const newTitle = (title) => {
	const recipeTitle = document.createElement("h1");
	recipeTitle.innerText = title;
	recipeTitle.classList.add("recipe-title");
	recipeDiv.appendChild(recipeTitle);
};

// Create Image
const newImage = (img) => {
	const recipeImage = document.createElement("img");
	recipeImage.src = img;
	recipeImage.classList.add("recipe-img");
	recipeDiv.appendChild(recipeImage);
};

// Create Video
const newVideo = (vid) => {
	// Create YouTube link
	const youTubeLink = document.createElement("a");
	youTubeLink.setAttribute("href", vid);
	// Create YouTube button
	const youTubeButton = document.createElement("button");
	youTubeButton.innerText = "watch video";
	youTubeButton.classList.add("video");
	youTubeLink.appendChild(youTubeButton);
	recipeDiv.appendChild(youTubeLink);
};

// Create Instructions
const newInstructions = (instruct) => {
	const recipeInstructions = document.createElement("p");
	recipeInstructions.innerText = instruct;
	recipeInstructions.classList.add("recipe-instructions");
	recipeDiv.appendChild(recipeInstructions);
};


// API call, ingredient list, and append children 
const randomRecipe = () => {
	axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
        	let recipeArray = []
        	const recipeText = response.data.meals[0];
	    	recipeArray.push(recipeText);
	    	localStorage.setItem("recipeStorage", JSON.stringify(recipeArray));

	    	// Call functions
			newTitle(recipeArray[0].strMeal);
			newImage(recipeArray[0].strMealThumb);
			newVideo(response.data.meals[0].strYoutube);
			newInstructions(recipeArray[0].strInstructions);

	    	// Create measurements & ingredients list
	    	const ingredientsList = document.createElement("ul");
	    	ingredientsList.classList.add("ingredient-list");
			for (let i = 1; i <= 20; i++) {
				let measures = recipeArray[0]["strMeasure" + i];
				let ingredients = recipeArray[0]["strIngredient" + i];
				let mIngredients = measures.toString() + " " + ingredients.toString()
				if (ingredients === "" || null) {
				} else {
					const recipeIngredients = document.createElement("li");
					recipeIngredients.innerText = mIngredients
			    	recipeIngredients.classList.add("ingredients");
		    		ingredientsList.appendChild(recipeIngredients);
				};
			};
	    	recipeDiv.appendChild(ingredientsList);

	    	// Append all newly created elements to list
	    	recipeList.appendChild(recipeDiv);
        });  
};

const newRecipe = () => {
	document.querySelector(".recipe-div").innerHTML = "";
	randomRecipe();
};


// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", randomRecipe);
randomButton.addEventListener("click", newRecipe);
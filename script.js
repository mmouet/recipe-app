// INSTRUCTIONS
// Create a Recipe App by integrating the "TheMealDB" API's random recipe endpoint.
// When the page first loads, it should display a random recipe, 
// complete with a picture of the meal, name of the meal, 
// a button to watch the YouTube video, and the instructions of how to make the meal, 
// along with the list of ingredients.
// When a user clicks a button called "new recipe", 
// it should show a new random and update the content on the page using JavaScript.


// PLANNING: 
// Use axios.get to retrieve API
// On page load, load a random recipe + button for new random recipe
// Push API items into HTML elements? 


// SELECTORS
const recipeList = document.querySelector(".recipe-list");
const randomButton = document.querySelector(".random-button");
const refreshButton = document.querySelector(".refresh-button");


// FUNCTIONS
const randomRecipe = () => {
	axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
        	let recipeArray = []
        	const recipeText = response.data.meals[0];
	    	recipeArray.push(recipeText);
	    	localStorage.setItem("recipeStorage", JSON.stringify(recipeArray));

	    	// Create recipe DIV
			const recipeDiv = document.createElement("div");
			recipeDiv.classList.add("recipe-div");

			// Create recipe title
	    	const recipeTitle = document.createElement("h1");
	    	recipeTitle.innerText = recipeArray[0].strMeal;
	    	recipeTitle.classList.add("recipe-title");
	    	recipeDiv.appendChild(recipeTitle);

	    	// Create image 
	    	const recipeImage = document.createElement("img");
	    	recipeImage.src = recipeArray[0].strMealThumb;
	    	recipeImage.classList.add("recipe-img");
	    	recipeDiv.appendChild(recipeImage);

	    	// Create YouTube link
	    	const youTubeLink = document.createElement("a");
	    	youTubeLink.setAttribute("href", response.data.meals[0].strYoutube);

	    	// Create YouTube button
	    	const youTubeButton = document.createElement("button");
	    	youTubeButton.innerText = "watch video";
	    	youTubeButton.classList.add("video");
	    	youTubeLink.appendChild(youTubeButton);
	    	recipeDiv.appendChild(youTubeLink);

	    	// Create recipe instructions
	    	const recipeInstructions = document.createElement("p");
	    	recipeInstructions.innerText = recipeArray[0].strInstructions;
	    	recipeInstructions.classList.add("recipe-instructions");
	    	recipeDiv.appendChild(recipeInstructions);

	    	// Create ingredients & measurement list
	    	const ingredientsList = document.createElement("ul");
	    	ingredientsList.classList.add("ingredient-list");

	    	// Measurement variables
	    	const measure1 = recipeArray[0].strMeasure1.toString();
	    	const measure2 = recipeArray[0].strMeasure2.toString();
	    	const measure3 = recipeArray[0].strMeasure3.toString();
	    	const measure4 = recipeArray[0].strMeasure4.toString();
	    	const measure5 = recipeArray[0].strMeasure5.toString();
	    	const measure6 = recipeArray[0].strMeasure6.toString();
	    	const measure7 = recipeArray[0].strMeasure7.toString();
	    	const measure8 = recipeArray[0].strMeasure8.toString();
	    	const measure9 = recipeArray[0].strMeasure9.toString();
	    	const measure10 = recipeArray[0].strMeasure10.toString();
	    	const measure11 = recipeArray[0].strMeasure11.toString();
	    	const measure12 = recipeArray[0].strMeasure12.toString();
	    	const measure13 = recipeArray[0].strMeasure13.toString();
	    	const measure14 = recipeArray[0].strMeasure14.toString();
	    	const measure15 = recipeArray[0].strMeasure15.toString();
	    	const measure16 = recipeArray[0].strMeasure16.toString();
	    	const measure17 = recipeArray[0].strMeasure17.toString();
	    	const measure18 = recipeArray[0].strMeasure18.toString();
	    	const measure19 = recipeArray[0].strMeasure19.toString();
	    	const measure20 = recipeArray[0].strMeasure20.toString();

	    	// Ingredient variables 
			let i1 = recipeArray[0].strIngredient1.toString();
			let i2 = recipeArray[0].strIngredient2.toString();
			let i3 = recipeArray[0].strIngredient3.toString();
			let i4 = recipeArray[0].strIngredient4.toString();
			let i5 = recipeArray[0].strIngredient5.toString();
			let i6 = recipeArray[0].strIngredient6.toString();
			let i7 = recipeArray[0].strIngredient7.toString();
			let i8 = recipeArray[0].strIngredient8.toString();
			let i9 = recipeArray[0].strIngredient9.toString();
			let i10 = recipeArray[0].strIngredient10.toString();
			let i11 = recipeArray[0].strIngredient11.toString();
			let i12 = recipeArray[0].strIngredient12.toString();
			let i13 = recipeArray[0].strIngredient13.toString();
			let i14 = recipeArray[0].strIngredient14.toString();
			let i15 = recipeArray[0].strIngredient15.toString();
			let i16 = recipeArray[0].strIngredient16.toString();
			let i17 = recipeArray[0].strIngredient17.toString();
			let i18 = recipeArray[0].strIngredient18.toString();
			let i19 = recipeArray[0].strIngredient19.toString();
			let i20 = recipeArray[0].strIngredient20.toString();


			// 1 Measurement & Ingredient
			if (i1 === "" || null) {
			} else {
				const ingredients1 = document.createElement("li");
				ingredients1.innerText = measure1 + " " + i1;
		    	ingredients1.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients1);
			};

			// 2 Measurement & Ingredient
			if (i2 === "" || null) {
			} else {
				const ingredients2 = document.createElement("li");
				ingredients2.innerText = measure2 + " " + i2;
		    	ingredients2.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients2);
			};

			// 3 Measurement & Ingredient
			if (i3 === "" || null) {
			} else {
				const ingredients3 = document.createElement("li");
				ingredients3.innerText = measure3 + " " + i3;
		    	ingredients3.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients3);
			};

			// 4 Measurement & Ingredient
			if (i4 === "" || null) {
			} else {
				const ingredients4 = document.createElement("li");
				ingredients4.innerText = measure4 + " " + i4;
		    	ingredients4.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients4);
			};

			// 5 Measurement & Ingredient
			if (i5 === "" || null) {
			} else {
				const ingredients5 = document.createElement("li");
				ingredients5.innerText = measure5 + " " + i5;
		    	ingredients5.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients5);
			};

			// 6 Measurement & Ingredient
			if (i6 === "" || null) {
			} else {
				const ingredients6 = document.createElement("li");
				ingredients6.innerText = measure6 + " " + i6;
		    	ingredients6.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients6);
			};

			// 7 Measurement & Ingredient
			if (i7 === "" || null) {
			} else {
				const ingredients7 = document.createElement("li");
				ingredients7.innerText = measure7 + " " + i7;
		    	ingredients7.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients7);
			};

			// 8 Measurement & Ingredient
			if (i8 === "" || null) {
			} else {
				const ingredients8 = document.createElement("li");
				ingredients8.innerText = measure8 + " " + i8;
		    	ingredients8.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients8);
			};

			// 9 Measurement & Ingredient
			if (i9 === "" || null) {
			} else {
				const ingredients9 = document.createElement("li");
				ingredients9.innerText = measure9 + " " + i9;
		    	ingredients9.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients9);
			};

			// 10 Measurement & Ingredient
			if (i10 === "" || null) {
			} else {
				const ingredients10 = document.createElement("li");
				ingredients10.innerText = measure10 + " " + i10;
		    	ingredients10.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients10);
			};

			// 11 Measurement & Ingredient
			if (i11 === "" || null) {
			} else {
				const ingredients11 = document.createElement("li");
				ingredients11.innerText = measure11 + " " + i11;
		    	ingredients11.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients11);
			};

			// 12 
			if (i12 === "" || null) {
			} else {
				const ingredients12 = document.createElement("li");
				ingredients12.innerText = measure12 + " " + i12;
		    	ingredients12.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients12);
			};

			// 13 Measurement & Ingredient
			if (i13 === "" || null) {
			} else {
				const ingredients13 = document.createElement("li");
				ingredients13.innerText = measure13 + " " + i13;
		    	ingredients13.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients13);
			};

			// 14 Measurement & Ingredient
			if (i14 === "" || null) {
			} else {
				const ingredients14 = document.createElement("li");
				ingredients14.innerText = measure14 + " " + i14;
		    	ingredients14.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients14);
			};

			// 15 Measurement & Ingredient
			if (i15 === "" || null) {
			} else {
				const ingredients15 = document.createElement("li");
				ingredients15.innerText = measure15 + " " + i15;
		    	ingredients15.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients15);
			};

			// 16 Measurement & Ingredient
			if (i16 === "" || null) {
			} else {
				const ingredients16 = document.createElement("li");
				ingredients16.innerText = measure16 + " " + i16;
		    	ingredients16.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients16);
			};

			// 17 Measurement & Ingredient
			if (i17 === "" || null) {
			} else {
				const ingredients17 = document.createElement("li");
				ingredients17.innerText = measure17 + " " + i17;
		    	ingredients17.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients17);
			};

			// 18 Measurement & Ingredient
			if (i18 === "" || null) {
			} else {
				const ingredients18 = document.createElement("li");
				ingredients18.innerText = measure18 + " " + i18;
		    	ingredients18.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients18);
			};

			// 19 Measurement & Ingredient
			if (i19 === "" || null) {
			} else {
				const ingredients19 = document.createElement("li");
				ingredients19.innerText = measure19 + " " + i19;
		    	ingredients19.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients19);
			};

			// 20 Measurement & Ingredient
			if (i20 === "" || null) {
			} else {
				const ingredients20 = document.createElement("li");
				ingredients20.innerText = measure20 + " " + i20;
		    	ingredients20.classList.add("ingredients");
	    		ingredientsList.appendChild(ingredients20);
			};


	    	// Append ingredients to recipeDiv
	    	recipeDiv.appendChild(ingredientsList);

	    	// Append all newly created elements to list
	    	recipeList.appendChild(recipeDiv);
        });  
};


const refreshPage = () => {
	location.reload();
};


// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", randomRecipe);
randomButton.addEventListener("click", randomRecipe);
refreshButton.addEventListener("click", refreshPage);
// -- DOM --//

// container <ul> for tag(s)
const tagsList = document.getElementById('search-tags-list')

// -- Main Search -- //

// compares the user's input with a recipe list; returns a list sorted according to user input
function filterByFieldValue(userInput, arrOfRecipes) {
  closeAdvancedFilters()

  let results = []

  for (const r of arrOfRecipes) {
    // si le nom d'une recette match l'input
    if (r.name.toLowerCase().includes(userInput.toLowerCase())) {
      results.push(r)
    }
    // si un terme de la description match l'input
    if (r.description.toLowerCase().includes(userInput.toLowerCase())) {
      results.push(r)
    }
    for (const i of r.ingredients) {
      // si l'un des ingredients contenus dans la liste des ingrédients match l'input
      if (i.ingredient.toLowerCase().includes(userInput.toLowerCase())) {
        results.push(r)
      }
    }
  }

  // removes duplicates
  const recipesFromMainSearch = [...new Set(results)]

  if (mainSearch.value.length >= 3) {
    // user entered at least 3 characters
    recipesContainer.innerHTML = ''
    recipesFromMainSearch.forEach((recipe) => {
      createNewRecipeCard(recipe)
    })
    recipesDisplayed = recipesFromMainSearch
    recipesToPickFrom = recipesFromMainSearch
  } else if (mainSearch.value.length < 3 && filteredRecipes === undefined) {
    // user entered less than 3 characters and the recipes are not filtered by tags
    recipesContainer.innerHTML = ``
    defaultRecipesDisplay()
    recipesDisplayed = recipes
    recipesToPickFrom = recipes
  } else if (mainSearch.value.length < 3 && filteredRecipes != undefined) {
    // user entered less than 3 characters and the array is filtered by at least one tag
    recipesContainer.innerHTML = ``
    filteredRecipes.forEach((recipe) => {
      createNewRecipeCard(recipe)
    })
    recipesDisplayed = recipes
    recipesToPickFrom = recipes
  }

  // if there are no recipes that match any user input, displays an error message
  checkIfArrayIsEmpty(recipesFromMainSearch)
  if (filteredRecipes != undefined) {
    checkIfArrayIsEmpty(filteredRecipes)
  }
}

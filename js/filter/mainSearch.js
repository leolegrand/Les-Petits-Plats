// -- DOM --//

// container <ul> for tag(s)
const tagsList = document.getElementById('search-tags-list')

// -- Main Search -- //

// compares the user's input with a recipe list; returns a list sorted according to user input
function filterByFieldValue(userInput, arrOfRecipes) {
  closeAdvancedFilters()

  const matchingDescriptions = arrOfRecipes.filter((r) =>
    r.description.toLowerCase().includes(userInput.toLowerCase())
  )

  const matchingNames = arrOfRecipes.filter((r) =>
    r.name.toLowerCase().includes(userInput.toLowerCase())
  )

  const matchingIngredients = arrOfRecipes
    .map((r) => {
      if (
        r.ingredients.some((i) =>
          i.ingredient.toLowerCase().includes(userInput.toLowerCase())
        )
      ) {
        return r
      }
    })
    .filter((r) => r)

  // merge every matching results into the same array
  const everyMatchingResults = matchingNames
    .concat(matchingIngredients)
    .concat(matchingDescriptions)

  // remove duplicates
  const recipesFromMainSearch = [...new Set(everyMatchingResults)]

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

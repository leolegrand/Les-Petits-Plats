const tagsList = document.getElementById('search-tags-list')
// function called onKeyUp after each input in the main search

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

  const everyMatchingResults = matchingNames
    .concat(matchingIngredients)
    .concat(matchingDescriptions)

  const recipesFromMainSearch = [...new Set(everyMatchingResults)]

  if (mainSearch.value.length >= 3) {
    recipesContainer.innerHTML = ''
    recipesFromMainSearch.forEach((recipe) => {
      createNewRecipeCard(recipe)
    })
    recipesDisplayed = recipesFromMainSearch
    recipesToPickFrom = recipesFromMainSearch
  } else if (mainSearch.value.length < 3 && filteredRecipes === undefined) {
    recipesContainer.innerHTML = ``
    defaultRecipesDisplay()
    recipesDisplayed = recipes
    recipesToPickFrom = recipes
  } else if (mainSearch.value.length < 3 && filteredRecipes != undefined) {
    recipesContainer.innerHTML = ``
    filteredRecipes.forEach((recipe) => {
      createNewRecipeCard(recipe)
    })
    recipesDisplayed = recipes
    recipesToPickFrom = recipes
  }
  checkIfArrayIsEmpty(recipesFromMainSearch)
}

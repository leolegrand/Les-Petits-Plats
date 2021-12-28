const mainSearch = document.getElementById('main-search')
// function called onKeyUp after each input in the main search

function filterByFieldValue(userInput, arrOfRecipes) {
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

  if (mainSearch.value.length > 3) {
    recipesContainer.innerHTML = ''
    recipesFromMainSearch.forEach((recipe) => {
      createNewRecipeCard(recipe)
    })
    recipesDisplayed = recipesFromMainSearch
    // const { everyUstensils } = getThings(recipesDisplayed)
  } else {
    recipesContainer.innerHTML = ``
    defaultRecipesDisplay()
    recipesDisplayed = recipes
  }

  checkIfArrayIsEmpty(recipesFromMainSearch)
}

mainSearch.addEventListener('keyup', () => {
  filterByFieldValue(mainSearch.value, recipesDisplayed)
  // const { everyUstensils } = getThings(recipesDisplayed)
})

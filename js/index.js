// DOM
let recipesDisplayed
let recipesFiltered
let recipesToPickFrom
const recipesContainer = document.getElementById('recipes-container')
const mainSearch = document.getElementById('main-search')

// get all recipes from data and create a new recipe card with each one.
function defaultRecipesDisplay() {
  recipes.forEach((recipe) => {
    createNewRecipeCard(recipe)
    recipesToPickFrom = recipes
  })
}

defaultRecipesDisplay()
recipesDisplayed = recipes
checkIfArrayIsEmpty(recipesDisplayed)

mainSearch.addEventListener('keyup', () => {
  if (tagsList.childElementCount === 0) {
    filterByFieldValue(mainSearch.value, recipes)
  } else {
    filterByFieldValue(mainSearch.value, filteredRecipes)
    // pb ici?
    tagsList.childNodes.forEach((tag) => {
      filterByTags(tag)
    })
  }
})

// -- DOM -- //

// contains recipes ----
let recipesDisplayed
// contains recipes sorted by tag
let recipesFiltered
// contains the displayed recipes
let recipesToPickFrom

const recipesContainer = document.getElementById('recipes-container')
const mainSearch = document.getElementById('main-search')

// -- APP -- //

// displays all the recipes contained in the data
function defaultRecipesDisplay() {
  recipes.forEach((recipe) => {
    createNewRecipeCard(recipe)
    recipesToPickFrom = recipes
  })
}

// inject all recipes
defaultRecipesDisplay()
// since there is no input or tag, the value of recipesDisplayed contains all recipes
recipesDisplayed = recipes
// PROBABLY UNNECESSARY
//checkIfArrayIsEmpty(recipesDisplayed)

// listen to change inside the main search
mainSearch.addEventListener('keyup', () => {
  if (tagsList.childElementCount === 0) {
    // if there is not tag applied, filter all recipes
    filterByFieldValue(mainSearch.value, recipes)
  } else {
    // else, filter the recipes already filtered by tags
    filterByFieldValue(mainSearch.value, filteredRecipes)
    tagsList.childNodes.forEach((tag) => {
      filterByTags(tag)
    })
  }
})

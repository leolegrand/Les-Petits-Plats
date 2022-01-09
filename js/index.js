// -- DOM -- //

// contains recipes ----
let recipesFromInput
// contains the displayed recipes
let recipesDisplayed

const recipesContainer = document.getElementById('recipes-container')
const mainSearch = document.getElementById('main-search')

// -- APP -- //

// displays all the recipes contained in the data
function defaultRecipesDisplay() {
  recipes.forEach((recipe) => {
    createNewRecipeCard(recipe)
    recipesDisplayed = recipes
  })
}

// inject all recipes
defaultRecipesDisplay()
// since there is no input or tag, the value of recipesFromInput contains all recipes
recipesFromInput = recipes
// PROBABLY UNNECESSARY
//checkIfArrayIsEmpty(recipesFromInput)

// listen to change inside the main search
mainSearch.addEventListener('keyup', () => {
  if (tagsList.childElementCount === 0) {
    // if there is not tag applied, filter all recipes
    filterByFieldValue(mainSearch.value, recipes)
  } else {
    // else, filter the recipes already filtered by tags
    filterByFieldValue(mainSearch.value, recipesFromTags)
    tagsList.childNodes.forEach((tag) => {
      filterByTags(tag)
    })
  }
})

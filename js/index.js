let recipesDisplayed
let recipesFiltered

const recipesContainer = document.getElementById('recipes-container')

// recipes displayed by default
function defaultRecipesDisplay() {
  recipes.forEach((recipe) => {
    createNewRecipeCard(recipe)
  })
}

function getThings(arrOfRecipes) {
  let everyIngredients = arrOfRecipes.flatMap((r) =>
    r.ingredients.map((i) => i.ingredient)
  )
  let everyUstensils = arrOfRecipes.flatMap((r) => r.ustensils)
  let everyAppliances = arrOfRecipes.map((r) => r.appliance)

  everyIngredients = [...new Set(everyIngredients)]
  everyAppliances = [...new Set(everyAppliances)]
  everyUstensils = [...new Set(everyUstensils)]

  return { everyAppliances, everyUstensils, everyIngredients }
}

function checkIfArrayIsEmpty(arr) {
  let noResults = document.createElement('p')
  noResults.innerHTML = `<p>  Aucune recette ne correspond à votre critère… vous pouvez
  chercher « tarte aux pommes », « poisson », etc.
   </p>`
  if (arr.length == 0) {
    recipesContainer.appendChild(noResults)
  } else {
    if (noResults === true) {
      recipesContainer.removeChild(noResults)
    }
  }
}

const { everyIngredients, everyAppliances, everyUstensils } = getThings(recipes)

defaultRecipesDisplay()
recipesDisplayed = recipes
checkIfArrayIsEmpty(recipesDisplayed)

// fonction refresh list

// supprimer les tags

// créer l'autre algo

// faire l'algorigramme

// comparer les 2 algos

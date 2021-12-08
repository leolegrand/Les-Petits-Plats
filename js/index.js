const recipesContainer = document.getElementById('recipes-container')

const everyIngredients = recipes.flatMap((r) =>
  r.ingredients.map((i) => i.ingredient)
)
const everyUstensils = recipes.flatMap((r) => r.ustensils)
const everyAppliance = recipes.map((r) => r.appliance)

// recipes displayed by default
recipes.forEach((recipe) => {
  createNewRecipeCard(recipe)
})

// function called onKeyUp after each input in the main search
function filterByFieldValue(field) {
  const userInput = field.value
  const recipesFromMainSearch = recipes.filter((r) =>
    r.name.toUpperCase().includes(userInput.toUpperCase())
  )
  // ) &&
  // recipes.filter((r) =>
  //   r.description.toUpperCase().includes(userInput.toUpperCase())
  // )
  // &&
  // recipes.filter((r) =>
  //   r.ingredients.map((i) =>
  //     i.ingredient.toUpperCase().includes(userInput.toUpperCase())
  //   )
  // )
  console.clear()
  console.log(recipesFromMainSearch)

  recipesContainer.innerHTML = ''
  recipesFromMainSearch.forEach((recipe) => {
    console.log(recipe)
    createNewRecipeCard(recipe)
  })
}

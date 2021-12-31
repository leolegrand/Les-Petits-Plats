// get ustensils, appliances & ingredients from an array of recipes
function getThings(arrOfRecipes) {
  let everyIngredients = arrOfRecipes.flatMap((r) =>
    r.ingredients.map((i) => i.ingredient)
  )
  let everyUstensils = arrOfRecipes.flatMap((r) => r.ustensils)
  let everyAppliances = arrOfRecipes.map((r) => r.appliance)

  // remove duplicates
  everyIngredients = [...new Set(everyIngredients)]
  everyAppliances = [...new Set(everyAppliances)]
  everyUstensils = [...new Set(everyUstensils)]

  return { everyAppliances, everyUstensils, everyIngredients }
}

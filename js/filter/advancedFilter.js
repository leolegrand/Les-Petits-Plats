const tagsList = document.getElementById('search-tags-list')

function ingredientFilter(ing) {
  let selectedIngredient = ing.textContent
  const filteredarr = recipesDisplayed
    .map((r) => {
      if (
        r.ingredients.some((i) =>
          i.ingredient.toLowerCase().includes(selectedIngredient.toLowerCase())
        )
      ) {
        return r
      }
    })
    .filter((r) => r)

  tagsList.innerHTML += `<li class="tag filtering-btn--blue">${selectedIngredient}<img src="./img/icons/cross.svg" alt="cross icon" /></li>`

  recipesContainer.innerHTML = ''
  filteredarr.forEach((recipe) => {
    createNewRecipeCard(recipe)
  })

  checkIfArrayIsEmpty(filteredarr)
  recipesDisplayed = filteredarr
}

function ustensilsFilter(ust) {
  let selectedUstensil = ust.textContent
  const filteredarr = recipesDisplayed.filter((r) => {
    return r.ustensils.includes(selectedUstensil)
  })

  console.log(filteredarr)
  tagsList.innerHTML += `<li class="tag filtering-btn--orange">${selectedUstensil}<img src="./img/icons/cross.svg" alt="cross icon" /></li>`

  recipesContainer.innerHTML = ``
  filteredarr.forEach((recipe) => {
    createNewRecipeCard(recipe)
  })

  checkIfArrayIsEmpty(filteredarr)
  recipesDisplayed = filteredarr
}

function applianceFilter(appl) {
  let selectedAppliance = appl.textContent
  const filteredarr = recipesDisplayed.filter((r) => {
    return r.appliance.toLowerCase().includes(selectedAppliance.toLowerCase())
  })

  tagsList.innerHTML += `<li class="tag filtering-btn--green">${selectedAppliance}<img src="./img/icons/cross.svg" alt="cross icon" /></li>`

  recipesContainer.innerHTML = ``
  filteredarr.forEach((recipe) => {
    createNewRecipeCard(recipe)
  })

  checkIfArrayIsEmpty(filteredarr)
  recipesDisplayed = filteredarr
}

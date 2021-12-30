let filteredArray
let filteredRecipes

function createNewTag(tag, list) {
  closeAdvancedFilters()
  switch (list) {
    case 'ingredient':
      tagsList.innerHTML += `<li class="ingredient tag filtering-btn--blue">${tag.textContent}<img onclick="removeTag(this)" src="./img/icons/cross.svg" alt="cross icon" /></li>`
      break
    case 'ustensil':
      tagsList.innerHTML += `<li class="ustensil tag filtering-btn--orange">${tag.textContent}<img onclick="removeTag(this)" src="./img/icons/cross.svg" alt="cross icon" /></li>`
      break
    case 'appliance':
      tagsList.innerHTML += `<li class="appliance tag filtering-btn--green">${tag.textContent}<img onclick="removeTag(this)" src="./img/icons/cross.svg" alt="cross icon" /></li>`
      break
    default:
      console.log('Something went wrong')
      break
  }

  tagsList.childNodes.forEach((tag) => {
    filterByTags(tag)
  })
}

function removeTag(tag) {
  tag.parentElement.remove()
  if (tagsList.childElementCount === 0) {
    console.log('je supprime le dernier tag')
    defaultRecipesDisplay()
    filteredRecipes = undefined
    closeAdvancedFilters()
  } else {
    tagsList.childNodes.forEach((tag) => {
      filterByTags(tag)
    })
    closeAdvancedFilters()
  }
}

function filterByTags(tag) {
  const tagContent = tag.textContent
  let list

  if (tag.classList.contains('ingredient')) {
    list = 'ingredient'
  } else if (tag.classList.contains('ustensil')) {
    list = 'ustensil'
  } else if (tag.classList.contains('appliance')) {
    list = 'appliance'
  }
  if (tagsList.childElementCount === 1) {
    switch (list) {
      case 'ingredient':
        filteredArray = recipesDisplayed
          .map((r) => {
            if (
              r.ingredients.some((i) =>
                i.ingredient.toLowerCase().includes(tagContent.toLowerCase())
              )
            ) {
              return r
            }
          })
          .filter((r) => r)
        break

      case 'ustensil':
        filteredArray = recipesDisplayed.filter((r) => {
          return r.ustensils.includes(tagContent)
        })
        break

      case 'appliance':
        filteredArray = recipesDisplayed.filter((r) => {
          return r.appliance.toLowerCase().includes(tagContent.toLowerCase())
        })
        break

      default:
        console.log('the function parameters are not respected')
        break
    }

    recipesContainer.innerHTML = ``
    filteredArray.forEach((recipe) => {
      createNewRecipeCard(recipe)
    })

    checkIfArrayIsEmpty(filteredArray)
    filteredRecipes = filteredArray
    recipesToPickFrom = filteredRecipes
  } else {
    switch (list) {
      case 'ingredient':
        filteredArray = filteredRecipes
          .map((r) => {
            if (
              r.ingredients.some((i) =>
                i.ingredient.toLowerCase().includes(tagContent.toLowerCase())
              )
            ) {
              return r
            }
          })
          .filter((r) => r)
        break

      case 'ustensil':
        filteredArray = filteredRecipes.filter((r) => {
          return r.ustensils.includes(tagContent)
        })
        break

      case 'appliance':
        filteredArray = filteredRecipes.filter((r) => {
          return r.appliance.toLowerCase().includes(tagContent.toLowerCase())
        })
        break

      default:
        console.log('the function parameters are not respected')
        break
    }

    recipesContainer.innerHTML = ``
    filteredArray.forEach((recipe) => {
      createNewRecipeCard(recipe)
    })

    checkIfArrayIsEmpty(filteredArray)
    filteredRecipes = filteredArray
    recipesToPickFrom = filteredRecipes
  }
}

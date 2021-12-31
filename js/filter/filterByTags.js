// -- DOM --  /

let filteredArray
let filteredRecipes

// -- TAGS -- //

// function called on click on every item of drop-down button
function createNewTag(tag, list) {
  closeAdvancedFilters()
  // create a tag with a different style according to its list
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
  // refresh the displayed recipes with the newly created tag
  tagsList.childNodes.forEach((tag) => {
    filterByTags(tag)
  })
}

// function called on click on every cross icon of each tags.
function removeTag(tag) {
  // remove the tag
  tag.parentElement.remove()
  if (tagsList.childElementCount === 0) {
    // if there is no tag left
    if (mainSearch.value === '') {
      // && if there is no input from the user, display the defaults recipes
      recipesContainer.innerHTML = ``
      defaultRecipesDisplay()
    } else {
      //&& if there is an user input, filter all the recipes with this input
      filterByFieldValue(mainSearch.value, recipes)
    }
    // since there is no tag filter anymore, reset the value of filteredRecipes
    filteredRecipes = undefined
    closeAdvancedFilters()
  } else {
    // there is at least 1 tag left
    recipesContainer.innerHTML = ``
    // filter with all the tags left
    tagsList.childNodes.forEach((tag) => {
      filterByTags(tag)
    })
    closeAdvancedFilters()
  }
}

// function called when a tag is added or removed
function filterByTags(tag) {
  const tagContent = tag.textContent
  let list

  // adds a different list depending on where the tag comes from
  if (tag.classList.contains('ingredient')) {
    list = 'ingredient'
  } else if (tag.classList.contains('ustensil')) {
    list = 'ustensil'
  } else if (tag.classList.contains('appliance')) {
    list = 'appliance'
  }

  if (tagsList.childElementCount === 1) {
    // if there is only one tag, filter is applied to the recipesDisplayed array
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
    // since there is more than 1 tag, we filter the "already filtered by tag" array
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

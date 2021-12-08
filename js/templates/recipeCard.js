function createNewRecipeCard(r) {
  // Container
  const recipesContainer = document.getElementById('recipes-container')

  // Article
  const recipeCard = document.createElement('article')
  recipeCard.classList.add('recipe-card')

  // Img
  const recipeCardImg = document.createElement('div')
  recipeCardImg.classList.add('recipe-card__img')
  recipeCard.appendChild(recipeCardImg)

  // Body container
  const recipeCardBody = document.createElement('div')
  recipeCardBody.classList.add('recipe-card__body')
  recipeCard.appendChild(recipeCardBody)

  // Header container
  const recipeCardBodyHeader = document.createElement('div')
  recipeCardBodyHeader.classList.add('recipe-card__body-header')
  recipeCardBody.appendChild(recipeCardBodyHeader)

  // Title
  const recipeCardTitle = document.createElement('h2')
  recipeCardTitle.classList.add('recipe-card__title')
  recipeCardTitle.innerHTML = `${r.name}`
  recipeCardBodyHeader.appendChild(recipeCardTitle)

  // Duration
  const recipeCardDuration = document.createElement('span')
  recipeCardDuration.classList.add('recipe-card__duration')
  recipeCardDuration.innerHTML = `<img src="./img/icons/clock.svg" />${r.time} min`
  recipeCardBodyHeader.appendChild(recipeCardDuration)

  // Content container
  const recipeCardBodyContent = document.createElement('div')
  recipeCardBodyContent.classList.add('recipe-card__body-content')
  recipeCardBody.appendChild(recipeCardBodyContent)

  // Ingredients list
  const ingredientsList = document.createElement('ul')
  ingredientsList.classList.add('recipe-card__ingredients-list')
  const ingredients = r.ingredients
  ingredients.forEach((ingredient) => {
    if (ingredient.quantity == null) {
      ingredientsList.innerHTML += `<li class="recipe-card__ingredient">
      <span class="ingredient">${ingredient.ingredient}</span></li>`
    } else if (ingredient.quantity != null && ingredient.unit == null) {
      ingredientsList.innerHTML += `<li class="recipe-card__ingredient">
      <span class="ingredient">${ingredient.ingredient}: </span> ${ingredient.quantity}</li>`
    } else {
      ingredientsList.innerHTML += `<li class="recipe-card__ingredient">
      <span class="ingredient">${ingredient.ingredient}: </span>${ingredient.quantity} ${ingredient.unit}</li>`
    }
  })
  recipeCardBodyContent.appendChild(ingredientsList)

  // Instruction
  const recipeCardInstruction = document.createElement('p')
  recipeCardInstruction.classList.add('recipe-card__instructions')
  recipeCardInstruction.innerHTML = `${r.description}`
  recipeCardBodyContent.appendChild(recipeCardInstruction)

  // Add the new card to the DOM
  recipesContainer.appendChild(recipeCard)
}

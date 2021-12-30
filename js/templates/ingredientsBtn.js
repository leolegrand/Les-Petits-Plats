const filteringIngredientsBtn = document.getElementById('filtering-ingredients')

function createIngredientBtnClosed() {
  const ingredientsBtnClosed = document.createElement('div')
  ingredientsBtnClosed.classList.add('filtering-btn__closed')
  ingredientsBtnClosed.innerHTML = `<p>Ingrédients</p>
    <img src="./img/icons/detail-arrow.svg" alt="icon" id="ingredients-arrow-closed" />`
  filteringIngredientsBtn.appendChild(ingredientsBtnClosed)

  const ingredientArrowClosed = document.getElementById(
    'ingredients-arrow-closed'
  )
  ingredientArrowClosed.addEventListener('click', () => {
    filteringIngredientsBtn.removeChild(ingredientsBtnClosed)
    createIngredientBtnOpen()
  })
}

// Drop-down a research input and a list of INGREDIENTS
// On click: Close the container and display a closed button
function createIngredientBtnOpen() {
  const { everyIngredients } = getThings(recipesToPickFrom)
  const ingredientsBtnOpen = document.createElement('div')
  ingredientsBtnOpen.classList.add('filtering-btn__open')
  ingredientsBtnOpen.innerHTML = `<div class="filtering-btn__search">
                                    <input id="ingredient-search" placeholder="Rechercher un ingrédient"/>
                                    <img src="./img/icons/detail-arrow.svg" id="ingredients-arrow-open"/>
                                  </div>
                                  <ul id="ingredients-list"></ul>`
  filteringIngredientsBtn.appendChild(ingredientsBtnOpen)
  const ingredientsList = document.getElementById('ingredients-list')
  const searchIngredient = document.getElementById('ingredient-search')

  everyIngredients.forEach((ingredient) => {
    if (everyIngredients.indexOf(ingredient) < 30) {
      ingredientsList.innerHTML += `<li onclick="createNewTag(this, 'ingredient')">${ingredient}`
    }
  })

  searchIngredient.addEventListener('keyup', () => {
    let match = everyIngredients.filter((ing) =>
      ing.toLowerCase().includes(searchIngredient.value.toLowerCase())
    )
    ingredientsList.innerHTML = ``
    match.forEach((i) => {
      if (match.indexOf(i) < 30) {
        ingredientsList.innerHTML += `<li onclick="createNewTag(this, 'ingredient')">${i}`
      }
    })
  })

  const ingredientArrowOpen = document.getElementById('ingredients-arrow-open')
  ingredientArrowOpen.addEventListener('click', () => {
    filteringIngredientsBtn.removeChild(ingredientsBtnOpen)
    createIngredientBtnClosed()
  })
}

createIngredientBtnClosed()

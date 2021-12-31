// remove every open buttons and inject closed buttons.
function closeAdvancedFilters() {
  filteringIngredientsBtn.innerHTML = ``
  filteringAppareilsBtn.innerHTML = ``
  filteringUstensilsBtn.innerHTML = ``
  createIngredientBtnClosed()
  createUstensilsBtnClosed()
  createAppareilsBtnClosed()
}

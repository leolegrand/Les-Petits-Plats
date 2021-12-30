function checkIfArrayIsEmpty(arr) {
  let noResults = document.createElement('p')
  noResults.classList.add('no-results')
  noResults.innerHTML = `Aucune recette ne correspond à votre critère… vous pouvez
    chercher « tarte aux pommes », « poisson », etc.`
  if (arr.length == 0) {
    recipesContainer.appendChild(noResults)
  } else {
    if (noResults === true) {
      recipesContainer.removeChild(noResults)
    }
  }
}

const filteringUstensilsBtn = document.getElementById('filtering-ustensiles')

// Creates a closed button for the list of USTENSILS
// On click: develop the drop-down list of USTENSILS
function createUstensilsBtnClosed() {
  const ustensilsBtnClosed = document.createElement('div')
  ustensilsBtnClosed.classList.add('filtering-btn__closed')
  ustensilsBtnClosed.innerHTML = `<p>Ustensiles</p>
    <img src="./img/icons/detail-arrow.svg" alt="icon" id="ustensils-arrow-closed" />`
  filteringUstensilsBtn.appendChild(ustensilsBtnClosed)

  const appareilsArrowClosed = document.getElementById('ustensils-arrow-closed')
  appareilsArrowClosed.addEventListener('click', () => {
    filteringUstensilsBtn.removeChild(ustensilsBtnClosed)
    createUstensilsBtnOpen()
  })
}

// Drop-down a research input and a list of USTENSILS
// On click: Close the container and display a closed button
function createUstensilsBtnOpen() {
  const { everyUstensils } = getThings(recipesToPickFrom)
  const ustensilsBtnOpen = document.createElement('div')
  ustensilsBtnOpen.classList.add('filtering-btn__open')
  ustensilsBtnOpen.innerHTML = `<div class="filtering-btn__search">
                                    <input id="ustensile-search" placeholder="Rechercher un ustensile"/>
                                    <img src="./img/icons/detail-arrow.svg" id="ustensils-arrow-open"/>
                                  </div>
                                  <ul id="ustensils-list"></ul>`
  filteringUstensilsBtn.appendChild(ustensilsBtnOpen)
  const ustensilsList = document.getElementById('ustensils-list')
  everyUstensils.forEach((ustensile) => {
    if (everyUstensils.indexOf(ustensile) < 30) {
      ustensilsList.innerHTML += `<li id="ustensile-${ustensile}" onclick="createNewTag(this, 'ustensil')">${ustensile}`
    }
  })

  const searchUstensil = document.getElementById('ustensile-search')

  searchUstensil.addEventListener('keyup', () => {
    let match = everyUstensils.filter((ust) =>
      ust.toLowerCase().includes(searchUstensil.value.toLowerCase())
    )
    ustensilsList.innerHTML = ``
    match.forEach((i) => {
      if (match.indexOf(i) < 30) {
        ustensilsList.innerHTML += `<li onclick="createNewTag(this, 'ustensil')">${i}`
      }
    })
  })

  const ustensilsArrowOpen = document.getElementById('ustensils-arrow-open')
  ustensilsArrowOpen.addEventListener('click', () => {
    filteringUstensilsBtn.removeChild(ustensilsBtnOpen)
    createUstensilsBtnClosed()
  })
}

createUstensilsBtnClosed()

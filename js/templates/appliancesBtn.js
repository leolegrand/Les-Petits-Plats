const filteringAppareilsBtn = document.getElementById('filtering-appareils')

// Creates a closed button for the list of APPLIANCES
// On click: develop the drop-down list of APPLIANCES
function createAppareilsBtnClosed() {
  const appareilsBtnClosed = document.createElement('div')
  appareilsBtnClosed.classList.add('filtering-btn__closed')
  appareilsBtnClosed.innerHTML = `<p>Appareil</p>
    <img src="./img/icons/detail-arrow.svg" alt="icon" id="appareils-arrow-closed" />`
  filteringAppareilsBtn.appendChild(appareilsBtnClosed)

  const appareilsArrowClosed = document.getElementById('appareils-arrow-closed')
  appareilsArrowClosed.addEventListener('click', () => {
    filteringAppareilsBtn.removeChild(appareilsBtnClosed)
    createAppareilsBtnOpen()
  })
}

// Drop-down a research input and a list of APPLIANCES
// On click: Close the container and display a closed button
function createAppareilsBtnOpen() {
  const { everyAppliances } = getThings(recipesToPickFrom)
  const appareilsBtnOpen = document.createElement('div')
  appareilsBtnOpen.classList.add('filtering-btn__open')
  appareilsBtnOpen.innerHTML = `<div class="filtering-btn__search">
                                    <input id="appareils-search" placeholder="Rechercher un appareil"/>
                                    <img src="./img/icons/detail-arrow.svg" id="appareils-arrow-open"/>
                                  </div>
                                  <ul id="appareils-list"></ul>`
  filteringAppareilsBtn.appendChild(appareilsBtnOpen)
  const appareilsList = document.getElementById('appareils-list')
  everyAppliances.forEach((appliance) => {
    if (everyAppliances.indexOf(appliance) < 30) {
      appareilsList.innerHTML += `<li id="appliance-${appliance}" onclick="createNewTag(this, 'appliance')">${appliance}</li>`
    }
  })

  const searchAppareil = document.getElementById('appareils-search')
  searchAppareil.addEventListener('keyup', () => {
    let match = everyAppliances.filter((a) =>
      a.toLowerCase().includes(searchAppareil.value.toLowerCase())
    )
    appareilsList.innerHTML = ``
    match.forEach((i) => {
      if (match.indexOf(i) < 30) {
        appareilsList.innerHTML += `<li onclick="createNewTag(this, 'appliance')">${i}`
      }
    })
  })

  const appareilsArrowOpen = document.getElementById('appareils-arrow-open')
  appareilsArrowOpen.addEventListener('click', () => {
    filteringAppareilsBtn.removeChild(appareilsBtnOpen)
    createAppareilsBtnClosed()
  })
}

createAppareilsBtnClosed()

window.onload = async function () {
  const pollenData = await (await fetch('https://api-pollen.ulissesferreira.dev')).json()
  document.getElementById('levels').innerText = pollenData.level
  pollenData.pollens.forEach((pollen) => {
    let newPollenElement = document.createElement('li')
    newPollenElement.appendChild(document.createTextNode(pollen))
    this.document.getElementById('pollens').appendChild(newPollenElement)
  })
}
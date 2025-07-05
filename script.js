const btnForm = document.querySelector('.form_btn')
const inputForm = document.querySelector('.form_inputSearch')
const result = document.querySelector('#results')

btnForm.addEventListener('click', searchMovie)
inputForm.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchMovie(e)
})

function searchMovie(e) {
  e.preventDefault()

  if (inputForm.length === 0) return

  const movie = inputForm.value

  fetchMovie(movie)
}

const isLocalDev =
  location.hostname === '127.0.0.1' || location.hostname === 'localhost'

async function fetchMovie(title) {
  const url = isLocalDev
    ? `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
    : `/api/search?query=${encodeURIComponent(title)}`

  const res = await fetch(url)
  const { Search } = await res.json()

  createCardMovie(title, Search)
}

function createCardMovie(title, data) {
  const oldCard = document.querySelector('.result_card')
  if (oldCard) oldCard.remove()

    console.log(data)

  data.forEach((movie) => {
    const card = document.createElement('article')
    card.classList.add('result_card')
    card.innerHTML = `
      <h1>${movie.Title}</h1>
    `
    result.appendChild(card)
  })
}

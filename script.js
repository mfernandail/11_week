const btnForm = document.querySelector('.form_btn')
const inputForm = document.querySelector('.form_inputSearch')

btnForm.addEventListener('click', searchMovie)
inputForm.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchMovie(e)
})

function searchMovie(e) {
  e.preventDefault()

  console.log('click')

  fetchMovie('mulan')
}

const isLocalDev =
  location.hostname === '127.0.0.1' || location.hostname === 'localhost'

async function fetchMovie(title) {
  const url = isLocalDev
    ? `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
    : `/api/search?query=${encodeURIComponent(title)}`

  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
}

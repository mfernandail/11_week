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

async function fetchMovie(title) {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`

  const response = await fetch(url)
  const data = await response.json()

  console.log(data)
}

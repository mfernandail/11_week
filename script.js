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
  const res = await fetch(`/api/search?query=${encodeURIComponent(title)}`)
  const data = await res.json()
  console.log(data)
}

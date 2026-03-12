const form = document.getElementById("addMovie")
let movies = []

form.addEventListener('submit', (event) => {

  event.preventDefault()

  const name = event.target.name.value
  const year = event.target.year.value
  const description = event.target.description.value
  const image = event.target.image.value
  const genre = event.target.genre.value

  const regexName = /^[a-zA-Z0-9]{3,}/
  const regexYear = /^(18[0-9]{2}|19[0-9]{2}|200[0-9]|201[0-9]|202[0-6])$/
  const regexDescription = /^[a-zA-Z0-9.\s]+$/
  const regexImage = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  const regexGenre = /terror|acción|comedia|romantica/

  if (!regexName.test(name)) {
    alert('Name not valid')
    return;
  }
  if (!regexYear.test(year)) {
    alert('Year not valid')
    return;
  }
  if (!regexDescription.test(description)) {
    alert('Description not valid')
    return;
  }
  if (!regexImage.test(image)) {
    alert('URL not valid')
    return;
  }
  if (!regexGenre.test(genre)) {
    alert('Genre not valid')
    return;
  }
 
  const movie = {
    title: name,
    year: year,
    description, description,
    image: image,
    genre: genre,
  }

  movies.push(movie)
  buildTable(movies)
})

const filter = document.getElementById("search")


filter.onchange = function(movies) {
  let filteredMovies = [];
  for (const movie of movies) {
    const title = movie.title.toLowerCase();
     if (title.includes(filter.value.toLowerCase())) {
      filteredMovies.push(movie);
    } 
  } 
  buildTable(filteredMovies)
}



function buildTable(_movies) {
  const table = document.getElementById("tableMovies")
  table.innerHTML = `<tr>
          <th>Title</th>
          <th>Year</th>
          <th>Description</th>
          <th>Image</th>
          <th>Genre</th>
        </tr>`

  for (const movie of _movies) {
    table.innerHTML += `<tr class="cell">
          <td>${movie.title}</td>
          <td>${movie.year}</td>
          <td>${movie.description}</td>
          <td><img class="images" src="${movie.image}" alt=""></td>
          <td>${movie.genre}</td>
        </tr>`
    
  }

}

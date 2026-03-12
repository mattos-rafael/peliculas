const form = document.getElementById("addMovie")
let genres = ['all', 'terror', 'acción', 'comedia', 'romantica']
let movies = [
{
  title: 'The Shining',
  year: '1980',
  description: 'A family isolated in a hotel descends into madness',
  image: 'https://via.placeholder.com/150?text=TheShining',
  genre: 'terror'
  },
  {
  title: 'Mad Max Fury Road',
  year: '2015',
  description: 'A post apocalyptic chase across the wasteland',
  image: 'https://via.placeholder.com/150?text=MadMax',
  genre: 'acción'
  },
  {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: '2004',
  description: 'A couple erases each other from their memories',
  image: 'https://via.placeholder.com/150?text=EternalSunshine',
  genre: 'romantica'
  },
  {
  title: 'The Grand Budapest Hotel',
  year: '2014',
  description: 'A concierge and lobby boy at a famous hotel',
  image: 'https://via.placeholder.com/150?text=GrandBudapest',
  genre: 'comedia'
  },
  {
  title: 'Hereditary',
  year: '2018',
  description: 'A family uncovers dark secrets after a death',
  image: 'https://via.placeholder.com/150?text=Hereditary',
  genre: 'terror'
  },
  {
  title: 'John Wick',
  year: '2014',
  description: 'A retired assassin seeks revenge',
  image: 'https://via.placeholder.com/150?text=JohnWick',
  genre: 'acción'
  },
  {
  title: 'The Notebook',
  year: '2004',
  description: 'A love story told across decades',
  image: 'https://via.placeholder.com/150?text=TheNotebook',
  genre: 'romantica'
  },
  {
  title: 'Superbad',
  year: '2007',
  description: 'Two friends navigate high school and parties',
  image: 'https://via.placeholder.com/150?text=Superbad',
  genre: 'comedia'
  },
  {
  title: 'The Ring',
  year: '2002',
  description: 'A cursed videotape brings supernatural horror',
  image: 'https://via.placeholder.com/150?text=TheRing',
  genre: 'terror'
  },
  {
  title: 'Mission Impossible',
  year: '1996',
  description: 'A secret agent on an impossible mission',
  image: 'https://via.placeholder.com/150?text=MissionImpossible',
  genre: 'acción'
  }


]



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
  form.reset()
})

const filter = document.getElementById("search")


filter.onchange = function() {
  let filteredMovies = [];
  for (const movie of movies) {
    const title = movie.title.toLowerCase();
     if (title.includes(filter.value.toLowerCase())) {
      filteredMovies.push(movie);
    } 
  } 
  
  buildTable(filteredMovies)
}

const formGenre = document.getElementById('genre')
const filterGenre = document.getElementById('filterGenre')
genres.forEach((genre) => {
  filterGenre.innerHTML += `<option value="${genre}">${genre}</option>`
  if (genre !== 'all') {
    formGenre.innerHTML += `<option value="${genre}">${genre}</option>`
  }
  
})

filterGenre.onchange = (event) => {
  console.log(movies);
  
  let filteredMovies = movies.filter(movie => {
    return (event.target.value == 'all' || movie.genre == event.target.value)
  })
  
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

buildTable(movies);

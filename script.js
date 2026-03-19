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
          <td id="${movie.title}"><button class="edit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg></button></button><button class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button></td>
        </tr>`
    
  }

  const editButton = document.querySelectorAll(".edit")
  for (const button of editButton) {
    button.addEventListener('click', () => {
      
      const movie = movies.find((movie) => movie.title === button.closest('td').id)
      
      document.getElementById('editForm').innerHTML = `<div>
            <h1>Edit movie</h1>
            <form id="editMovie">
              <label class="label" for="nameEdit">Name</label>
              <input type="text" name="nameEdit" id="nameEdit">

              <label  class="label" for="yearEdit">Year</label>
              <input type="text" name="yearEdit" id="yearEdit">

              <label  class="label" for="descriptionEdit">Description</label>
              <textarea name="descriptionEdit" id="descriptionEdit"></textarea>

              <label  class="label" for="imageEdit">Image URL</label>
              <input type="text" name="imageEdit" id="imageEdit">

              <label  class="label" for="genreEdit">Genre</label>
              <select name="genreEdit" id="genreEdit"></select>

              <button class="btn-submit" type="submit">Submit</button>
            </form>
          </div>`

      const editFormGenre = document.getElementById('genreEdit')
      genres.forEach((genre) => {
        if (genre !== 'all') {
          editFormGenre.innerHTML += `<option value="${genre}">${genre}</option>`
        }
      })

      document.getElementById('nameEdit').value = movie.title
      document.getElementById('yearEdit').value = movie.year
      document.getElementById('descriptionEdit').value = movie.description
      document.getElementById('imageEdit').value = movie.image
      document.getElementById('genreEdit').value = movie.genre

      const editForm = document.getElementById("editMovie")
      editForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const name = event.target.nameEdit.value
        const year = event.target.yearEdit.value
        const description = event.target.descriptionEdit.value
        const image = event.target.imageEdit.value
        const genre = event.target.genreEdit.value
        
        movie.title = name;
        movie.year = year;
        movie.description = description
        movie.image = image
        movie.genre = genre

        buildTable(movies);
        document.getElementById('editForm').innerHTML = ""
      })

    })
    
  }
  const deleteButton = document.querySelectorAll(".delete")
  for (const button of deleteButton) {
      button.addEventListener('click', () => {
        const movie = button.closest('td').id
        const movieIndex = movies.findIndex(find => find.title == movie)
        movies = movies.toSpliced(movieIndex, 1)
        
        buildTable(movies)
        
        
      })
    }
}



buildTable(movies);

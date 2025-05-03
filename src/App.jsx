import './App.css'
import responseMovies from "./mocks/with-response.json"

function App() {

  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  const renderMovies = () => {
    return (
      <ul>
        {
          movies.map(movie => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <h3>{movie.Year}</h3>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))
        }
      </ul>
    )
  }

  const renderNoResult = () => {
    return (
      <p>No se encontraron resultados</p>
    )
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' action="">
          <input type="text" placeholder='Avengers, Star Wars, The Matrix ...' />
          <button type='submit'>Buscar película</button>
        </form>
      </header>

      <main>
        {/* TODO: Aqui iran los reultados de la API */}
        {
          hasMovies
            ? renderMovies
            : renderNoResult
        }
      </main>
    </div>
  )
}

export default App

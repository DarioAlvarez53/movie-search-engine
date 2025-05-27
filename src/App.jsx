import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useRef } from 'react'
import { useSearch } from './hooks/useSearch'



function App() {

  const { movies } = useMovies()
  const { search, setSearch, error } = useSearch()

  const counter = useRef(0) // valor que persiste entre renders
  counter.current++
  console.log(counter.current);
  

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search });
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' value={search} type="text" placeholder='Avengers, Star Wars, The Matrix ...' />
          <button type='submit'>Buscar película</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {/* TODO: Aqui iran los reultados de la API */}
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App

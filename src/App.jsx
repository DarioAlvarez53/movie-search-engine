import { useEffect } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useState } from 'react'

function App() {

  const { movies : mappedMovies } = useMovies()

  const { query, setQuery } = useState('')

  // const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query });
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {

  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' value={query} type="text" placeholder='Avengers, Star Wars, The Matrix ...' />
          <button type='submit'>Buscar película</button>
        </form>
      </header>

      <main>
        {/* TODO: Aqui iran los reultados de la API */}
        <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App

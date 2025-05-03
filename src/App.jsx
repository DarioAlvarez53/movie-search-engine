import './App.css'

function App() {

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
      </main>
    </div>
  )
}

export default App

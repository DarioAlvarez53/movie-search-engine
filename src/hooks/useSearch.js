import { useState, useEffect } from "react";

export function useSearch(){
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
    if (search.startsWith()) {
        setError('No se puede buscar una pelicula vacia')
        return
    }
    if (search.match(/^\d+$/)) {
        setError('No se puede buscar la peicula con numeros')
        return
    }
    if (search.length < 3){
        setError('La busqueda debe tener al menos 3 caracteres')
        return
    }

    setError(null)
    }, [search])

    return {
        search,
        setSearch,
        error,
        setError
    }
}
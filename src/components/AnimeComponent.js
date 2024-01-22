import { useState } from "react"
import React from 'react'
import { useApiAnimeData } from "../hooks/getAPIData";


function AnimeComponent() {
  const [animeName, setAnimeName] = useState("one piece");
  const [animeDigitado, setAnimeDigitado] = useState("one piece");
  const { animeData, loading, error } = useApiAnimeData(animeName);


  const handleInputChange = (e) => {
    setAnimeDigitado(e.target.value);
  }

  function BuscarOAnime() {
    setAnimeName(animeDigitado);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter anime name"
        value={animeDigitado}
        onChange={handleInputChange}>
      </input>
      <button onClick={() => BuscarOAnime()}>Pesquisar</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {Array.isArray(animeData) ? (
        <div>
          {animeData.map((a) => (<h1 key={a.id}>{a.title} {a.image}</h1>))}
        </div>
      ) : (animeData && <div> Sem Nenhum anime </div>)}


    </div>
  )
}

export default AnimeComponent;
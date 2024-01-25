import { useEffect, useState } from 'react'
import axios from 'axios';

//Hooks e um componente que exporta uma função

export function useApiAnimeData(anime) {
  // Esta função retorna 3 coisas, se está carregando os dados, se deu algum erro, e obviamente os dados dos animes:
  const [animeData, setAnimeData] = useState(null); // retornando animes
  const [loading, setLoading] = useState(true); // Esta carregando?
  const [error, setError] = useState(null); // deu erro

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const searchInput = anime.toLowerCase();
        const formattedSearch = searchInput.replace(/\s+/g, "-"); //  espaços em branco foram substituídos por hífens
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${formattedSearch}`);

        if (response.status === 200) {
          setAnimeData(response.data.data);
        } else {
          setError("Failed to fetch anime data");
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [anime]);

  return {animeData, loading, error}
}


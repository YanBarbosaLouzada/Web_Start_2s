import React from 'react'
import { useLoaderData } from 'react-router-dom/dist'
import AnimeCard from '../../components/AnimeCard/AnimeCard'

function Favorito() {
    const { data } = useLoaderData()


    return (
        <div>
            <div>
                <div className='anime-cards'>
                    {data.map((a) => (
                        <AnimeCard key={a.mal_id}{...a} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Favorito
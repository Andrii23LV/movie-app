import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getCollectionDetails } from './api/getCollectionDeatils';
import { CollectionMovieCard } from '../../components/collection/CollectionMovieCard'
import './collectionPage.css'

export const CollectionPage = () => {
    const [ collection, setCollection ] = useState();
    const [ movies, setMovies ] = useState();
    const location = useLocation();
    const id = location.state;

    const fetchApi = async () => {
        const response = await getCollectionDetails(id);
        const item = response.data;
        console.log(item)
        setCollection(item);
        setMovies(item.parts);
    }

    console.log(collection)

    useEffect(() => {
        fetchApi();
    }, [])

    const getPosterURL = (posterpath) => {
        return `https://image.tmdb.org/t/p/original/${posterpath}`
    }

    const getColorRating = (vote) => {
        if (vote > 7.5) {
            return 'rgb(11, 228, 11)';
        } else if (vote < 5) {
            return 'red';
        } else {
            return 'yellow';
        }
    }

    return (
        <>
            <section className="collection__wrap" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${getPosterURL(collection?.backdrop_path)})`
                }}>
                <div className="collection-title">
                    <div className="collection-poster">
                        <img src={getPosterURL(collection?.poster_path)} alt={collection?.name} className='movie-poster' >
                        </img>
                    </div>
                    <div className="collection-details">
                        <div className="collection-name">
                            <h1>{collection?.name}</h1>
                        </div>
                        <p className="collection-description">{collection?.overview}</p>   
                        <p>Number of movies: {collection?.parts.length}</p>
                    </div>
                </div>
            </section>
            <section className="collection-movies">
                <div className="collection-movies-list">
                <h2 style={{marginBottom: 0, color: "white"}}>{collection?.parts.length} Movies</h2>
                {movies?.map((movie) => {
                        return <CollectionMovieCard key={movie.id} {...movie}/>
                    })}
                </div>
            </section>
        </>
    )
}

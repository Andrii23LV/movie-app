import { useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { getMovieDetails } from "./api/getMovieDetails";
import './moviepage.css'
import { Trailer } from "../../shared/components/Trailer";
import { findTrailer } from "../searchMoviePage/api/findTrailer";
import { Casts } from "../../components/movie/Casts";

const SimilarList = lazy(() => import("../../components/movie/SimilarList"));

export const MoviePage = () => {
    const location = useLocation();
    const id = location.state;
    const [item, setItem] = useState({});
    const [playing, setPlaying] = useState(false)
    const [trailer, setTrailer] = useState(false)

    const myRef = useRef(null)

    const getDetail = async () => {
        const response = await getMovieDetails(id);
        const movie = response.data;
        setItem(movie);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getDetail();
    }, []);
    
    const getPosterURL = (posterpath) => {
        return `https://image.tmdb.org/t/p/original/${posterpath}`
    }

    const handleClick = async () => {
        const response = await findTrailer(item.id);
        console.log(response.data.results[0].key);
        setTrailer(response.data.results[0].key);
        setPlaying(!playing);
        setTimeout(() => {
            myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }, 1000)
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
            <section className="movie-wrap" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${getPosterURL(item.backdrop_path)})`
            }}>
                <div className="movie-trailer-poster">
                    <img src={getPosterURL(item.poster_path)} alt={item.original_title} className='movie-poster' >
                    </img>
                    <button onClick={handleClick} className='button-trailer'>{playing ? 'close trailer' : 'play trailer'}</button>
                </div>
                <div className="movie-details">
                    <div className="movie-title">
                        <h1>{item.original_title}</h1>
                        <div className='movie-title-vote' style={{ border: `2px solid ${getColorRating(item.vote_average)}`}}><p>{item.vote_average}</p></div>
                    </div>
                    {item.tagline && <h3>{item.tagline}</h3>}
                    <p>{item.release_date}</p>
                    <p className="movie-describtion">{item.overview}</p>
                    <Casts id={item.id}/>      
                </div>
            </section>
            { playing && <div ref={myRef}><Trailer id={trailer}/></div>} 
            <Suspense fallback={<div>Loading...</div>}>
                <SimilarList id={item.id}/>
            </Suspense>
        </>
    )
}


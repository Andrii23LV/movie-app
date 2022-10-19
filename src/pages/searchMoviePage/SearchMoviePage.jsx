import { useState, useRef } from "react";
import Youtube from 'react-youtube'
import { useLocation } from "react-router-dom";
import { MovieCard } from '../../shared/components/MovieCard';
import { findTrailer } from "../searchMoviePage/api/findTrailer";
import './search.css'

export const SearchMoviePage = () => {
    const [playing, setPlaying] = useState(false)
    const [trailer, setTrailer] = useState(null)
    const [buttonHide, setButtonHide] = useState(false)
    const [moreElements, setMoreElements] = useState(6)

    const myRef = useRef(null)

    const location = useLocation();
    const movies = JSON.parse(location.state.list);
    const text = location.state.text;

    const getPosterURL = (backdrop_path) => {
        return `https://image.tmdb.org/t/p/original/${backdrop_path}`
    }

    const fetchTrailer = async () => {
        const response = await findTrailer(movies[0].id);
        setTrailer(response.data.results[0].key);
        setPlaying(!playing);
        setTimeout(() => {
            myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }, 1000)
    }

    const loadMore = () => {
        setMoreElements(moreElements + moreElements);
        moreElements > movies.length && setButtonHide(true); 
    }

    const slice = movies.slice(0, moreElements);

    return (
        <>
            {movies.length ?
            <section className="search-page">
                <div className='search-page__title'  style={{backgroundImage: `url(${getPosterURL(movies[0].backdrop_path)})`}}>
                    <div className='search-page__details'>
                        <div className="search-page__details-title">
                            <h2>{movies[0].title}</h2>
                            <button onClick={fetchTrailer} className='button-trailer'>{playing ? 'close trailer' : 'play trailer'}</button>
                        </div>
                        <p>{movies[0].overview}</p>
                    </div>
                </div>
                { playing &&
                    <div ref={myRef}>
                        <Youtube
                            videoId={trailer}
                            className={"trailer"}
                            containerClassName={"youtube-container amru"}
                            opts = {
                                {
                                    width: '100%',
                                    height: '100%',
                                    playerVars: {
                                        autoplay: 1,
                                        controls: 1,
                                        cc_load_policy: 0,
                                        fs: 0,
                                        iv_load_policy: 0,
                                        modestbranding: 0,
                                        rel: 0,
                                        showinfo: 1,
                                    },
                                }
                            }
                        />
                    </div>
                }       
                <p className="search-page__results">Search results for "{text}"</p>
                <div className="search-page__list">
                    {slice.map((movie) => {
                        return <MovieCard key={movie.id} {...movie} />
                    })}
                </div>
                <div className="load-more-section">
                    {!buttonHide && <button onClick={() => loadMore()} className='load-more-button'>Load more...</button>}
                </div>
            </section> : 'Sorry, no movies found'}
        </>
    )
}

import { useLocation, useParams } from "react-router-dom";
import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { getMovieDetails } from "./api/getMovieDetails";
import './moviepage.css'
import { Trailer } from "../../shared/components/Trailer";
import { findTrailer } from "../searchMoviePage/api/findTrailer";
import { Casts } from "../../components/movie/Casts";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { rateMovie } from "./api/rateMovie";

const SimilarList = lazy(() => import("../../components/movie/SimilarList"));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'black',
    border: '2px solid #000',
    color: 'white',
    fontSize: '1.5rem',
    boxShadow: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

export const MoviePage = () => {

    const location = useLocation();
    const { id } = useParams();
    const movieId = location.state;

    const [item, setItem] = useState({});
    const [userRate, setUserRate] = useState();
    const [playing, setPlaying] = useState(false)
    const [trailer, setTrailer] = useState(false)
    const [modal, setModal] = useState(false)

    const myRef = useRef(null)

    const getDetail = async () => {
        const response = await getMovieDetails(movieId);
        const movie = response.data;
        setItem(movie);
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
        getDetail();
    }, [id]);
    
    const getPosterURL = (posterpath) => {
        return `https://image.tmdb.org/t/p/original/${posterpath}`
    }

    const handleClick = async () => {
        const response = await findTrailer(item.id);
        setTrailer(response.data.results[0].key);
        setPlaying(!playing);
        setTimeout(() => {
            myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }, 1000)
    }

    const handleRatingClick = async (event, newValue) => {
        setUserRate(newValue);
        const response = await rateMovie(movieId, sessionStorage.getItem('id'), newValue);
        if(response.status == 201) {
            setModal(true);
            setTimeout(() => {
                setModal(false);
            }, 2000);
        }
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
                    <button onClick={handleClick} className='button-trailer'>
                        {playing ? <p className="button-trailer-text">close trailer<CancelIcon/></p> :
                         <p className="button-trailer-text">play trailer <PlayCircleIcon /></p> } 
                    </button>
                    <p className="rating-label">Rate it</p>
                    <Rating name="customized-10" 
                            defaultValue={0} 
                            max={10} 
                            precision={0.5} 
                            size="large" 
                            onChange={handleRatingClick} 
                            sx={{
                                '& .MuiRating-iconEmpty': {
                                    color: 'gray',
                                  },
                            }}/>
                </div>
                <div className="movie-details">
                    <div className="movie-title">
                        <h1>{item.original_title}</h1>
                        <div className='movie-title-vote' style={{ border: `2px solid ${getColorRating(item.vote_average)}`}}>
                            <p>{item.vote_average}</p>
                        </div>
                    </div>
                    {item.tagline && <h3>{item.tagline}</h3>}
                    <p>{item.release_date}</p>
                    <p className="movie-description">{item.overview}</p>
                    <Casts id={item.id}/>      
                </div>
            </section>
            { playing && <div ref={myRef}><Trailer id={trailer}/></div>} 
            <Suspense fallback={<div>Loading...</div>}>
                <SimilarList id={item.id}/>
            </Suspense>

            <Modal
                open={modal}
                onClose={!modal}
                >
                <Box sx={style}>
                    <>
                        <p>Your rating is {userRate}/10 <StarIcon size='large' sx={{
                            color: '#faaf00',
                        }}/></p>
                    </>
                </Box>
            </Modal>
        </>
    )
}


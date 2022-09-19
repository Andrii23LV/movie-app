import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetails } from "./api/getMovieDetails";

export const MoviePage = () => {
    const location = useLocation();
    const id = location.state;
    const [item, setItem] = useState(null);

    const getDetail = async () => {
        const response = await getMovieDetails(id);
        setItem(response.data);
        console.log(item);
    }

    useEffect(() => {
        getDetail();
    }, []);
    
    const getPosterURL = (posterpath) => {
        return `https://image.tmdb.org/t/p/w154/${posterpath}`
    }
    return (
        <>  
            <section className="movie-title" style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${item.backdrop_path}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                height: '50vh',
            }}></section>
            <section className="movie-wrap">
                <div className="movie-poster">
                    <img src={getPosterURL(item.poster_path)} alt={item.title} className='trending__card-img' >
                    </img>
                </div>
                <div className="movie-details">
                    <h1>{item.title}</h1>
                    <h3>{item.tagline}</h3>
                    <p>{item.release_date}</p>
                    <p>Budget: {item.budget}$</p>
                    <p>{item.overview}</p>
                </div>
            </section>
        </>
    )
}

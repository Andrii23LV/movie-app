import { useState, useEffect } from 'react';
import { getSimilar } from '../../pages/moviePage/api/getSimilar';
import { MovieCard } from '../../shared/components/MovieCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const SimilarList = (props) => {
    const [movies, setMovies] = useState([]);
    const fetchAPI = async (id) => {
        let response = await getSimilar(id);
        let moviesList = response.data.results;
        setMovies(moviesList);
    } 

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "15px",
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 300,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            }
          ]
      };

    useEffect(() => {

        fetchAPI(props.id);
    }, [props.id])

    return (
        <div className='similar-list'>
            <h2 className='trending__wrap-title'>Similar movies</h2>
             <Slider {...settings}>
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} {...movie} />
                })}
            </Slider>
        </div>
    )
}

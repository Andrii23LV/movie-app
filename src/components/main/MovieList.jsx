import { useState, useEffect } from 'react';
import { getPopular } from '../../pages/mainPage/api/getPopular';
import { MovieCard } from '../../shared/components/MovieCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const fetchAPI = async () => {
        let response = await getPopular();
        let moviesList = response.data.results;
        setMovies(moviesList);
    } 

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
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
        fetchAPI();
    }, [])

    return (
             <Slider {...settings}>
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} {...movie} />
                })}
            </Slider>
    )
}

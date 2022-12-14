import { useState, useEffect } from 'react';
import { getPopular } from '../../pages/mainPage/api/getPopular';
import { MovieCard } from '../../shared/components/MovieCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const TrendingList = () => {
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
      centerPadding: "25px",
      slidesToShow: 6,
      slidesToScroll: 1,
      speed: 300,
      responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "75px"
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

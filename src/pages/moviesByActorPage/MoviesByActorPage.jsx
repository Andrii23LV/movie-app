import { useNavigate,useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getActorDetails } from './api/getActorDetails';
import { getActorMovies } from './api/getActorMovies';

import { MovieCard } from '../../shared/components/MovieCard';
import { getCategoryMovies } from '../categoryPage/api/getCategoryMovies'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Menu, Pagination } from '@mui/material';
import './moviesByActorPage.css'


export const MoviesByActorPage = () => {
    const [ actor,  setActor ] = useState();
    const [ movies,  setMovies ] = useState();
    const [pagesCount, setPagesCount] = useState();
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('');

    const location = useLocation();
    const person_id = location.state;

    const fetchApi = async () => {
        const responseActor = await getActorDetails(person_id);
        const actorDetails = responseActor.data;
        setActor(actorDetails);
        const responseMovies = await getActorMovies(person_id, page);
        const movieList = responseMovies.data.results;
        setMovies(movieList);
        setPagesCount(responseMovies.data.total_pages)
    }

    useEffect(() => {
        fetchApi();
    }, [page, sort])

    const getPosterURL = (posterpath) => {
        if (posterpath == null){
            return 'https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png';
        } else {
            return `https://image.tmdb.org/t/p/original/${posterpath}`;
        }
    }

    const handlePageChange = (event, page) => {
        setPage(page);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const handleSortChange = (event) => {
        setSort(event.target.value);
    }

    return (
        <div className='actor-details-wrap'>
            <div className='actor-details'>
                <div className='actor-details__description'>
                    <img className='actor-details__image' src={getPosterURL(actor?.profile_path)} alt={actor?.name}></img>
                    <p className='actor-details__description__place'>
                        <strong>
                            Place of birth <br/>
                        </strong>
                        {actor?.place_of_birth}
                    </p>
                    <p className='actor-details__descriptions__birthday'>
                        <strong>
                            Born in <br/>
                        </strong>
                        {actor?.birthday}
                    </p>
                    <p className='actor-details__descriptions__known-for'>
                        <strong>
                            Known for <br/>
                        </strong>
                    {actor?.known_for_department}
                    </p>
                    <p className='actor-details__descriptions__also'>
                        <strong>
                            Also known as <br/>
                        </strong>
                    {actor?.also_known_as.map(also => {
                        return <p>{also}</p>}
                    )}
                    </p>
                </div>
                <div className='actor-biography'>
                    <h1 className='actor-biography__name'>{actor?.name}</h1>
                    <p className='actor-biography__biography'>
                            <strong>
                                Biography <br/>
                            </strong>
                        {actor?.biography}
                    </p>
                    <section className='actor-movies-list'>
                        {movies?.map((movie) => {
                            return <MovieCard key={movie.id} {...movie} />
                        })}
                    </section>
                    <div className='actor-movies-list-pagination'>
                        <Pagination count={pagesCount} variant="outlined" color="primary" onChange={handlePageChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

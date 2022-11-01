import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieCard } from '../../shared/components/MovieCard';
import { getCategoryMovies } from '../categoryPage/api/getCategoryMovies'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Menu, Pagination } from '@mui/material';
import '../categoryPage/categories.css'


export const MoviesByCategoryPage = () => {
    const location = useLocation();
    const { name, id } = location.state;
    const [movies, setMovies] = useState([]);
    const [pagesCount, setPagesCount] = useState();
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('');

    const fetchApi = async () => {
        const response = await getCategoryMovies(id, page, sort);
        let moviesList = response.data.results;
        setPagesCount(response.data.total_pages)
        setMovies(moviesList);
    }

    useEffect(() => {
        fetchApi();
    }, [page, sort])

    const handlePageChange = (event, page) => {
        setPage(page);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const handleSortChange = (event) => {
        setSort(event.target.value);
    }

    return (
        <>
            <section className='category-title'>
                <h1>{name}</h1>
            </section>
            <div className='sort'>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Sort by</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={sort}
                        label='Sort by'
                        onChange={handleSortChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'popularity.desc'}>Popularity</MenuItem>
                            <MenuItem value={'primary_release_date.desc'}>Release date descening</MenuItem>
                            <MenuItem value={'primary_release_date.asc'}>Release date ascening</MenuItem>
                            <MenuItem value={'vote_average.desc'}>Rating descening</MenuItem>
                            <MenuItem value={'vote_average.asc'}>Rating ascening</MenuItem>
                            <MenuItem value={'original_title.desc'}>Title A-z</MenuItem>
                            <MenuItem value={'original_title.asc'}>Title Z-a</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <section className='category-list'>
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} {...movie} />
                })}
            </section>
            <div className='pagination'>
                <Pagination count={pagesCount} variant="outlined" color="primary" onChange={handlePageChange} />
            </div>
        </>
    )
}


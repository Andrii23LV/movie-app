import { useForm } from "react-hook-form";
import { findMovies } from "../../pages/mainPage/api/findMovies";
import { useNavigate } from 'react-router-dom'

export const SearchMovieForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        const response = await findMovies(data.movie);
        const allMovies = response.data.results;
        const movieList = allMovies.filter(el => el.vote_count > 10);
        navigate("/search-movies", { replace: true, state: { list: JSON.stringify(movieList), text: data.movie}});
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="search-form">
                <input type="text" placeholder="Search for a movie..." {...register("movie", {required: true, min: 1})} className="input-search"/>
                <input type="submit" value="Search" className="btn-search"/>
            </form>
        </>
    )
}

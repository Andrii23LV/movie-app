import { useNavigate } from "react-router-dom";

export const CollectionMovieCard = ({poster_path, title, release_date, overview, id}) => {
    const navigate = useNavigate();

    const getPosterURL = (posterpath) => {
        if(poster_path !== null){
            return `https://image.tmdb.org/t/p/original/${posterpath}`
        } else {
            return 'https://d994l96tlvogv.cloudfront.net/uploads/film/poster/poster-image-coming-soon-placeholder-no-logo-500-x-740_26953.png';   
        }
    }

    const handleClick = () => {
        navigate(`/movie/${id}`, { replace: true, state: id});
    }

    return (
        <div className='collection-movie-card' onClick={handleClick}>
            <img src={getPosterURL(poster_path)} alt={title} className='collection-movie-card__img'></img>
            <div className="collection-movie-card-details">
                <h3 className='collection-movie-card-details__title'>{title}</h3>
                <p className='collection-movie-card-details__date'>{release_date}</p>
                <p className='collection-movie-card-details__overview'>{overview}</p>
            </div>
        </div>
    )
}

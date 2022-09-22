import { useNavigate } from 'react-router-dom'
import '../styles/card.css'

export const MovieCard = ({poster_path, title, release_date, vote_average, id}) => {
    
    const navigate = useNavigate();

    const getPosterURL = (posterpath) => {
        if(poster_path !== null){
            return `https://image.tmdb.org/t/p/original/${posterpath}`
        } else {
            return 'https://d994l96tlvogv.cloudfront.net/uploads/film/poster/poster-image-coming-soon-placeholder-no-logo-500-x-740_26953.png';   
        }
    }

    const getColorRating = () => {
        if (vote_average > 7.5) {
            return 'rgb(11, 228, 11)';
        } else if (vote_average < 5) {
            return 'red';
        } else {
            return 'yellow';
        }
    }

    return (
        <div className='trending__card'>
            <img src={getPosterURL(poster_path)} alt={title} className='trending__card-img' onClick={(() => {
                navigate(`/movie/${id}`, { replace: true, state: id});
                console.log('click')
            })}></img>
            <div className='trending__card-vote' style={{ border: `2px solid ${getColorRating()}`}}><p>{vote_average}</p></div>
            <div className='trending__card-details'>
                <h2>{title}</h2>
                <p>{release_date}</p>
            </div>
        </div>
    )
}

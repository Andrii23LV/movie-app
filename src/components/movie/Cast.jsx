export const Cast = (cast) => {

    const getPosterURL = (posterpath) => {
        if (posterpath == null){
            return 'https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png';
        } else {
            return `https://image.tmdb.org/t/p/original/${posterpath}`;
        }
    }

    return (
        <div className='cast-card'>
            <div style={{backgroundImage: `url(${getPosterURL(cast.cast.profile_path)})`}} className='cast-card__image'></div>
            <div className='cast-card__details'>
                <h3>{cast.cast.name}</h3>
                <em>{cast.cast.character}</em>
            </div>
        </div>
    )
}

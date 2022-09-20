import {getCollection} from '../../pages/mainPage/api/getCollection';

import { useEffect, useState } from 'react'

export const Collection = ({id}) => {
    const [ collection,  setCollection ] = useState({});

    const fetchApi = async () => {
        const response = await getCollection(id);
        const collections = response.data;
        setCollection(collections);
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const getPosterURL = (posterpath) => {
        return `https://image.tmdb.org/t/p/original/${posterpath}`
    }

    const changeBackground = (e) => {
        e.target.parentElement.style.backgroundImage = `linear-gradient(225deg, rgba(11,56,75,0.9) 18%, rgba(34,34,34,0.9) 79%), url(${getPosterURL(collection.backdrop_path)})`;
    }

    return (
        <p  className='collection__card-title' 
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${getPosterURL(collection.poster_path)})`}} 
            onClick={(() => {})}
            onMouseOver={changeBackground}
            >{collection.name}</p>
    )
}



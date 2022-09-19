import {getCollection} from '../../pages/mainPage/api/getCollection';

import { useEffect, useState } from 'react'

export const Collection = ({id}) => {
    const [ collection,  setCollection ] = useState({});

    const fetchApi = async () => {
        const response = await getCollection(id);
        const collections = response.data;
        setCollection({collections});
        console.log(collection);
        setCollection(collections);
        console.log(collection);
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const getPosterURL = (posterpath) => {
        return `https://image.tmdb.org/t/p/original/${posterpath}`
    }

    return (
        <div className='collection___card'>
            <img src={getPosterURL(collection.img)} alt={'collection'} className='collection__card-img' 
            onClick={(() => {})}></img>
            <p className='collection__card-title'>{collection.title}</p>
        </div>
    )
}

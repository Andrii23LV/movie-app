import { getCasts } from '../../pages/moviePage/api/getCasts';
import { Cast } from './Cast'
import { useEffect, useState } from 'react';

export const Casts = (props) => {    
    const [casts, setCasts] = useState([])

    const fetchApi = async (id) => {
        const response = await getCasts(id);
        const castsList = response.data.cast;
        setCasts(castsList);
    }

    useEffect(() => {
        fetchApi(props.id);
    }, [props.id])

    return (
        <section className='casts-wrap'>
            <div className='casts-list'>
                {casts && casts.slice(0, 5).map((cast, index) => {
                     return <Cast cast={cast} key={index}/>
                })}
            </div>
        </section>
    )
}

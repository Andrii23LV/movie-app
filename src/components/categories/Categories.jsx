import { useEffect, useState } from 'react'
import { CategoryCard } from './Category'
import { getCategories } from '../../pages/categoryPage/api/getCategories'

export const Categories = () => {
    const [genres,  setGenres] = useState([]);

    const fetchApi = async () => {
        const response = await getCategories();
        const genresList = response.data.genres;
        setGenres(genresList);
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <section className='categories'>
                <div className='categories__list'>
                    {genres.map(genre => 
                        <CategoryCard key={genre.id} {...genre}/>
                    )}
                </div>
        </section>
    )
}

import { Categories } from '../../components/categories/Categories'
import './categories.css'
import { useState, useEffect } from 'react'
import { Collapse } from '@mui/material';

export const CategoryPage = () => {
    const [ checked, setChecked ] = useState(false);

    useEffect(() => {
      setChecked(true);
    }, [])
  
    return (
        <>
            <section className='category-title__wrap'>
                <Collapse in={checked} {...checked ? { timeout: 1500 } : {}}>
                    <h1>Choose your category.</h1>
                </Collapse>
            </section>
            <Categories />
        </>
    )
}

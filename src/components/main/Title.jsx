import { SearchMovieForm } from './SearchMovieForm'
import { useState, useEffect } from 'react'
import { Collapse } from '@mui/material';

const Title = () => {
  const [ checked, setChecked ] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, [])
  return (
    <section className='title__wrap'>
        <Collapse in={checked} {...checked ? { timeout: 2400 } : {}}>
          <h1>Welcome.</h1>
          <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
        </Collapse>
        <SearchMovieForm />
    </section>
  )
}

export default Title;
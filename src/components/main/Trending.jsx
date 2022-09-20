import React from 'react'
import { MovieList } from './MovieList'

export const Trending = () => {
  return (
    <section className='trending__wrap'>
        <h2 className='trending__wrap-title'>Trending</h2>
        <MovieList />
    </section>
  )
}

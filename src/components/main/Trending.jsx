import React from 'react'
import { TrendingList } from './TrendingList'

export const Trending = () => {
  return (
    <section className='trending__wrap'>
        <h2 className='trending__wrap-title'>Trending</h2>
        <TrendingList />
    </section>
  )
}

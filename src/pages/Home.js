import React, { useEffect } from 'react'
import Banner from '../component/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { MovieAction } from '../redux/action/MovieAction'
import Loading from '../component/Loading'
import MovieSlide from '../component/MovieSlide'
import TvSlide from '../component/TvSlide'
import { TvAction } from '../redux/action/TvAction'
import { Link } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch();
    const {popularMovies, loading} = useSelector(state=>state.movie)
    const {popularTv} = useSelector(state=>state.tv)

    console.log(popularTv)

    console.log(popularMovies)
    useEffect(()=> {
        dispatch(MovieAction.getMovies())
    }, [])
    useEffect(()=> {
        dispatch(TvAction.getTvSeries())
    }, [])

    if (loading) {
      return (
        <Loading />
      )
    }

  return (
    <div>
        {<Banner movie={popularMovies.results[5]} />}
        <div className='contents'>
            <h2>Popular Movie <Link to='/movies'>Movie More</Link></h2>
            <MovieSlide movie={popularMovies} />
            <h2>Popular Tv Series <Link to='/tvs'>Tv Series More</Link></h2>
            <TvSlide tv={popularTv} />
        </div>
    </div>
  )
}

export default Home
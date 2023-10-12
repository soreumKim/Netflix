import React, { useEffect } from 'react'
import Banner from '../component/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { MovieAction } from '../redux/action/MovieAction'
import Loading from '../component/Loading'
import MovieSlide from '../component/MovieSlide'

const Movies = () => {
  const dispatch = useDispatch();
    const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state=>state.movie)

    console.log(popularMovies)
    console.log(topRatedMovies)
    console.log(upcomingMovies)
    useEffect(()=> {
        dispatch(MovieAction.getMovies())
    }, [])

    if (loading) {
      return (
        <Loading />
      )
    }

  return (
    <div>
        {<Banner movie={popularMovies.results[8]} />}
        <div className='contents'>
            <h2>What's popular</h2>
            <MovieSlide movie={popularMovies} />
            <h2>Top Rated Movies</h2>
            <MovieSlide movie={topRatedMovies} />
            <h2>Upcoming Movies</h2>
            <MovieSlide movie={upcomingMovies} />
        </div>
    </div>
  )
}

export default Movies
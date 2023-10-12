import React, { useEffect } from 'react'
import TvBanner from '../component/TvBanner'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../component/Loading'
import { TvAction } from '../redux/action/TvAction'
import TvSlide from '../component/TvSlide'

const TvSeries = () => {
  const dispatch = useDispatch();
    const {ontheairTv, popularTv, topRatedTv, loading} = useSelector(state=>state.tv)
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
        {<TvBanner tv={popularTv.results[9]} />}
        <div className='contents'>
            <h2>On the Air Tv Series</h2>
            <TvSlide tv={ontheairTv} />
            <h2>What's Popular</h2>
            <TvSlide tv={popularTv} />
            <h2>Top Rated Tv Series</h2>
            <TvSlide tv={topRatedTv} />
        </div>
    </div>
  )
}

export default TvSeries
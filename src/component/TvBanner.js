import React from 'react'

const TvBanner = ({tv}) => {
    //console.log(tv)
  return (
    <div style={{
        backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces/${tv.poster_path}` + ")"
    }} className='banner'>
        <div className="bannerInfo">
          <h1>{tv.name}</h1>
          <p>{tv.overview}</p>
        </div>
    </div>
  )
}

export default TvBanner
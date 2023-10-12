import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const TvCard = ({item}) => {
  //console.log(item, "item")
    let navigate = useNavigate();
    const { genreList } = useSelector(state=>state.tv)
    //console.log(genreList)
  return (
    <div className='cardGroup' onClick={()=>navigate(`/tvs/${item.id}`)}>
        <div
        className="card"
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/w355_and_h200_multi_faces${item?.backdrop_path}` +
            ")",
        }}
      >
        <div className="overlay">
            <h1>{item.name}</h1>
            <div className='genre'>
                {
                    item.genre_ids.map((id,idx)=>
                        <Badge bg="danger" key={idx}>
                            {genreList.find(item=>item.id==id).name}
                        </Badge>
                    )
                }
                {/* {item.genre_ids} */}
            </div>
            <div className="voteGroup">
                <span className="voteAverage">평점 : {item.vote_average}</span>
                {/* <span className="adult">{item.adult ? "청소년 관람불가" : "청소년 관람가능"}</span> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default TvCard
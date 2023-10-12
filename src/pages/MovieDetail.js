import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Video from '../component/Video'

const MovieDetail = () => {
  let [showDetail, setShowDetail] = useState({})
  const API_KEY = process.env.REACT_APP_API_KEY;
  let {id} = useParams();
  /* console.log(showDetail, "show") */

  const detail = async() => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    let response = await fetch(url);
    let data = await response.json();
    setShowDetail(data);
  }
  
  useEffect(()=>{
    detail();
  }, [showDetail])

  /* const {genreList} = useSelector(state=>state.movie) */

  return (
    <Container>
      <Row className='detailSection'>
        <Col lg={6} className='detailImgCard'>
          <div className="detailImg" style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${showDetail?.poster_path}` + ")"}}></div>
        </Col>
        <Col lg={6} className='detailInfoGroup'>
          {/* <div className="genre">
            {
              showDetail.genre_ids.map((id,idx)=>
                <Badge bg="danger" key={idx}>
                  {genreList.find(showDetail=>showDetail.id==id).name}
                </Badge>
              )
            }
          </div> */}
          <div className="title">{showDetail?.original_title}</div>
          <div className="tagline">{showDetail?.tagline}</div>
          <hr />
          <div className="detailOverview">{showDetail?.overview}</div>
          <div className="detailInfo">
            <span className="detailVote">{showDetail?.vote_average}</span>
            <span className="detailAdult">{showDetail?.adult? "19+" : "Under 18" }</span>
          </div>
          <hr />
          <div className="detailInfo2">
            <div>
              <Badge bg='light' text='dark'>Release Date</Badge>
              {showDetail?.release_date}
            </div>
            <div>
              <Badge bg='light' text='dark'>Running Time</Badge>
              {showDetail?.runtime}m
            </div>
          </div>

          <div>
            <Video />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetail
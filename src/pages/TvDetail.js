import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import TvVideo from '../component/TvVideo'

const TvDetail = () => {
  let [showDetail, setShowDetail] = useState({})
  const API_KEY = process.env.REACT_APP_API_KEY;
  let {id} = useParams();

  const detail = async() => {
    let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
    let response = await fetch(url);
    let data = await response.json();
    setShowDetail(data);
  }
  
  useEffect(()=>{
    detail();
  }, [showDetail])

  return (
    <Container>
      <Row className='detailSection'>
        <Col lg={6} className='detailImgCard'>
          <div className="detailImg" style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${showDetail?.poster_path}` + ")"}}></div>
        </Col>
        <Col lg={6} className='detailInfoGroup'>
          <div className="title">{showDetail?.name}</div>
          {/* <div className="tagline">{showDetail?.tagline}</div> */}
          <hr />
          <div className="detailOverview">{showDetail?.overview}</div>
          <div className="detailInfo">
            <span className="detailVote">{showDetail?.vote_average}</span>
            <span className="detailAdult">{showDetail?.adult? "19+" : "Under 18" }</span>
          </div>
          <hr />
          <div className="detailInfo2">
            <div>
              <Badge bg='light' text='dark'>First Air Date</Badge>
              {showDetail?.first_air_date}
            </div>
            <div>
              <Badge bg='light' text='dark'>Last Air Date</Badge>
              {showDetail?.last_air_date}
            </div>
            <div>
              <Badge bg='light' text='dark'>Number of Season</Badge>
              {showDetail?.number_of_seasons}
            </div>
            <div>
              <Badge bg='light' text='dark'>Number of Episodes</Badge>
              {showDetail?.number_of_episodes}
            </div>
          </div>

          <div>
            <TvVideo />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TvDetail
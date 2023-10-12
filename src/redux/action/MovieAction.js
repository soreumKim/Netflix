import api from "../reducers/api";

/* 
    리덕스 미들웨어
    - 두개의 개체 사이에서 원만히 통신할 수 있도록 돕는 역할
    - 리덕스 미들웨어는 액션과 리듀서 사이의 중간자
    - [액션] - [미들웨어] - [리듀서] - [스토어]
    - 비동기 처리 작업을 간편하게 가능
*/

const API_KEY = process.env.REACT_APP_API_KEY

function  getMovies() {
    return async(dispatch) => {
        try {
            dispatch({type: "GET_MOVIES_REQUEST"})

            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const topRatedMovieApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            const upcomingMovieApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)

            /* 장르 정보를 요청하는 api */
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)

            let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([
                popularMovieApi, topRatedMovieApi, upcomingMovieApi, genreApi
            ])

            dispatch({
                type: "GET_MOVIE_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList: genreList.data.genres
                }
            })
            /* console.log(popularMovies)
            console.log(topRatedMovies)
            console.log(upcomingMovies) */
        } catch (error) {
            //에러를 핸들링하는 곳
            dispatch({type: "GET_MOVIES_FAILURE"})
        }
    }
}

/* const getMovieDetail = (id) => async(dispatch)=> {
    try {
     dispatch({ type: "GET_MOVIE_DETAIL_REQUEST"});
 
     const getMovieDetailApi = api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);      
 
     let [movieDetail] = await Promise.all([
       getMovieDetailApi
     ])
     console.log('action 페이지 movieDetail:', movieDetail)
     dispatch({
       type: "GET_MOVIE_DETAIL_SUCCESS",
       payload: {
         movieDetail: movieDetail.data
       }
     })
     //console.log('action 페이지 movieDetail결과:', movieDetail)
   } catch (error) {
     dispatch({ type: "GET_MOVIE_DETAIL_FAIL", payload: error.error });
   }
}; */
    

export const MovieAction = {
    getMovies
}
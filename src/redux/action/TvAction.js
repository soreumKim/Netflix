import api from "../reducers/api";

/* 
    리덕스 미들웨어
    - 두개의 개체 사이에서 원만히 통신할 수 있도록 돕는 역할
    - 리덕스 미들웨어는 액션과 리듀서 사이의 중간자
    - [액션] - [미들웨어] - [리듀서] - [스토어]
    - 비동기 처리 작업을 간편하게 가능
*/

const API_KEY = process.env.REACT_APP_API_KEY

function  getTvSeries() {
    return async(dispatch) => {
        try {
            dispatch({type: "GET_TVS_REQUEST"})

            const ontheairTvApi = api.get(`/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`)
            const popularTvApi = api.get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const topRatedTvApi = api.get(`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)

            /* 장르 정보를 요청하는 api */
            const genreApi = api.get(`/genre/tv/list?api_key=${API_KEY}&language=en-US`)

            let [ontheairTv, popularTv, topRatedTv, genreList] = await Promise.all([
                ontheairTvApi, popularTvApi, topRatedTvApi, genreApi
            ])

            dispatch({
                type: "GET_TVS_SUCCESS",
                payload: {
                    ontheairTv: ontheairTv.data,
                    popularTv: popularTv.data,
                    topRatedTv: topRatedTv.data,
                    genreList: genreList.data.genres
                }
            })
            /* console.log(popularMovies)
            console.log(topRatedMovies)
            console.log(upcomingMovies) */
        } catch (error) {
            //에러를 핸들링하는 곳
            dispatch({type: "GET_TVS_FAILURE"})
        }
    }
}
    

export const TvAction = {
    getTvSeries
}
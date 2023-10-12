let initialState = {
    ontheairTv: [],
    popularTv: [],
    topRatedTv: [],
    genreList: [],
    loading: true
}

const tvReducer = (state = initialState, action) => {
  let {type, payload} = action;

  switch (type) {
    case "GET_TVS_REQUEST":
      return {...state, loading: true}

    case "GET_TVS_SUCCESS":
        return {
            ...state,
            ontheairTv: payload.ontheairTv,
            popularTv: payload.popularTv,
            topRatedTv: payload.topRatedTv,
            genreList: payload.genreList,
            loading: false
        };

    case "GET_TVS_FAILURE":
        return {...state, loading: false}

        default :
            return {...state}
  }
}

export default tvReducer
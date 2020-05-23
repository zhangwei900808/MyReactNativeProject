import { createAction, NavigationActions, Storage } from "../utils";
import Apis from "../services/apis/1.0/index";

const movieModel = {
  namespace: "movieModel",
  state: {
    movies: [],
    movie: null
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *setMovie({ payload }, { call, put }) {
      try {
        yield put(createAction("updateState")({ movie: payload.movie }));
      } catch (error) {
        console.log("setMovie error = ", error);
      }
    },
    *setMovies(action, { call, put }) {
      try {
        const params = {};
        const callRes = yield call(Apis.getMovies, params);
        yield put(createAction("updateState")({ movies: callRes.movies }));
      } catch (error) {
        console.log("setMovies error = ", error);
      }
    }
  }
};

export default movieModel;

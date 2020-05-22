import { createAction, NavigationActions, Storage } from "../utils";

const userModel = {
  namespace: "userModel",
  state: {
    user: {
      name: "",
      avatar_url: "",
      subTitle: ""
    }
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *setUser({ payload }, { call, put }) {
      yield put(createAction("updateState")({ user: payload.user }));
    }
  }
};

export default userModel;

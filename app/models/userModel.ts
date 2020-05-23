import { createAction, NavigationActions, Storage } from "../utils";
import Apis from "../services/apis/1.0/index";

const userModel = {
  namespace: "userModel",
  state: {
    users: [],
    user: null
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *setUser({ payload }, { call, put }) {
      try {
        yield put(createAction("updateState")({ user: payload.user }));
      } catch (error) {
        console.log("error = ", error);
      }
    },
    *setUsers(action, { call, put }) {
      const users = [
        {
          name: "Zhang Wei",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President"
        },
        {
          name: "Chris Jackson",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman"
        },
        {
          name: "Amy Farha",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President"
        },
        {
          name: "Chris Jackson",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman"
        },
        {
          name: "Amy Farha",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President"
        },
        {
          name: "Chris Jackson",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman"
        },
        {
          name: "Amy Farha",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President"
        },
        {
          name: "Chris Jackson",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman"
        },
        {
          name: "Amy Farha",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President"
        },
        {
          name: "Chris Jackson",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman"
        },
        {
          name: "Amy Farha",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President"
        },
        {
          name: "Chris Jackson",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman"
        },
        {
          name: "Amy Farha",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President"
        },
        {
          name: "Chris Jackson",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman"
        },
        {
          name: "Amy Farha",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President"
        },
        {
          name: "Chris Jackson",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman"
        },
        {
          name: "Amy Farha",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President"
        },
        {
          name: "Chris Jackson",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman"
        },
        {
          name: "Amy Farha",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President"
        },
        {
          name: "Chris Jackson",
          avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman"
        }
      ];
      try {
        yield put(createAction("updateState")({ users }));
      } catch (error) {
        console.log("setUsers error = ", error);
      }
    }
  }
};

export default userModel;

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import postsReducers from "../reducers/posts";
import usersReducers from "../reducers/users";
import meReducers from "../reducers/me";

import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  me: {
    me:{},
    myfollowedOnes:[]
    // email: "",
    // userName: "",
    // name:"",
    // surname:"",
    // profilePicUrl: "",
    // myposts: [],
    // comments: [],
    // likedPosts: [],
    // likedComments: [],
    // follows: [],
    // followers:[]
  },

  users:[],
   

  posts:[]

  
  
};

const combinedReducer = combineReducers({
  users: usersReducers,
  me: meReducers,
  posts: postsReducers,

});

export default function configureStore() {
  return createStore(
    combinedReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}

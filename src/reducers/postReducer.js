import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: [
    {
      title: "title 2",
      body: "body 2",
      id: "2"
    },
    {
      title: "title 1",
      body: "body 1",
      id: "1"
    }
  ]
};
// console.log(initialState.posts.length);

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state
      };
    case actionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
}

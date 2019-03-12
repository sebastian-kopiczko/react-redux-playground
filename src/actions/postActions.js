import * as actionTypes from "./actionTypes";

export const getPosts = () => {
  return {
    type: actionTypes.GET_POSTS
  };
};

export const deletePost = id => {
  return {
    type: actionTypes.DELETE_POST,
    payload: id
  };
};

export const addPost = post => {
  return {
    type: actionTypes.ADD_POST,
    payload: post
  };
};

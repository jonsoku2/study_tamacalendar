import { GET_POSTS } from '../type';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  errors: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    default:
      return state;
  }
};

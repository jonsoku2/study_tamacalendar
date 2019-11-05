import { GET_POSTS } from '../type';
import axios from 'axios';

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/post');
    console.log(res.data, 'action getPosts');
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

import {
  GET_SHIFTS
} from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SHIFTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

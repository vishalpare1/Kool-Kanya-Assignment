import _ from "lodash";
import { GET_STREAM_CATEGORIES } from "../actions/types";

const streamCategoryReducers = (state = [], action) => {
  switch (action.type) {
    // case FETCH_STREAMS:
    //   return { ...state, ..._.mapKeys(action.payload, "id") };
    // case FETCH_STREAM:
    //   return { ...state, [action.payload.id]: action.payload };
    // case CREATE_STREAM:
    //   return { ...state, [action.payload.id]: action.payload };
    // case EDIT_STREAM:
    //   return { ...state, [action.payload.id]: action.payload };
    // case DELETE_STREAM:
    //   return _.omit(state, action.payload);

    case GET_STREAM_CATEGORIES:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default streamCategoryReducers;

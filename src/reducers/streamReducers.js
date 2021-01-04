import _ from "lodash";
import { GET_STREAM_LIST } from "../actions/types";

// object-based state. We can also use Array-based state
const streamReducers = (state = {}, action) => {
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
    case GET_STREAM_LIST:
      return { ...state, ..._.mapKeys(action.payload, "title") };
    // case GET_STREAM_CATEGORIES:
    //   return { ..._.mapKeys(action.payload, "title") };
    default:
      return state;
  }
};

export default streamReducers;

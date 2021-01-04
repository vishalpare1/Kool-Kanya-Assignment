import { combineReducers } from "redux";
import streamReducers from "./streamReducers";
import streamCategoryReducers from "./streamCategoryReducers";

export default combineReducers({
  streams: streamReducers,
  streamCategories: streamCategoryReducers,
});

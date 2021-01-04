import _ from "lodash";
import { GET_STREAM_LIST, GET_STREAM_CATEGORIES } from "./types";
import streams from "../db/streams.json";

export const getStreamList = (type) => {
  return async (dispatch, getState) => {
    console.log("Hello world");
    dispatch({
      type: GET_STREAM_LIST,
      payload: streams.entries.filter((x) => x.programType === type),
    });
  };
};

export const getStreamCategories = () => {
  return async (dispatch, getState) => {
    console.log("Hello world");
    dispatch({
      type: GET_STREAM_CATEGORIES,
      payload: [...new Set(streams.entries.map((item) => item.programType))],
    });
  };
};

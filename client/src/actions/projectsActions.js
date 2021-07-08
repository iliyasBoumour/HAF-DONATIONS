import { GET_PROJECTS, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAIL } from "./types";
import axios from "axios";

export const getProjects = (completed) => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECTS });
    const url = completed ? "/api/projects" : "/api/projects?notCompleted";
    const { data } = await axios.get(url);
    dispatch({ type: GET_PROJECTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PROJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

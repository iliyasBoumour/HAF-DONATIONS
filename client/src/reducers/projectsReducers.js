import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
} from "../actions/types";

export const projectsReducers = (state = { projects: [] }, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return { loading: true };
    case GET_PROJECTS_SUCCESS:
      return { loading: false, projects: action.payload };
    case GET_PROJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

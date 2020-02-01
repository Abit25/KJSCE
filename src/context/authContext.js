import React from "react";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_proj":
      return { ...state, projects: [...state.projects, action.payload] };
    case "add_intern":
      return { ...state, internships: [...state.internships, action.payload] };
    case "add_edu":
      return { ...state, education: action.payload };
    case "add_jobs":
      return { ...state, jobs: [...state.jobs, action.payload] };
    case "add_skills":
      return { ...state, skills: [...state.skills, action.payload] };
    default:
      return state;
  }
};

const addUser = dispatch => {
  return user => {
    dispatch(user);
  };
};

const addEdu = dispatch => {
  return education => {
    console.log(education);
    dispatch({ type: "add_edu", payload: education });
  };
};
const addJobs = dispatch => {
  return jobs => {
    console.log(jobs);
    dispatch({ type: "add_jobs", payload: jobs });
  };
};
const addProj = dispatch => {
  return projects => {
    dispatch({ type: "add_proj", payload: projects });
  };
};
const addIntern = dispatch => {
  return interships => {
    dispatch({ type: "add_intern", payload: interships });
  };
};

const addSkills = dispatch => {
  return skills => {
    console.log(skills);
    dispatch({ type: "add_skills", payload: skills });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { addUser, addSkills, addEdu, addIntern, addJobs, addProj },
  { skills: [], education: [], internships: [], jobs: [], projects: [] }
);

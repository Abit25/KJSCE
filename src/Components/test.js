import React, { useContext } from "react";
import axios from "axios";
import FormDialog from "./Dialog";
import EduDialog from "./EduDialog";
import DateDialog from "./DateDialog";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Context } from "../context/authContext";
import Button from "@material-ui/core/Button";

import Navbar from "./Navbar";
import "./test.css";

const handleClick = () => {
  console.log("Clicked");
};

const Test = () => {
  const { addEdu, addSkills, state, addJobs, addIntern } = useContext(Context);

  const sendData = async () => {
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    const res = await axios.post(
      "http://localhost:8000/demo/",

      { state },
      {
        withCredentials: true
      }
    );
  };

  return (
    <div className="main" style={{ backgroundColor: "#333333" }}>
      <Navbar />
      <div
        className="container"
        style={{ marginTop: "5vh", borderRadius: "25px", marginBottom: "5vh" }}
      >
        <div
          className="info"
          style={{
            // flex: 1,
            display: "flex",
            alignSelf: "flex-start",
            marginLeft: "2%",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "30vh"
          }}
        >
          <Typography variant="h2">
            <b>{state.user}</b>
          </Typography>
          <p style={{ marginLeft: "5%" }}> john@xyz.com</p>
        </div>
        <hr />
        <div className="education">
          <div className="heading">
            <Typography variant="h5" style={{ color: "#3090C7" }}>
              EDUCATION
            </Typography>
          </div>
          <div className="data">
            {state.education.length ? (
              state.education
            ) : (
              <h2>
                <i>Click on the + button to add</i>
              </h2>
            )}
          </div>
          <div className="add">
            <EduDialog
              text="Select your Educational Qualification"
              mychange={addEdu}
            />
          </div>
        </div>
        <hr />
        <div className="jobs">
          <div className="heading">
            <Typography variant="h5" style={{ color: "#3090C7" }}>
              JOBS
            </Typography>
          </div>
          <div className="data">
            {state.jobs.length ? (
              <ul>
                {state.jobs.map(item => (
                  <li>{item.pos}</li>
                ))}
              </ul>
            ) : (
              <h2>
                <i>Click on the + button to add</i>
              </h2>
            )}
          </div>
          <div className="add">
            <DateDialog
              heading="Add a Job"
              text="Fill up the following form"
              label="Position"
              mychange={addJobs}
            />
          </div>
        </div>
        <hr />
        <div className="internship">
          <div className="heading">
            <Typography variant="h5" style={{ color: "#3090C7" }}>
              INTERNSHIPS
            </Typography>
          </div>
          <div className="data">
            {state.internships.length ? (
              <ul>
                {state.internships.map(item => (
                  <li>{item.pos}</li>
                ))}
              </ul>
            ) : (
              <h2>
                <i>Click on the + button to add</i>
              </h2>
            )}
          </div>
          <div className="add">
            <DateDialog
              heading="Add an Internship"
              text="Fill up the following form"
              label="Position"
              mychange={addIntern}
            />
          </div>
        </div>
        <hr />
        <div className="projects">
          <div className="heading">
            <Typography variant="h5" style={{ color: "#3090C7" }}>
              PROJECTS
            </Typography>
          </div>
          <div className="data">
            {state.projects.length ? (
              <ul>
                {state.projects.map(item => (
                  <li>{item.pos}</li>
                ))}
              </ul>
            ) : (
              <h2>
                <i>Click on the + button to add</i>
              </h2>
            )}
          </div>
          <div className="add">
            <DateDialog
              heading="Add a Project"
              text="Fill up the following form"
              label="Topic"
            />
          </div>
        </div>
        <hr />
        <div className="skills">
          <div className="heading">
            <Typography variant="h5" style={{ color: "#3090C7" }}>
              SKILLS
            </Typography>
          </div>
          <div className="data">
            {state.skills.length ? (
              <ul>
                {state.skills.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            ) : (
              <h2>
                <i>Click on the + button to add</i>
              </h2>
            )}
          </div>
          <div className="add">
            <FormDialog mychange={addSkills} />
          </div>
        </div>
        <hr />
        {/* <button
          style={{
            width: "50vw",
            height: "7vh",
            marginBottom: "2vh",
            marginTop: "2vh",
            alignSelf: "center",
            borderRadius: "15px"
          }}
        >
          SEND
        </button> */}
        <Button
          style={{
            width: "30vw",
            height: "7vh",
            marginBottom: "2vh",
            marginTop: "2vh",
            alignSelf: "center",
            borderRadius: "15px",
            backgroundColor: "#FF9900"
          }}
          onClick={sendData}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Test;

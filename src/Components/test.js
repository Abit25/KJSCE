import React from "react";
import axios from "axios";
import FormDialog from "./Dialog";
import EduDialog from "./EduDialog";
import DateDialog from "./DateDialog";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Navbar from "./Navbar";
import "./test.css";

const handleClick = () => {
  console.log("Clicked");
};

const Test = () => {
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
            <b>John Doe</b>
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
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <div className="add">
            <EduDialog text="Select your Educational Qualification" />
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
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <div className="add">
            <DateDialog
              heading="Add a Job"
              text="Fill up the following form"
              label="Position"
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
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <div className="add">
            <DateDialog
              heading="Add an Internship"
              text="Fill up the following form"
              label="Position"
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
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
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
            <ul style={{ marginRight: "5vw" }}>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
            <ul style={{ marginRight: "5vw" }}>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
            <ul style={{ marginRight: "5vw" }}>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
            <ul style={{ marginRight: "5vw" }}>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <div className="add">
            <FormDialog />
          </div>
        </div>
        <hr />
        {/* <TextField
          id="standard-required"
          type="number"
          label="Phone"
          defaultValue="Hello World"
          style={{ width: "80%" }}
        /> */}
      </div>
    </div>
  );
};

export default Test;

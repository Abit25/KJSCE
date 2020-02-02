import React from "react";
import Navbar from "../Components/Navbar";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./SingleSearch.css";
import axios from "axios";

const SingleSearch = () => {
  const [name, setName] = React.useState("");
  const handleChange = event => {
    setName(event.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="lower-half2">
        <div className="searchbox">
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <TextField
                onChange={handleChange}
                id="input-with-icon-grid"
                label="Search Candidates"
                style={{ width: "70vw", color: "white", marginLeft: "4vw" }}
              />
            </Grid>
            <Grid item>
              <SearchIcon
                fontSize="large"
                onClick={async () => {
                  axios.defaults.xsrfCookieName = "csrftoken";
                  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
                  const res = await axios.post(
                    "http://localhost:8000/search/",
                    { name },
                    { withCredentials: true }
                  );
                }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SingleSearch;

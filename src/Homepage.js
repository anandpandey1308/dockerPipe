import React from "react";
import abc from "./images/abc.jpg";
import { Chip, Avatar } from "@material-ui/core";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
const styleAlign = {
  height: "100%",
  display: "flex",
  //flexDirection: "row",
  fontFamily: "courier"
};
const hstyle = {
  color: "blue",
  display: "flex",
  fontFamily: "courier"
};

function HomePage() {
  return (
    <div className="body">
      {/* <img
        style={{ float: "right", width: 90, height: 90 }}
        src={abc}
        alt="this"
        align="left"
      /> */}

      <h1 style={hstyle}>
        <b>Docker Pipeline Automation</b>
      </h1>
      <Chip
        style={{
          width: 665,
          height: 30,
          background: "linear-gradient(90deg,#000099,#00ccff)"
        }}
      >
        <Avatar size={32}>A</Avatar>
      </Chip>
      <p>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      </p>

      <div class="card" style={styleAlign}>
        <div class="card-body">
          <h5 class="card-title">Create Docker and Pipeline Files</h5>
          <p class="card-text">
            <b>Create file into repo</b>
          </p>
          <a href="/form-docker" class="btn btn-pill btn-info">
            <PersonAddRoundedIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
export default HomePage;

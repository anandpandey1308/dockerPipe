import React, { Component } from "react";
// import abc from "./images/abc.jpg";
import { Chip, Avatar } from "@material-ui/core";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import VisibilityIcon from "@material-ui/icons/Visibility";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import PatientDataService from "../../service/PatientDataService";
import SaveIcon from "@material-ui/icons/Save";


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

class Homepage extends Component {
  state = {
      proejctName: ''
  }
    render() {
    return (
      <div>
        <div>Docker Pipeline Automation</div>
        
      </div>
    );
  }
}
export default Homepage;

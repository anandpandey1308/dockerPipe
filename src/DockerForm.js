import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import PatientDataService from "../../service/PatientDataService";
import SaveIcon from "@material-ui/icons/Save";

class AddDocker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host_name: "",
      credential_id: "",
      project_name: "",
      image_name: "",
      compose_file_path: "",
      working_dir: "",
      service_name: "",
      secret_name: "",
      jar_name: "",
      replica_no: "",
      container_port: "",
      host_port: "",
      log_file_path: ""
    };
    this.saveDocker = this.saveDocker.bind(this);
  }

  saveDocker = e => {};
  saveJenkins = e =>{};
  
  handleSubmit = event => {
    event.preventDefault();
    let docker = {
      host_name: this.state.host_name,
      credential_id: this.state.credential_id,
      project_name: this.state.project_name,
      image_name: this.state.image_name,
      compose_file_path: this.state.compose_file_path,
      working_dir: this.state.working_dir,
      service_name: this.state.service_name,
      secret_name: this.state.secret_name
    };
    // PatientDataService.addPatients(docker)
    //   .then(res => {
    //     this.setState({ message: "Value added successfully." });

    //     this.props.history.push("/add", docker);
    //   })
    //   .catch(event => {
    //     console.log(event);
    //   });
    //event.preventDefault();
  };

  onChange = e => {
    if (e.target.value === "") {
      alert("Can't be null");
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return this.state.message ? (
      <div>{this.state.message}</div>
    ) : (
      <div>
        <div>
          <Typography variant="h4" style={style}>
            <b>Add Docker Variables</b>
          </Typography>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <form style={formContainer} onSubmit={this.handleSubmit}>
            <div>
              <div>
                <h2>Docker File:</h2>
                <TextField
                  placeholder=" Working Directory"
                  fullWidth
                  margin="normal"
                  name="host_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.working_dir}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder=" Container Port"
                  fullWidth
                  margin="normal"
                  name="host_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.container_port}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder=" Jar Name"
                  fullWidth
                  margin="normal"
                  name="host_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.jar_name}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div>
                <h2>Docker Compose:</h2>
                <TextField
                  placeholder=" Host Name"
                  fullWidth
                  margin="normal"
                  name="host_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.host_name}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder=" Project Name"
                  fullWidth
                  margin="normal"
                  name="project_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.project_name}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder=" Image Name"
                  fullWidth
                  margin="normal"
                  name="image_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.image_name}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder=" Compose file path"
                  fullWidth
                  margin="normal"
                  name="compose_file_path"
                  pattern="[a-zA-Z]$"
                  value={this.state.compose_file_path}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder=" Working Directory"
                  fullWidth
                  margin="normal"
                  name="working_dir"
                  pattern="[a-zA-Z]$"
                  value={this.state.working_dir}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder="Service Name"
                  fullWidth
                  margin="normal"
                  name="service_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.service_name}
                  onChange={this.onChange}
                  required
                />

                <TextField
                  placeholder=" Credential Id"
                  fullWidth
                  margin="normal"
                  name="credential_id"
                  value={this.state.credential_id}
                  onChange={this.onChange}
                  required
                />

                <TextField
                  type="text"
                  placeholder="Secret Name"
                  fullWidth
                  margin="normal"
                  name="secret_name"
                  value={this.state.secret_name}
                  onChange={this.onChange}
                  required
                />
              </div>

              <br />
              <br />
              <br />
              <br />
              {/* <Button type="submit" variant="contained" color="primary">
                Save
                <SaveIcon />
              </Button> */}
            </div>
          </form>
        </div>
        <div>
          <Typography variant="h4" style={style}>
            <b>Add Jenkins Variables</b>
          </Typography>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <form style={formContainer} onSubmit={this.handleSubmit}>
            <div>
              <div>
                <h2>Docker File:</h2>
                <TextField
                  placeholder=" Working Directory"
                  fullWidth
                  margin="normal"
                  name="host_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.working_dir}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder=" Container Port"
                  fullWidth
                  margin="normal"
                  name="host_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.container_port}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder=" Jar Name"
                  fullWidth
                  margin="normal"
                  name="host_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.jar_name}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div>
                <h2>Docker Compose:</h2>
                <TextField
                  placeholder=" Host Name"
                  fullWidth
                  margin="normal"
                  name="host_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.host_name}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder=" Project Name"
                  fullWidth
                  margin="normal"
                  name="project_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.project_name}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder=" Image Name"
                  fullWidth
                  margin="normal"
                  name="image_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.image_name}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder=" Compose file path"
                  fullWidth
                  margin="normal"
                  name="compose_file_path"
                  pattern="[a-zA-Z]$"
                  value={this.state.compose_file_path}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder=" Working Directory"
                  fullWidth
                  margin="normal"
                  name="working_dir"
                  pattern="[a-zA-Z]$"
                  value={this.state.working_dir}
                  onChange={this.onChange}
                  required
                />
                <TextField
                  placeholder="Service Name"
                  fullWidth
                  margin="normal"
                  name="service_name"
                  pattern="[a-zA-Z]$"
                  value={this.state.service_name}
                  onChange={this.onChange}
                  required
                />

                <TextField
                  placeholder=" Credential Id"
                  fullWidth
                  margin="normal"
                  name="credential_id"
                  value={this.state.credential_id}
                  onChange={this.onChange}
                  required
                />

                <TextField
                  type="text"
                  placeholder="Secret Name"
                  fullWidth
                  margin="normal"
                  name="secret_name"
                  value={this.state.secret_name}
                  onChange={this.onChange}
                  required
                />
              </div>

              <br />
              <br />
              <br />
              <br />
              <Button type="submit" variant="contained" color="primary">
                Save
                <SaveIcon />
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const formContainer = {
  display: "flex",
  flexFlow: "row wrap"
};

const style = {
  display: "flex",
  justifyContent: "end"
};

export default AddDocker;

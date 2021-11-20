import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

class CreateUser extends Component {
  state = {
    users: [],
    Nombres: "",
    Apellidos: "",
    Correo: "",
    Password: "",
    Username: "",
    Sesion: false,
  };

  onChangeNombres = (e) => {
    this.setState({
      Nombres: e.target.value,
    });
  };
  onChangeApellidos = (e) => {
    this.setState({
      Apellidos: e.target.value,
    });
  };
  onChangeCorreo = (e) => {
    this.setState({
      Correo: e.target.value,
    });
  };
  onChangeUsername = (e) => {
    this.setState({
      Username: e.target.value,
    });
  };
  onChangePassword = (e) => {
    this.setState({
      Password: e.target.value,
    });
  };
  onChangeSesion = (e) => {
    this.setState({
      Sesion: false,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.users);
    const res = await axios.post(" http://Localhost:4000/api/users/", {
      Nombres: this.state.Nombres,
      Apellidos: this.state.Apellidos,
      Correo: this.state.Correo,
      Password: this.state.Password,
      Username: this.state.Username,
      Sesion: this.state.Sesion,
    });
    
    console.log(res);
    
  };
  async componentDidMount() {
    const res = await axios.get(" http://Localhost:4000/api/users/");
    this.setState({ users: res.data });
    console.log(this.state.users);
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Register</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombres"
                  onChange={this.onChangeNombres}
                  
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellidos"
                  onChange={this.onChangeApellidos}
                  
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo"
                  onChange={this.onChangeCorreo}
                  
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                  
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.onChangePassword}
                  
                />
              </div>
             
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                  
              
                
              
              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;

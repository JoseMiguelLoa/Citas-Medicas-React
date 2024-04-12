import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import {Component} from 'react'
import UserModel from './models/UserModel';
import UsuarioModel from './models/UserModel';

interface AppState {
  usuarios: UsuarioModel[]; // Definir el tipo de usuarios como un array de cualquier tipo
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      usuarios: []
    };
  ;
  }

  API_URL = "http://localhost:5237/";

  componentDidMount() {
    this.refreshUsuarios();
  }

  async refreshUsuarios() {
    fetch(this.API_URL + "Usuario/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ usuarios: data });
      });
  }

  render() {
    const { usuarios } = this.state;
    return (
      <div className="App">
        <Search />
        {usuarios.map(usuario=>
        <p> Nombre:  {usuario.usuario}</p>  
        )}
      </div>
    );
  }
}

export default App;
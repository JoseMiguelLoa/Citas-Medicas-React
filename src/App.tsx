import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import {Component} from 'react'
import UsuarioModel from './models/UserModel';
import { GetAllUsers, GetUserById } from './services/UsuarioService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';

interface AppState {
  usuarios: UsuarioModel[] | string; // Definir el tipo de usuarios como un array de cualquier tipo
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      usuarios: []
    };
  ;
  }

  
  componentDidMount() {
    this.refreshUsuarios();
  }

  async refreshUsuarios() {
        const usuariossss  =  await GetAllUsers();
        this.setState({usuarios : usuariossss});
        <div>alog</div>
  }

  render() {
    const alog= GetUserById(21);
     let ahoraSi : UsuarioModel  ;
    if(alog instanceof UsuarioModel){
        ahoraSi=alog;
        
    }
    const { usuarios } = this.state;
    return (
      <div className="container-fluid g-0 ">
        <Navbar />
        <button className="btn btn-primary">botón</button>
        <Search />
        
        {Array.isArray(usuarios) ? (
          usuarios.map(usuario => (
            <div className=''>

                       
              <p key={usuario.id}> Nombre: {usuario.usuario}   {usuario.id == 21 ? (
                <div>¡Este es el usuario con ID 10!</div>
            ):("") }   </p>
              
            </div>
          ))
        ) : (
          <p>{usuarios}</p>
        )}
      </div>
    );
  }
}

export default App;
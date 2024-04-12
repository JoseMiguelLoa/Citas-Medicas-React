import React from 'react'

interface Props  {
    Id : number;
    nombre :string;
    apellidos :string;
    usuario : string;
}
class UsuarioModel implements Props{
    Id : number;
    nombre :string;
    apellidos :string;
    usuario : string;
    constructor(idc : number, nombrec : string,  apellidosc :string,  usuarioc : string){
        this.Id = idc;
        this.nombre=nombrec;
        this.apellidos = apellidosc;
        this.usuario = usuarioc;
    }
}


export default UsuarioModel
import React from 'react'

interface Props  {
    nombre :string;
    apellidos :string;
    usuario : string;
    clave : string;
}
class UsuarioModel implements Props{
    nombre :string;
    apellidos :string;
    usuario : string;
    clave : string;

    constructor(   nombrec : string,  apellidosc :string,  usuarioc : string ,clavec : string ){

        this.nombre=nombrec;
        this.apellidos = apellidosc;
        this.usuario = usuarioc;
        this.clave = clavec;

    }
}


export default UsuarioModel
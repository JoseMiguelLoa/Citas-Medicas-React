import React from 'react'

interface Props  {
    id? : number ;
    nombre :string;
    apellidos :string;
    usuario : string;
    clave? : string;
}
class UsuarioModel implements Props{
    id? : number  ;
    nombre :string;
    apellidos :string;
    usuario : string;
    clave? : string;
    constructor(  nombrec : string,  apellidosc :string,  usuarioc : string , clavec? : string,idc? : number){
        this.id = idc;
        this.nombre=nombrec;
        this.apellidos = apellidosc;
        this.usuario = usuarioc;
        this.clave = clavec;

    }
}


export default UsuarioModel
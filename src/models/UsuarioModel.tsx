import React from 'react'

interface Props  {
    id : number;
    nombre :string;
    apellidos :string;
    usuario : string;
    
}
class UsuarioModel implements Props{
    id : number;
    nombre :string;
    apellidos :string;
    usuario : string;
    

    constructor( idc : number , nombrec : string,  apellidosc :string,  usuarioc : string  ){
        this.id = idc;
        this.nombre=nombrec;
        this.apellidos = apellidosc;
        this.usuario = usuarioc;
        

    }
}

export default UsuarioModel
import React from 'react'

interface Props  {
    id : number,
    nss : string,
    numTarjeta : string,
    telefono : string,
    direccion : string
}

class PacienteModel  implements Props {
    id : number;
    nss : string;
    numTarjeta : string;
    telefono : string;
    direccion : string;

    constructor(idc : number , NSSc : string , numTarjetac : string , telefonoc : string, direccionc : string) {
        this.id = idc;
        this.nss =NSSc;
        this.numTarjeta =numTarjetac;
        this.telefono = telefonoc;
        this.direccion = direccionc;
    }


}
export default PacienteModel
import React from 'react'
import UsuarioModel from './UsuarioModelCreation'

interface Props  {
    numColegiado : string

}

class MedicoModel extends UsuarioModel  implements Props {
    numColegiado : string


    constructor (numColegiadoC : string ,   nombrec : string,  apellidosc :string,  usuarioc : string ,clavec : string){
        super(nombrec,apellidosc,usuarioc,clavec);
        this.numColegiado = numColegiadoC;
    }
}

export default MedicoModel
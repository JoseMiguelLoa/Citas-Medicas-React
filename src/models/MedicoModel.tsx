import React from 'react'

interface Props  {
    id : number;
    numColegiado : string

}

class MedicoModel implements Props {
    id : number;
    numColegiado : string


    constructor (idc : number, numColegiadoC : string ){
        this.id = idc;
        this.numColegiado = numColegiadoC;
    }
}

export default MedicoModel
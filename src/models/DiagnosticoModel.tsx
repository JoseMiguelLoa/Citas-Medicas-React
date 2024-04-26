import React from 'react'

interface Props  {
    id : number,
    valoracionEspecialista : string,
    enfermedad : string,
    citaId : number
}

class DiagnosticoModel  implements Props {
     id: number
     valoracionEspecialista: string
     enfermedad: string
     citaId: number
    
    constructor(idc : number, valoracionEspecialistac : string, enfermedadc: string, citaIdc : number) {
        this.id = idc;
        this.valoracionEspecialista = valoracionEspecialistac
        this.enfermedad = enfermedadc
        this.citaId = citaIdc
    }

}
export default DiagnosticoModel
import React from 'react'

interface Props  {
    id : number,
    fechaHora : Date,
    motivoCita : string,
    attribute11 : number,
    pacienteId : number,
    medicoId : number
}

class CitaModel implements Props{
    id : number
    fechaHora : Date
    motivoCita : string
    attribute11 : number
    pacienteId : number
    medicoId : number

    constructor(idc : number,fechaHorac : Date,motivoCitac : string,attribute11c : number,pacienteIdc : number,medicoIdc : number) {
        this.id = idc;
        this.fechaHora = fechaHorac;
        this.motivoCita = motivoCitac;
        this.attribute11 = attribute11c;
        this.pacienteId = pacienteIdc;
        this.medicoId = medicoIdc;
    }
}

export default CitaModel
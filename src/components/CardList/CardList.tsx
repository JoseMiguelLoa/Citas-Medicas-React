import React from 'react'
import Card from '../Card/Card'
import medicoF from '../../imgs/medico.png'
import pacienteF from '../../imgs/paciente.png'
import citaMedicaF from '../../imgs/cita-medica.png'
interface Props  {

}

const CardList: React.FC<Props> = (props: Props):JSX.Element => {
  return (
    <div className='row justify-content-between row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 '>
        <Card foto = {medicoF} tipo='Médicos'/>
        <Card foto = {pacienteF} tipo='Pacientes'/>
        <Card foto = {citaMedicaF} tipo='Citas'/>
    </div>
  )
}

export default CardList
import React from 'react'
import PacienteModel from '../../../Models/PacienteModel'
import PacienteCard from '../PacienteCard/PacienteCard';

interface Props  {
  pacientes : PacienteModel[];
}

const PacienteCardList = ({pacientes}: Props) => {
  return (
    <div className='row justify-content-left row-cols-1 row-cols-sm-2 row-cols-md-2  row-cols-xl-4 '>
    {pacientes.map(paciente =>
      <PacienteCard paciente = {paciente} />
    )}
</div>
  )
}

export default PacienteCardList
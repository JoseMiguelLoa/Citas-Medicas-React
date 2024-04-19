import React from 'react'
import MedicoModelObtain from '../../Models/ModelObtain/MedicoModelObtain'
import MedicoCard from '../MedicoCard/MedicoCard';

interface Props  {
  medicos : MedicoModelObtain[];  
}

const MedicoCardList = ({medicos}: Props) => {
  
  return (
    <div className='row justify-content-left row-cols-1 row-cols-sm-2 row-cols-md-2  row-cols-xl-4 '>
        {medicos.map(medico =>
          <MedicoCard medico = {medico} />
        )}
    </div>
  )
}

export default MedicoCardList
import React from 'react'
import PacienteModel from '../../../Models/PacienteModel'
import { Link } from 'react-router-dom';

interface Props  {
  paciente : PacienteModel;
}

const PacienteCard = ( {paciente}: Props) => {
  return (
      
      <div key={paciente.id} id={`${paciente.id}`} className='cartaAnim col-auto mt-3 mb-3'>
        < Link to={`/paciente/${paciente.id}`}>
          <div className="card p-1">
            <p className='card-text '>Número de la seguridad social: {paciente.nss}</p>
          </div>
        </Link>
      </div>
  )
}

export default PacienteCard
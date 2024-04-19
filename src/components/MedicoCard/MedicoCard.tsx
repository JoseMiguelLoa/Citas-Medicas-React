import React from 'react'
import MedicoModelObtain from '../../Models/ModelObtain/MedicoModelObtain';
import { Link } from 'react-router-dom';
import MedicoModel from '../../Models/ModelCreation/MedicoModelCreation';
import UsuarioModelObtain from '../../Models/ModelObtain/UsuarioModelObtain';

interface Props  {
  medico : MedicoModelObtain ;
}

const MedicoCard  : React.FC<Props> = ( {medico} : Props) : JSX.Element=>{
  return (
    <Link to={`/medico/${medico.id}`}>
      <div key={medico.id} className='cartaAnim col-auto mt-3 mb-3'>
        <div className="card p-1">
          <p className='card-text '>Numero de colegiado: {medico.numColegiado}</p>
        </div>
      </div>
    </Link>
  )
}

export default MedicoCard
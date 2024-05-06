import React from 'react'
import MedicoModelObtain from '../../../Models/MedicoModel';
import { Link } from 'react-router-dom';

interface Props  {
  medico : MedicoModelObtain ;
}

const MedicoCard  : React.FC<Props> = ( {medico} : Props) : JSX.Element=>{
  return (
    <div key={medico.id} className='cartaAnim col-auto mt-3 mb-3'>
      <Link id={`${medico.id}`}  to={`/medico/${medico.id}`}>
        <div className="card p-1">
          <p className='card-text '>Número de colegiado: {medico.numColegiado}</p>
        </div>
      </Link>
    </div>
    
  )
}

export default MedicoCard
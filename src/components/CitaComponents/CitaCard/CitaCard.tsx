import React from 'react'
import CitaModel from '../../../Models/CitaModel'
import { Link } from 'react-router-dom';

interface Props  {
    cita : CitaModel;
}

const CitaCard = ({cita}: Props) => {
    return (
        <div key={cita.id} id={`${cita.id}`} className='cartaAnim col-auto mt-3 mb-3'>
          <Link to={`/cita/${cita.id}`}>
            <div className="card p-1">
              <p className='card-text '>ID: {cita.id}</p>
            </div>
          </Link>
        </div>
        
      )
}

export default CitaCard
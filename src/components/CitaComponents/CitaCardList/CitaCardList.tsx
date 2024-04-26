import React from 'react'
import CitaModel from '../../../Models/CitaModel'
import CitaCard from '../CitaCard/CitaCard';

interface Props  {
    citas : CitaModel[];
}

const CitaCardList = ({citas}: Props) => {
 
    return (
        <div className='row justify-content-left row-cols-1 row-cols-sm-2 row-cols-md-2  row-cols-xl-4 '>
            {citas.map(cita =>
              <CitaCard cita = {cita} />
            )}
        </div>
      )
  
}

export default CitaCardList
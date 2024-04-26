import React from 'react'
import { useParams } from 'react-router-dom';
import PacienteFormUpdate from '../../../components/PacienteComponents/PacienteFormUpdate/PacienteFormUpdate';

type Props = {}

const PacienteUpdatePage = (props: Props) => {
    const { id } = useParams();
    const idnul = id ? parseInt(id) : undefined
    
  return (
    <div className="row justify-content-center align-items-center mt-5 ">
        <div className="bordered col-5">
            <PacienteFormUpdate id={idnul} />
        </div>
  </div>
  )
}

export default PacienteUpdatePage
import React from 'react'
import { useParams } from 'react-router-dom';
import DiagnosticoFormCreate from '../../../components/DiagnosticoComponents/DiagnosticoFormCreate/DiagnosticoFormCreate';

interface Props  {}

const DiagnosticoCreatePage = (props: Props) => {  
    const { id } = useParams();
    const idNumero = id ? parseInt(id) :null
    if(idNumero)
    return (
        <div className="row justify-content-center align-items-center mt-5 ">
        <div className="bordered col-5">
                  <DiagnosticoFormCreate id={idNumero} />
        </div>
      </div>
      
    )
    else
        return(<><div>Id introducida no valida</div></>)
}

export default DiagnosticoCreatePage
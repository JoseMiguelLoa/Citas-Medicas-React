import React, { useEffect, useState } from 'react'
import ButtonVolver from '../../../components/ButtonVolver/ButtonVolver';
import { Link, useParams } from 'react-router-dom';
import { DeleteDiagnostico, GetDiagnosticoById } from '../../../Services/DiagnosticoService';
import DiagnosticoModel from '../../../Models/DiagnosticoModel';

interface Props  {}

const DiagnosticoIdPage = (props: Props) => {
  const [diagnostico,setDiagnostico] = useState<DiagnosticoModel>();

  const { id } = useParams();
  const idNumero = id ? parseInt(id) :null

  useEffect(() => {
    if(idNumero !== null){
      const refreshDiagnostico = async () => {
        try {
            const diagR = await GetDiagnosticoById(idNumero);
            if(typeof diagR === "string")
              console.log(diagR);
            else
              setDiagnostico(diagR);
  
          
        } catch (error) {
          console.error('Error al obtener usuarios:', error);
        }
      };
      refreshDiagnostico();

    }else
      console.log("id no valida");


  }, []); // array vacío significa que se ejecutará solo una vez




  if(diagnostico)
  return (
    <div className='card text-center'>
      <div className='row justify-content-around'>
        <div className='col-sm-12 col-lg-6'>Enfermedad: {diagnostico?.enfermedad}</div>
        <div className='col-sm-12 col-lg-6'>Valoración del especialista: {diagnostico?.valoracionEspecialista}</div>
        <div className='col-sm-12 col-lg-6'>Cita: <Link className='text-dark text-decoration-underline' to={`/cita/${diagnostico.citaId}`}>{diagnostico?.citaId}</Link></div>


      </div>

    
      <div className='row justify-content-around align-items-center mt-4'>
        <Link className='btn btn-success col-2' to={`/diagnostico/formU/${diagnostico?.id}`}>Modificar</Link>
        
        {idNumero !== null && (
          <button id='borrar' type="button" onClick={() => DeleteDiagnostico(idNumero)} className='btn btn-danger col-2'>Borrar </button>
        )}
        <ButtonVolver tm={2} donde={`/cita/${diagnostico.citaId}`} />

      </div>


    
  </div>
  )
  else
  return(
    <>
      <div>No se ha encontrado el diagnóstico </div>
    </>
  )
}

export default DiagnosticoIdPage
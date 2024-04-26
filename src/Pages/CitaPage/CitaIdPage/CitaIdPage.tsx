import React, { useEffect, useState } from 'react'
import CitaModel from '../../../Models/CitaModel';
import { useParams } from 'react-router-dom';
import { DeleteCita, GetCitaById } from '../../../Services/CitaService';
import { Link } from 'react-router-dom';
import ButtonVolver from '../../../components/ButtonVolver/ButtonVolver';
import { GetAllDiagnosticos } from '../../../Services/DiagnosticoService';

interface Props  {}

const CitaIdPage = (props: Props) => {
  const [cita,setCita] = useState<CitaModel>();
  const [hayDiag, setHayDiag] = useState<boolean>(false);
  const [diagnosticoId, setDiagnosticoId] =useState<number>();
  const { id } = useParams();
  const idNumero = id ? parseInt(id) :null
  
  useEffect(() => {
    if(idNumero !== null){
      const refreshCita = async () => {
        try {
            const citaR = await GetCitaById(idNumero);
            if(typeof citaR === "string")
              console.log(citaR);
            else{
              setCita(citaR);
              const diagR = await GetAllDiagnosticos();
              if(typeof diagR !=="string"){
                  diagR.forEach(diagnosticoF => {
                    if(diagnosticoF.citaId === citaR.id){
                      setHayDiag(true);
                      setDiagnosticoId(diagnosticoF.id);
                    }
                      
                  });
              }

            }
  
          
        } catch (error) {
          console.error('Error al obtener usuarios:', error);
        }
      };
  
      
      refreshCita();
      
    
    }else
      console.log("id no valida");


  }, []); // array vacío significa que se ejecutará solo una vez

  if(typeof cita !== "undefined"){
    const fechaHoraR = new Date(cita.fechaHora); // Convertir el string a objeto Date
    
    return (
      <>
        <div className='card text-center mt-5'>
          <div className='row justify-content-around'>
            <div className='col-12 col-md-5 '>Fecha: {fechaHoraR.getDate()}/{(fechaHoraR.getMonth()+1)}/{fechaHoraR.getFullYear()}</div>
            <div className='col-12 col-md-5 '>Hora: {fechaHoraR.getHours()}:{fechaHoraR.getMinutes()} </div>
            <div className='col-12 col-md-5 '>ID Paciente: <Link className='text-dark text-decoration-underline'  to={`/paciente/${cita?.pacienteId}`}>{cita?.pacienteId}</Link></div>
            <div className='col-12 col-md-5 '>ID Medico: <Link className=' text-decoration-underline'  to={`/medico/${cita?.medicoId}`}>{cita?.medicoId}</Link></div>
            <div className='col-12 col-md-5 '>Atributo: {cita?.attribute11}</div>
            <div className='col-12 col-md-5 '>Motivo: {cita?.motivoCita}</div>
          </div>
  
          <div className='row justify-content-around align-items-center mt-4'>
            <Link className='btn btn-success col-2 ' to={`/cita/formU/${cita?.id}`}>Modificar</Link>
            
            {idNumero !== null && (
              <button type="button" onClick={() => DeleteCita(idNumero)} className='btn btn-danger col-2'>Borrar </button>
            )}
            {hayDiag && (<Link className='btn btn-primary col-2' to={`/diagnostico/${diagnosticoId}`}>Diagnóstico</Link>)}
            {!hayDiag && (<Link className='btn btn-success col-2' to={`/diagnostico/formC/${idNumero}`}>Diagnóstico</Link>)}
            <ButtonVolver tm={2} donde='/cita' />
  
              
          </div>
        </div>
      </>
    )
  }
  else
    return (<><div>Cita no encontrada</div></>)
}

export default CitaIdPage
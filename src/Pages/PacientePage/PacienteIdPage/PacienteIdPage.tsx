import React, { useEffect, useState } from 'react'
import UsuarioModel from '../../../Models/UsuarioModel';
import PacienteModel from '../../../Models/PacienteModel';
import { Link, useParams } from 'react-router-dom';
import { DeletePaciente, GetPacienteById } from '../../../Services/PacienteService';
import { GetUserById } from '../../../Services/UsuarioService';
import ButtonVolver from '../../../components/ButtonVolver/ButtonVolver';
import { getCitasPaciente } from '../../../Services/CitaService';

interface Props  {}

const PacienteIdPage = (props: Props) => {
  const [usuario,setUsuario] = useState<UsuarioModel>();
  const [paciente, setPaciente] = useState<PacienteModel>();
  let hayCitas = false;
  const { id } = useParams();
  const idNumero = id ? parseInt(id) :null

  useEffect(() => {
    if(idNumero !== null){
      const refreshUsuario = async () => {
        try {
            const usuarioR = await GetUserById(idNumero);
            if(typeof usuarioR === "string")
              console.log(usuarioR);
            else
              setUsuario(usuarioR);
  
          
        } catch (error) {
          console.error('Error al obtener usuarios:', error);
        }
      };
  
      const refreshPaciente = async () => {
        try {
          const pacienteR = await GetPacienteById(idNumero);
          if(typeof pacienteR === "string")
            console.log(pacienteR);
          else
            setPaciente(pacienteR);
        } catch (error) {
          console.error('Error al obtener medicos:', error);
        }
      };

  
      const refreshCitas = async () => {
        try {
          const arrayC = await getCitasPaciente(idNumero);
          if(typeof arrayC === "string")
            console.log(arrayC);
          else{
            if(arrayC.length >0)
              hayCitas = true;
          }
        } catch (error) {
          console.error('Error al obtener las citas:', error);
        }
      };


      const refreshButtons = async  ()  =>{
        await refreshUsuario();
        await refreshPaciente();
        await refreshCitas();
        if(hayCitas){
          const borrarB = document.getElementById('borrar') as HTMLButtonElement;
           borrarB.disabled = true;
           const citas = document.getElementById('citas') as HTMLButtonElement;
           citas.disabled = false;
        }else{
          const borrarB = document.getElementById('borrar') as HTMLButtonElement;
          borrarB.disabled = false;
          const citas = document.getElementById('citas') as HTMLAnchorElement;
          citas.classList.add('disabled');
        }
      }

      refreshButtons();




    }else
      console.log("id no valida");


  }, []); // array vacío significa que se ejecutará solo una vez



  if(paciente)
  return (
    <div className='card text-center'>
      <div className='row justify-content-around'>
        <div className='col-sm-12 col-lg-6'>Nombre: {usuario?.nombre}</div>
        <div className='col-sm-12 col-lg-6'>Nombre de usuario: {usuario?.usuario}</div>
        <div className='col-sm-12 col-lg-6'>Apellidos: {usuario?.apellidos}</div>
        <div className='col-sm-12 col-lg-6'>Teléfono: {paciente?.telefono}</div>
        <div className='col-sm-12 col-lg-6'>Dirección: {paciente?.direccion}</div>
        <div className='col-sm-12 col-lg-6'>Número de tarjeta: {paciente?.numTarjeta}</div>
        <div className='col-sm-12 col-lg-6'>Número de la seguridad social: {paciente?.nss}</div>

      </div>

    
      <div className='row justify-content-around align-items-center mt-4'>
        <Link className='btn btn-success col-2' to={`/paciente/formU/${paciente?.id}`}>Modificar</Link>
        
        {idNumero !== null && (
          <button id='borrar' type="button" onClick={() => DeletePaciente(idNumero)} className='btn btn-danger col-2'>Borrar </button>
        )}
        <Link  id='citas' className='btn btn-success col-2' to={`/cita/usuario/${paciente.id}`}>Citas</Link>
        <ButtonVolver tm={2} donde='/paciente' />

      </div>


    
  </div>
  )
  else
  return(
    <>
      <div>No se ha encontrado el paciente </div>
    </>
  )
}

export default PacienteIdPage
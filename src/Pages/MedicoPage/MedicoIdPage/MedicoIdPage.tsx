import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetUserById } from '../../../Services/UsuarioService';
import UsuarioModelObtain from '../../../Models/UsuarioModel';
import { DeleteMedico, GetAllMedicos, GetMedicoById } from '../../../Services/MedicoService';
import MedicoModelObtain from '../../../Models/MedicoModel';
import { Link } from 'react-router-dom';
import ButtonVolver from '../../../components/ButtonVolver/ButtonVolver';
import "./MedicoIdPage.css"
import {  getCitasMedico } from '../../../Services/CitaService';
interface Props  {}

const MedicoIdPage = (props: Props) => {

  const [usuario, setUsuario] = useState<UsuarioModelObtain>();
  const [medico,setMedico] = useState<MedicoModelObtain>();
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
  
      const refreshMedico = async () => {
        try {
          const medicoR = await GetMedicoById(idNumero);
          if(typeof medicoR === "string")
            console.log(medicoR);
          else{
            setMedico(medicoR);
            
          }
        } catch (error) {
          console.error('Error al obtener medicos:', error);
        }
      };
    
      const refreshCitas = async () => {
        try {
          const arrayC = await getCitasMedico(idNumero);
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
        await refreshMedico();
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


  if(medico)
  return (
    <>
      <div className='card text-center mt-5'>
        <div className='row justify-content-around'>
          <div className='col-12 col-md-5 col-lg-3'>Nombre: {usuario?.nombre}</div>
          <div className='col-12 col-md-5 col-lg-3'>Apellidos: {usuario?.apellidos}</div>
          <div className='col-12 col-md-5 col-lg-3'>Nombre de usuario: {usuario?.usuario}</div>
          <div className='col-12 col-md-5 col-lg-3'>Número de colegiado: {medico?.numColegiado}</div>
        </div>
        

        <div className='row justify-content-around align-items-center mt-4'>
          <Link id="modificar" className='btn btn-success col-2' to={`/medico/formU/${medico?.id}`}>Modificar</Link>
          
          {idNumero !== null && (
            <button id='borrar' type="button" onClick={() => DeleteMedico(idNumero)} className='btn btn-danger col-2'>Borrar </button>
          )}
          <Link id='citas' className='btn btn-success col-2' to={`/cita/usuario/${medico.id}`}>Citas</Link>
          <ButtonVolver  tm={2} donde='/medico' />

            
        </div>
      </div>
    </>
  )
  else
  return(<><div>Medico no encontrado</div></>)
}

export default MedicoIdPage
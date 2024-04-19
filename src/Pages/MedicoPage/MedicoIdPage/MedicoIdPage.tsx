import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetUserById } from '../../../Services/UsuarioService';
import UsuarioModelObtain from '../../../Models/ModelObtain/UsuarioModelObtain';
import { GetAllMedicos, GetMedicoById } from '../../../Services/MedicoService';
import MedicoModelObtain from '../../../Models/ModelObtain/MedicoModelObtain';
import { Link } from 'react-router-dom';
import ButtonVolver from '../../../components/ButtonVolver/ButtonVolver';

interface Props  {}

const MedicoIdPage = (props: Props) => {

  const [usuario, setUsuario] = useState<UsuarioModelObtain>();
  const [medico,setMedico] = useState<MedicoModelObtain>();
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
          else
            setMedico(medicoR);
        } catch (error) {
          console.error('Error al obtener medicos:', error);
        }
      };
    
      refreshUsuario();
      refreshMedico();
    }else
      console.log("id no valida");


  }, []); // array vacío significa que se ejecutará solo una vez


  return (
    <>
      <div className='text-center'>Medico({medico?.numColegiado})</div>
      <div>Nombre: {usuario?.nombre}</div>
      <div>Apellidos: {usuario?.apellidos}</div>
      <div>Nombre de usuario: {usuario?.usuario}</div>
      <div>Numero de colegiado: {medico?.numColegiado} </div>
      
      <br />
      <br />
      <ButtonVolver donde='/medico'/>
    </>
  )
}

export default MedicoIdPage
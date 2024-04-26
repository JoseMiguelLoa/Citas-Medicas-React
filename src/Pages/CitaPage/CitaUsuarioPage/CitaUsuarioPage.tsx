import React, { useEffect, useState } from 'react'
import PacienteModel from '../../../Models/PacienteModel';
import MedicoModel from '../../../Models/MedicoModel';
import CitaModel from '../../../Models/CitaModel';
import { getCitasMedico, getCitasPaciente } from '../../../Services/CitaService';
import CitaCardList from '../../../components/CitaComponents/CitaCardList/CitaCardList';
import { Link, useParams } from 'react-router-dom';
import ButtonVolver from '../../../components/ButtonVolver/ButtonVolver';
import { GetPacienteById } from '../../../Services/PacienteService';
import { GetMedicoById } from '../../../Services/MedicoService';
import CitaUsuario from '../../../components/CitaComponents/CitaUsuario/CitaUsuario';

interface Props  {
}

const CitaUsuarioPage = (props: Props) => {
  const  {id}  = useParams();
  const idNumero = id ? parseInt(id) :null    
  const [usuario , setUsuario] = useState<PacienteModel | MedicoModel>();
  let invalid =false;
  useEffect(() => {
    if(idNumero !== null){
      const refreshPaciente = async () => {
        try {
          
          const pacienteR = await GetPacienteById(idNumero);
          if(typeof pacienteR === "string"  )
            if( !invalid)
              await refreshMedico(); 
            else
              console.log("Id no valida")
          else
              setUsuario(pacienteR);
          
        } catch (error) {
          console.error('Error al obtener medicos:', error);
        }
      };
        
      const refreshMedico = async () => {
        try {
          const medicoR = await GetMedicoById(idNumero);
          if(typeof medicoR === "string")
            await refreshPaciente();
          else{
            setUsuario(medicoR);
            
          }
        } catch (error) {
          console.error('Error al obtener medicos:', error);
        }
      }; 

      refreshPaciente();
      
    }
    

  }, []);

  if(usuario)
    return (
      <> 
        <CitaUsuario usuario={usuario}/>
      </>
    )
  else
    return (
      <> 
        <div>No se ha podido encontrar el usuario</div>
      </>
    )
}

export default CitaUsuarioPage
import React, { useEffect, useState } from 'react'
import PacienteModel from '../../../Models/PacienteModel';
import { GetAllPacientes } from '../../../Services/PacienteService';
import { Link } from 'react-router-dom';
import PacienteCardList from '../../../components/PacienteComponents/PacienteCardList/PacienteCardList';

interface Props  {}

const PacientePage = (props: Props) => {
  const [pacientes,setPacientes] = useState<PacienteModel[]>([]);

  useEffect(() => {
    const refreshpacientes = async () => {
      try {
        const pacientesR = await GetAllPacientes();
        if(typeof pacientesR === "string")
          console.log(pacientesR);
        else
          setPacientes(pacientesR);
      } catch (error) {
        console.error('Error al obtener pacientes:', error);
      }
    };

    refreshpacientes();
  }, []);
  return (
    <>
      <PacienteCardList pacientes={pacientes}/>
      <Link className='ms-4 btn btn-success' to="formC">Crear Paciente</Link>
    </>
  )
}

export default PacientePage
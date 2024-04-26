import React, { useEffect, useState } from 'react'
import { GetAllMedicos } from '../../../Services/MedicoService';
import MedicoCardList from '../../../components/MedicoComponents/MedicoCardList/MedicoCardList';
import { Link } from 'react-router-dom';
import MedicoModel from '../../../Models/MedicoModel';

interface Props  {}

const MedicoPage = (props: Props) => {

  const [medicos,setMedicos] = useState<MedicoModel[]>([]);

  useEffect(() => {
    const refreshMedicos = async () => {
      try {
        const medicosR = await GetAllMedicos();
        if(typeof medicosR === "string")
          console.log(medicosR);
        else
          setMedicos(medicosR);
      } catch (error) {
        console.error('Error al obtener medicos:', error);
      }
    };

    refreshMedicos();
  }, []);
  return (
    <>
      <MedicoCardList medicos={medicos}/>
      <Link className='ms-3  btn btn-success' to="formC">Crear Médico</Link>
    </>
  )
}

export default MedicoPage
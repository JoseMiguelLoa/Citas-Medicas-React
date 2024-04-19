import React, { useEffect, useState } from 'react'
import MedicoCard from '../../../components/MedicoCard/MedicoCard'
import MedicoModelObtain from '../../../Models/ModelObtain/MedicoModelObtain'
import { GetAllMedicos } from '../../../Services/MedicoService';
import MedicoCardList from '../../../components/MedicoCardList/MedicoCardList';
import { Link } from 'react-router-dom';

interface Props  {}

const MedicoPage = (props: Props) => {

  const [medicos,setMedicos] = useState<MedicoModelObtain[]>([]);

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
      <Link className='btn btn-success' to="formC">Crear Médico</Link>
    </>
  )
}

export default MedicoPage
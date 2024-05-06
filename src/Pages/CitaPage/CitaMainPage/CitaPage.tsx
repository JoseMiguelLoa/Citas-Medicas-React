import React, { useEffect, useState } from 'react'
import CitaModel from '../../../Models/CitaModel';
import { Link } from 'react-router-dom';
import { GetAllCitas } from '../../../Services/CitaService';
import CitaCardList from '../../../components/CitaComponents/CitaCardList/CitaCardList';

interface Props  {}

const CitaPage = (props: Props) => {
  const [citas,setCitas] = useState<CitaModel[]>([]);

  useEffect(() => {
    const refreshCitas = async () => {
      try {
        const citasR = await GetAllCitas();
        if(typeof citasR === "string")
          console.log(citasR);
        else
          setCitas(citasR);
      } catch (error) {
        console.error('Error al obtener citas:', error);
      }
    };

    refreshCitas();
  }, []);
  return (
    <>
      <CitaCardList citas={citas}/>
      <Link id="crear" className='ms-3  btn btn-success' to="formC">Crear Cita</Link>
    </>
  )
}

export default CitaPage
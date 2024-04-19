import React, { useEffect, useState } from 'react'
import MedicoModelObtain from '../../../Models/ModelObtain/MedicoModelObtain';
import UsuarioModelObtain from '../../../Models/ModelObtain/UsuarioModelObtain';
import { useParams } from 'react-router-dom';
import { GetUserById } from '../../../Services/UsuarioService';
import { GetMedicoById } from '../../../Services/MedicoService';
import MedicoFormUpdate from '../../../components/MedicoFormUpdate/MedicoFormUpdate';

interface Props  {}

const MedicoUpdatePage = (props: Props) => {
  const { id } = useParams();
  const idnul = id ? parseInt(id) : undefined

  
  return (
    <MedicoFormUpdate id={idnul} />
  )
}

export default MedicoUpdatePage
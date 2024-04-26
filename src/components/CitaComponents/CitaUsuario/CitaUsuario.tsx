import React, { useEffect, useState } from 'react'
import CitaModel from '../../../Models/CitaModel';
import PacienteModel from '../../../Models/PacienteModel';
import MedicoModel from '../../../Models/MedicoModel';
import { getCitasMedico, getCitasPaciente } from '../../../Services/CitaService';
import ButtonVolver from '../../ButtonVolver/ButtonVolver';
import CitaCardList from '../CitaCardList/CitaCardList';

interface Props  {
    usuario : PacienteModel | MedicoModel;

}

const CitaUsuario = ({usuario}: Props) => {
    const [citas, setCitas] = useState<CitaModel[]>([]);
    const [esPaciente, setEsPaciente] = useState<boolean>(true);
    useEffect(() => {
     
  
        const refreshCitas = async () => {
          try {
           
              const arrayC = await getCitasPaciente(usuario.id);
              if(typeof arrayC === "string")
                console.log(arrayC);
              else{
                setEsPaciente(true) 
                setCitas(arrayC) ;
                if(arrayC.length == 0){
                  const arrayX = await getCitasMedico(usuario.id);
                  if(typeof arrayX === "string")
                    console.log(arrayX);
                  else{
                    setEsPaciente(false) 
                    setCitas(arrayX) ;
                  }
                }
              }

          } catch (error) {
            console.error('Error al obtener las citas:', error);
          }
        };
  
        refreshCitas()
  
    }, []);
    return (
      <>        
      {console.log(esPaciente)}
        <CitaCardList citas={citas}/>
        {esPaciente  && (<ButtonVolver tm={2} donde={`/paciente/${usuario.id}`} />)}
        {!esPaciente && (<ButtonVolver tm={2} donde={`/medico/${usuario.id}`} />)}
  
      </>
    )

    
}

export default CitaUsuario
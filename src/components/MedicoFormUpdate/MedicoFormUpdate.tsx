import React, { useEffect, useState } from 'react'
import UsuarioModelObtain from '../../Models/ModelObtain/UsuarioModelObtain';
import MedicoModelObtain from '../../Models/ModelObtain/MedicoModelObtain';
import { GetUserById } from '../../Services/UsuarioService';
import { GetMedicoById, UpdateMedico } from '../../Services/MedicoService';

interface Props  {
  id? : number
}

const MedicoFormUpdate = ({id}: Props) => {
  
  const [usuario, setUsuario] = useState<UsuarioModelObtain>();
  const [medico,setMedico] = useState<MedicoModelObtain>();

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [usuarioV, setUsuarioV] = useState('');
  const [clave, setClave] = useState('');
  const [numColegiado, setNumColegiado] = useState('');
  const [message, setMessage] = useState('');
  const LongMin = 3;
  useEffect(() => {
      if (id !== undefined){
        const refreshUsuario = async () => {
          try {
              const usuarioR = await GetUserById(id);
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
            const medicoR = await GetMedicoById(id);
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

      }

      

  }, []); // array vacío significa que se ejecutará solo una vez


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(id !==undefined){
      setMessage(await UpdateMedico(id,nombre, apellidos, usuarioV, clave, numColegiado));

    }
  };

  return (
    <div>
      <h2>Crear Nuevo Médico</h2>
      <form className='form-control' onSubmit={handleSubmit}>
        <div className='form-floating'>
          <input name='nombre'  placeholder='' minLength={LongMin} className="form-control" type="text" value={nombre} required onChange={(e) => setNombre(e.target.value)} />
          <label  htmlFor='nombre' className='form-label' >Nombre:</label>
        </div>
        <div className='form-floating'>
          <input name='apellidos'  placeholder=''  minLength={LongMin} className="form-control" type="text" value={apellidos} required onChange={(e) => setApellidos(e.target.value)} />
          <label  htmlFor='apellidos' className="form-label">Apellidos:</label>
        </div>
        <div className='form-floating'>
          <input name='usuario'  placeholder=''  minLength={LongMin} className="form-control"  type="text" value={usuarioV} required onChange={(e) => setUsuarioV(e.target.value)} />
          <label  htmlFor='usuario' className="form-label">Usuario:</label>
        </div>
        <div className='form-floating'>
          <input name='clave'  placeholder='' minLength={LongMin}  className="form-control" type="password" value={clave} required onChange={(e) => setClave(e.target.value)} />
          <label  htmlFor='clave'  className="">Clave:</label>
        </div>
        <div  className='form-floating'>
          <input name='numColegiado'  placeholder=''  className="form-control"   minLength={LongMin} type="text" value={numColegiado} required onChange={(e) => setNumColegiado(e.target.value)} />
          <label  htmlFor='numColegiado' className="form-label">Número Colegiado:</label>
        </div>
        <div className='text-center'>
          <button  className="btn btn-success mt-1 mb-3" type="submit">Crear Médico</button>
        </div>
      </form>
      {message && <p>{message}</p>}
  </div>
  )
}

export default MedicoFormUpdate
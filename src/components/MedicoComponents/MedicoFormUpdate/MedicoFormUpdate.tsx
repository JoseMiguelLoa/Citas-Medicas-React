import React, { useEffect, useState } from 'react'
import { GetUserById } from '../../../Services/UsuarioService';
import { GetMedicoById, UpdateMedico } from '../../../Services/MedicoService';
import { Link } from 'react-router-dom';


interface Props  {
  id? : number
}

const MedicoFormUpdate = ({id}: Props) => {
  
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [numColegiado, setNumColegiado] = useState('');
  const LongMin = 3;
  const LongMax = 255;
  useEffect(() => {
      if (id !== undefined){
        const refreshUsuario = async () => {
          try {
              const usuarioR = await GetUserById(id);
              if(typeof usuarioR === "string")
                console.log(usuarioR);
              else{
                setNombre(usuarioR.nombre);
                setApellidos(usuarioR.apellidos);
                setUsuario(usuarioR.usuario);
              }

          } catch (error) {
            console.error('Error al obtener usuarios:', error);
          }
        };

        const refreshMedico = async () => {
          try {
            const medicoR = await GetMedicoById(id);
            if(typeof medicoR === "string")
              console.log(medicoR);
            else{
              setNumColegiado(medicoR.numColegiado);
            }

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
      await UpdateMedico(id,nombre, apellidos, usuario, clave, numColegiado);
     
      window.history.back();  
    }
  };

  return (
    <div>
      <h2 className='text-center'>Modificar Médico</h2>
      <form className='form-control' onSubmit={handleSubmit}>
        <div className='form-floating'>
          <input id="nombre" name='nombre' maxLength={LongMax}   placeholder='' minLength={LongMin} className="form-control" type="text" value={nombre} required onChange={(e) => setNombre(e.target.value)} />
          <label  htmlFor='nombre' className='form-label' >Nombre:</label>
        </div>
        <div className='form-floating'>
          <input id="apellidos" name='apellidos'  maxLength={LongMax}  placeholder=''  minLength={LongMin} className="form-control" type="text" value={apellidos} required onChange={(e) => setApellidos(e.target.value)} />
          <label  htmlFor='apellidos' className="form-label">Apellidos:</label>
        </div>
        <div className='form-floating'>
          <input id="usuario" name='usuario' maxLength={LongMax}   placeholder=''  minLength={LongMin} className="form-control"  type="text" value={usuario} required onChange={(e) => setUsuario(e.target.value)} />
          <label  htmlFor='usuario' className="form-label">Usuario:</label>
        </div>

        <div  className='form-floating'>
          <input id="numColegiado" name='numColegiado' maxLength={LongMax}   placeholder=''  className="form-control"   minLength={LongMin} type="text" value={numColegiado} required onChange={(e) => setNumColegiado(e.target.value)} />
          <label  htmlFor='numColegiado' className="form-label">Número Colegiado:</label>
        </div>
        <div className='text-center row align-item-center justify-content-around mt-3 mb-1'>
          <button id="modificar"  className=" col-3 btn btn-success " type="submit">Modificar </button>
          <Link id="volver" className=" col-3 btn btn-warning " to={`/medico/${id}`} >Volver </Link>
        </div>
      </form>
  </div>
  )
}

export default MedicoFormUpdate
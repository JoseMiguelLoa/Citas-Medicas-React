import React, { useState } from 'react'
import { CreateMedico } from '../../Services/MedicoService';
import { Link } from 'react-router-dom';
import './MedicoFormCreate.css'
interface Props  {}

const MedicoFormCreate= (props: Props) => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [numColegiado, setNumColegiado] = useState('');
    const [message, setMessage] = useState('');
    
    const LongMin = 3;
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setMessage(await CreateMedico(nombre, apellidos, usuario, clave, numColegiado));
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
          <input name='usuario'  placeholder=''  minLength={LongMin} className="form-control"  type="text" value={usuario} required onChange={(e) => setUsuario(e.target.value)} />
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

export default MedicoFormCreate
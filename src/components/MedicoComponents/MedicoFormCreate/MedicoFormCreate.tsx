import React, { useState } from 'react'
import { CreateMedico } from '../../../Services/MedicoService';
import { Link } from 'react-router-dom';
import './MedicoFormCreate.css'
import ButtonVolver from '../../ButtonVolver/ButtonVolver';
interface Props  {}

const MedicoFormCreate= (props: Props) => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [numColegiado, setNumColegiado] = useState('');
    
    const LongMin = 3;
    const LongMax= 255;
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await CreateMedico(nombre, apellidos, usuario, clave, numColegiado);
        window.history.back();  
      };
  return (
    <div>
      <h2 className='text-center'>Crear Nuevo Médico</h2>
      <form className='form-control' onSubmit={handleSubmit}>
        <div className='form-floating'>
          <input name='nombre' maxLength={LongMax}  placeholder='' minLength={LongMin} className="form-control" type="text" value={nombre} required onChange={(e) => setNombre(e.target.value)} />
          <label  htmlFor='nombre' className='form-label' >Nombre:</label>
        </div>
        <div className='form-floating'>
          <input name='apellidos' maxLength={LongMax}   placeholder=''  minLength={LongMin} className="form-control" type="text" value={apellidos} required onChange={(e) => setApellidos(e.target.value)} />
          <label  htmlFor='apellidos' className="form-label">Apellidos:</label>
        </div>
        <div className='form-floating'>
          <input name='usuario' maxLength={LongMax}   placeholder=''  minLength={LongMin} className="form-control"  type="text" value={usuario} required onChange={(e) => setUsuario(e.target.value)} />
          <label  htmlFor='usuario' className="form-label">Usuario:</label>
        </div>
        <div className='form-floating'>
          <input name='clave' maxLength={LongMax}   placeholder='' minLength={LongMin}  className="form-control" type="password" value={clave} required onChange={(e) => setClave(e.target.value)} />
          <label  htmlFor='clave'  className="">Clave:</label>
        </div>
        <div  className='form-floating'>
          <input name='numColegiado'  maxLength={LongMax}  placeholder=''  className="form-control"   minLength={LongMin} type="text" value={numColegiado} required onChange={(e) => setNumColegiado(e.target.value)} />
          <label  htmlFor='numColegiado' className="form-label">Número Colegiado:</label>
        </div>
        <div className='row justify-content-around align-items-center mb-2 mt-2'>
          <button  className="col-5 btn btn-success  " type="submit">Crear</button>
          <ButtonVolver tm={5} donde='/medico'/>

        </div>

      </form>
    </div>
  )
}

export default MedicoFormCreate
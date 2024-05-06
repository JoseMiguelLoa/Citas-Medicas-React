import React, { useEffect, useState } from 'react'
import { GetUserById } from '../../../Services/UsuarioService';
import { Link } from 'react-router-dom';
import { GetPacienteById, UpdatePaciente } from '../../../Services/PacienteService';

interface Props  {
    id? : number
}

const PacienteFormUpdate = ({id}: Props) => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [nss,setNss] = useState('');
    const [numTarjeta, setNumTarjeta] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

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
  
          const refreshPaciente = async () => {
            try {
              const PacienteR = await GetPacienteById(id);
              if(typeof PacienteR === "string")
                console.log(PacienteR);
              else{
                setNss(PacienteR.nss);
                setNumTarjeta(PacienteR.numTarjeta);
                setTelefono(PacienteR.telefono);
                setDireccion(PacienteR.direccion);

              }
  
            } catch (error) {
              console.error('Error al obtener Pacientes:', error);
            }
          };
          refreshUsuario();
          refreshPaciente();
        }
  
    }, []); // array vacío significa que se ejecutará solo una vez
  
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      if(id !==undefined){
        await UpdatePaciente(id,nombre, apellidos, usuario, clave, nss,numTarjeta,telefono,direccion);
        window.history.back();  
      }
    };
  return (
    <div>
    <h2 className='text-center'>Modificar Paciente</h2>
    <form className='form-control' onSubmit={handleSubmit}>
      <div className='form-floating'>
        <input id="nombre" name='nombre' maxLength={LongMax}   placeholder='' minLength={LongMin} className="form-control" type="text" value={nombre} required onChange={(e) => setNombre(e.target.value)} />
        <label  htmlFor='nombre' className='form-label' >Nombre:</label>
      </div>
      <div className='form-floating'>
        <input id="apellidos" name='apellidos' maxLength={LongMax}   placeholder=''  minLength={LongMin} className="form-control" type="text" value={apellidos} required onChange={(e) => setApellidos(e.target.value)} />
        <label  htmlFor='apellidos' className="form-label">Apellidos:</label>
      </div>
      <div className='form-floating'>
        <input id="usuario" name='usuario' maxLength={LongMax}   placeholder=''  minLength={LongMin} className="form-control"  type="text" value={usuario} required onChange={(e) => setUsuario(e.target.value)} />
        <label  htmlFor='usuario' className="form-label">Usuario:</label>
      </div>

      <div  className='form-floating'>
        <input id="nss" name='nss'  placeholder=''  className="form-control"  min={100000000000} max={999999999999}  type="number" value={nss} required onChange={(e) => setNss(e.target.value)} />
        <label  htmlFor='nss' className="form-label">Número de la seguridad social:</label>
      </div>
      <div className='form-floating'>
        <input id="numTarjeta" name='numTarjeta' maxLength={LongMax}   placeholder='' minLength={LongMin}  className="form-control" type="text" value={numTarjeta} required onChange={(e) => setNumTarjeta(e.target.value)} />
        <label  htmlFor='numTarjeta'  className="">Número de tarjeta:</label>
      </div>
      <div className='form-floating'>
        <input id="telefono" name='telefono' min={100000000} max={999999999} placeholder='' minLength={LongMin}  className="form-control" type="number" value={telefono} required onChange={(e) => setTelefono(e.target.value)} />
        <label  htmlFor='telefono'  className="">Teléfono:</label>
      </div>
      <div className='form-floating'>
        <input id="direccion" name='direccion' maxLength={LongMax} placeholder='' minLength={LongMin}  className="form-control" type="text" value={direccion} required onChange={(e) => setDireccion(e.target.value)} />
        <label  htmlFor='direccion'  className="">Dirección:</label>
      </div>
      <div className='row justify-content-around align-items-center mb-2 mt-3'>
        <button id="modificar" className="col-5 btn btn-success  " type="submit">Modificar</button>
        <Link id="volver" className=" col-3 btn btn-warning " to={`/paciente/${id}`} >Volver </Link>
      </div>

    </form>
  </div>
  )
}

export default PacienteFormUpdate
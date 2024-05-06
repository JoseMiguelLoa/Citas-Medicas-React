import React, { useState } from 'react'
import ButtonVolver from '../../ButtonVolver/ButtonVolver';
import { CreatePaciente } from '../../../Services/PacienteService';

interface Props  {}

const PacienteFormCreate = (props: Props) => {
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

    const verificar =() =>{
      let bien : boolean = true;
      const nombre = document.getElementById('nombre') as HTMLButtonElement;
      const apellidos = document.getElementById('apellidos') as HTMLButtonElement;
      const usuario = document.getElementById('usuario') as HTMLButtonElement;
      const clave = document.getElementById('clave') as HTMLButtonElement;
      const nss = document.getElementById('nss') as HTMLButtonElement;
      const numTarjeta= document.getElementById('numTarjeta') as HTMLButtonElement;
      const telefono = document.getElementById('telefono') as HTMLButtonElement;
      const direccion = document.getElementById('direccion') as HTMLButtonElement;

      if(nombre.value.length <LongMin || nombre.value.length >LongMax )
        bien = false
      
      if(apellidos.value.length <LongMin || apellidos.value.length >LongMax )
        bien = false

      if(usuario.value.length <LongMin || usuario.value.length >LongMax )
        bien = false

      if(clave.value.length <LongMin || clave.value.length >LongMax )
        bien = false

      if(nss.value.length <LongMin || nss.value.length >LongMax )
        bien = false

      if(numTarjeta.value.length <LongMin || numTarjeta.value.length >LongMax )
        bien = false

      if(telefono.value.length <LongMin || telefono.value.length >LongMax )
        bien = false

      if(direccion.value.length <LongMin || direccion.value.length >LongMax )
        bien = false

      return bien;
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const valido = verificar();

        if (valido) {
          await CreatePaciente(nombre, apellidos, usuario, clave, nss,numTarjeta,telefono,direccion);
          window.history.back();  
      } else 
          console.log('Formulario no válido');

      
      };


  return (
    <div>
      <h2 className='text-center'>Crear Nuevo Paciente</h2>
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
        <div className='form-floating'>
          <input id="clave" name='clave' maxLength={LongMax}   placeholder='' minLength={LongMin}  className="form-control" type="password" value={clave} required onChange={(e) => setClave(e.target.value)} />
          <label  htmlFor='clave'  className="">Clave:</label>
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
          <button id="crear" className="col-5 btn btn-success  " type="submit">Crear</button>
          <ButtonVolver tm={5} donde='/paciente'/>
        </div>

      </form>
    </div>
  )
}

export default PacienteFormCreate
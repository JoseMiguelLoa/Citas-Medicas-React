import React from 'react'
import ButtonVolver from '../../components/ButtonVolver/ButtonVolver';
import { Link } from 'react-router-dom';

interface Props  {}

const LoginPage = (props: Props) => {
  const LongMin = 3;
  const LongMax= 255;

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    window.history.back();  
  };
return (

  <div className="row justify-content-center align-items-center mt-5 ">
      <div className="bordered col-5">
        <h2 className='text-center'>Iniciar sesión</h2>
        <form className='form-control' onSubmit={handleSubmit}>
          <div className='form-floating'>
            <input name='nombre' maxLength={LongMax}  placeholder='' minLength={LongMin} className="form-control" type="text"  required  />
            <label  htmlFor='nombre' className='form-label' >Nombre:</label>
          </div>
          <div className='form-floating'>
            <input name='apellidos' maxLength={LongMax}   placeholder=''  minLength={LongMin} className="form-control" type="text"  required  />
            <label  htmlFor='apellidos' className="form-label">Apellidos:</label>
          </div>
          <div className='form-floating'>
            <input name='usuario' maxLength={LongMax}   placeholder=''  minLength={LongMin} className="form-control"  type="text"  required  />
            <label  htmlFor='usuario' className="form-label">Usuario:</label>
          </div>
          <div className='form-floating'>
            <input name='clave' maxLength={LongMax}   placeholder='' minLength={LongMin}  className="form-control" type="password"  required  />
            <label  htmlFor='clave'  className="">Clave:</label>
          </div>
          <div className='row justify-content-around align-items-center mb-2 mt-2'>
          <Link to='/' className={`btn btn-success col-5`}>Iniciar Sesión</Link>
            <ButtonVolver tm={5} donde='/'/>

          </div>

        </form>

      </div>
    </div>
)
}

export default LoginPage
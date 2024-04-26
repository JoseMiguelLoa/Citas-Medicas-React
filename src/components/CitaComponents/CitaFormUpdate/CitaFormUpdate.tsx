import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GetCitaById, UpdateCita } from '../../../Services/CitaService';

interface Props  {
  id? : number
}


const CitaFormUpdate = ({id}: Props) => {
  const [attribute, setAttribute] = useState('');
  const [motivoCita, setMotivoCita ] = useState('');


  const LongMin = 3;
  const LongMax = 255;


  useEffect(() => {
      if (id !== undefined){
        const refreshCita = async () => {
          try {
              const citaR = await GetCitaById(id);
              if(typeof citaR === "string")
                console.log(citaR);
              else{
                
                setAttribute(String(citaR.attribute11));
                setMotivoCita(citaR.motivoCita);
              }

          } catch (error) {
            console.error('Error al obtener usuarios:', error);
          }
        };

        refreshCita();

      }

  }, []); // array vacío significa que se ejecutará solo una vez

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(id !==undefined){
      await UpdateCita(id,motivoCita,parseInt(attribute));
      window.history.back();  
    }
  };
  return (
    <div>
      <h2 className='text-center'>Modificar Cita</h2>
      <form className='form-control' onSubmit={handleSubmit}>
        <div className='form-floating'>
          <input name='Attribute' maxLength={LongMax}   placeholder='' minLength={LongMin} className="form-control" type="number" value={attribute} required onChange={(e) => setAttribute(e.target.value)} />
          <label  htmlFor='Attribute' className='form-label' >Atributo:</label>
        </div>
        <div className=''>
          <label  htmlFor='motivoCita' className='form-label' >Motivo de la Cita:</label>
          <textarea  className="form-control col-6" minLength={LongMin} maxLength={LongMax} value={motivoCita} name="comen" id="comen" rows={5} placeholder="Motivos...." onChange={(e) => setMotivoCita(e.target.value)} required></textarea>
        </div>


        <div className='row justify-content-around align-items-center mb-2 mt-3'>
          <button  className="col-5 btn btn-success  " type="submit">Modificar</button>
          <Link className=" col-3 btn btn-warning " to={`/cita/${id}`} >Volver </Link>
        </div>

      </form>
    </div>
  )
}

export default CitaFormUpdate
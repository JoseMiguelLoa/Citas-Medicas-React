import React, { useState } from 'react'
import ButtonVolver from '../../ButtonVolver/ButtonVolver';
import { CreateDiagnostico } from '../../../Services/DiagnosticoService';

interface Props  {
    id : number
}

const DiagnosticoFormCreate = ({id}: Props) => {
        const [valoracionEspecialista, setValoracionEspecialista] = useState('');
        const [enfermedad, setEnfermedad] = useState('');
        
        const LongMin = 3;
        const LongMax= 255;
        const handleSubmit = async (e: { preventDefault: () => void; }) => {
            e.preventDefault();
            await CreateDiagnostico(valoracionEspecialista,enfermedad,id);
            window.history.back();  
          };
        
      return (
        <div>
          <h2 className='text-center'>Crear Nuevo Diagnóstico</h2>
          <form className='form-control' onSubmit={handleSubmit}>
            <div className='form-floating'>
              <input name='ValoracionEspecialista' maxLength={LongMax}  placeholder='' minLength={LongMin} className="form-control" type="text" value={valoracionEspecialista} required onChange={(e) => setValoracionEspecialista(e.target.value)} />
              <label  htmlFor='ValoracionEspecialista' className='form-label' >Valoracion del especialista:</label>
            </div>
            <div className='form-floating'>
              <input name='Enfermedad' maxLength={LongMax}   placeholder=''  minLength={LongMin} className="form-control" type="text" value={enfermedad} required onChange={(e) => setEnfermedad(e.target.value)} />
              <label  htmlFor='Enfermedad' className="form-label">Enfermedad:</label>
            </div>
            <div className='row justify-content-around align-items-center mb-2 mt-2'>
              <button  className="col-5 btn btn-success  " type="submit">Crear</button>
              <ButtonVolver tm={5} donde={`/cita/${id}`}/>
            </div>
    
          </form>
        </div>
)
}

export default DiagnosticoFormCreate
import React, { useEffect, useState } from 'react'
import { GetDiagnosticoById, UpdateDiagnostico } from '../../../Services/DiagnosticoService';
import ButtonVolver from '../../ButtonVolver/ButtonVolver';

interface Props  {
    id : number
}

const DiagnosticoFormUpdate = ({id}: Props) => {
    const [valoracionEspecialista, setValoracionEspecialista] = useState('');
    const [enfermedad, setEnfermedad] = useState('');

    const LongMin = 3;
    const LongMax= 255;

    useEffect(() => {
    if (id !== undefined){
        const refreshDiagnostico = async () => {
        try {
            const diagR = await GetDiagnosticoById(id);
            if(typeof diagR === "string")
                console.log(diagR);
            else{
                setValoracionEspecialista(String(diagR.valoracionEspecialista));
                setEnfermedad(diagR.enfermedad);
            }

        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
        };

        refreshDiagnostico();

    }

}, []); // array vacío significa que se ejecutará solo una vez

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await UpdateDiagnostico(id,valoracionEspecialista,enfermedad);
        window.history.back();  
      };
    
    return (
        <div>
        <h2 className='text-center'>Modificar Diagnóstico</h2>
        <form className='form-control' onSubmit={handleSubmit}>
            <div className='form-floating'>
            <input name='Enfermedad' maxLength={LongMax}   placeholder=''  minLength={LongMin} className="form-control" type="text" value={enfermedad} required onChange={(e) => setEnfermedad(e.target.value)} />
            <label  htmlFor='Enfermedad' className="form-label">Enfermedad:</label>
            </div>
            <div className='form-floating'>
            <input name='ValoracionEspecialista' maxLength={LongMax}  placeholder='' minLength={LongMin} className="form-control" type="text" value={valoracionEspecialista} required onChange={(e) => setValoracionEspecialista(e.target.value)} />
            <label  htmlFor='ValoracionEspecialista' className='form-label' >Valoracion del especialista:</label>
            </div>
            <div className='row justify-content-around align-items-center mb-2 mt-2'>
            <button  className="col-5 btn btn-success  " type="submit">Modificar</button>
            <ButtonVolver tm={5} donde={`/diagnostico/${id}`}/>
            </div>

        </form>
        </div>
    )
    }

export default DiagnosticoFormUpdate
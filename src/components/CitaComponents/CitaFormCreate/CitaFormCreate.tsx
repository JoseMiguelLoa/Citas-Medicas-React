import React, { useEffect, useState } from 'react'
import ButtonVolver from '../../ButtonVolver/ButtonVolver';
import MedicoModel from '../../../Models/MedicoModel';
import { GetAllMedicos } from '../../../Services/MedicoService';
import { GetAllPacientes } from '../../../Services/PacienteService';
import PacienteModel from '../../../Models/PacienteModel';
import { CreateCita } from '../../../Services/CitaService';
import { Link } from 'react-router-dom';

interface Props  {}

const CitaFormCreate = (props: Props) => {
    const [motivoCita, setMotivoCita] = useState('');
    const [attribute11, setAttribute11] = useState('');
    const LongMin = 3;
    const LongMax = 255;

    const [medicos,setMedicos] = useState<MedicoModel[]>([]);
    const [pacientes,setPacientes] = useState<PacienteModel[]>([]);

    useEffect(() => {
      const refreshMedicos = async () => {
        try {
          const medicosR = await GetAllMedicos();
          if(typeof medicosR === "string")
            console.log(medicosR);
          else
            setMedicos(medicosR);
        } catch (error) {
          console.error('Error al obtener medicos:', error);
        }
      };

      const refreshpacientes = async () => {
        try {
          const pacientesR = await GetAllPacientes();
          if(typeof pacientesR === "string")
            console.log(pacientesR);
          else
            setPacientes(pacientesR);
        } catch (error) {
          console.error('Error al obtener pacientes:', error);
        }
      };

      refreshpacientes();
      refreshMedicos();
    }, []);


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const fechaHoraInput = document.getElementById('fechaHora') as HTMLInputElement;
        const fechaHoraSeleccionada = new Date(fechaHoraInput.value);
        
//        fechaHoraSeleccionada.setMinutes(fechaHoraSeleccionada.getMinutes()-fechaHoraSeleccionada.getTimezoneOffset());

        const pacienteIdE = (document.getElementById('pacienteId') as HTMLInputElement).value;
        const medicoIdE = (document.getElementById('medicoId') as HTMLInputElement).value;
        
          
        await CreateCita(fechaHoraSeleccionada,motivoCita,parseInt(attribute11),parseInt(pacienteIdE),parseInt(medicoIdE));

        window.history.back();  
      };
  return (
    <div>
      <h2 className='text-center'>Crear Nueva Cita</h2>
      <form className='form-control' onSubmit={handleSubmit}>
        <div className=''>
          <label  htmlFor='fecha' className="form-label">Fecha:</label>
          <input name='fecha'id='fechaHora' maxLength={LongMax}   placeholder=''  minLength={LongMin} className="form-control" type="datetime-local"  required  />
        </div>
        <div  className='form-floating'>
          <input name='attribute'  placeholder=''  className="form-control"   type="number" value={attribute11} required onChange={(e) => setAttribute11(e.target.value)} />
          <label  htmlFor='attribute' className="form-label">Atributo:</label>
        </div>
        <div className=''>
          <label  htmlFor='pacienteId'  className="">Paciente:</label>
          <select className='form-select' name="pacienteId" id="pacienteId" >
                {pacientes.map(paciente =>
                    <option value={paciente.id}>NSS: {paciente.nss}</option>
                )}
          </select>
        </div>
        <div className=''>
        <label  htmlFor='medicoId'  className="">Médico:</label>
          <select className='form-select' name="medicoId" id="medicoId" >
                {medicos.map(medico =>
                    <option value={medico.id}>NúmColegiado: <Link to={`/medico/${medico.id}`}>{medico.numColegiado}</Link></option>
                )}
          </select>
        </div>
        <div className=''>
          <label  htmlFor='motivoCita' className='form-label' >Motivo de la Cita:</label>
          <textarea  className="form-control col-6" minLength={LongMin} maxLength={LongMax} value={motivoCita} name="comen" id="comen" rows={5} placeholder="Motivos...." onChange={(e) => setMotivoCita(e.target.value)} required></textarea>
        </div>
        <div className='row justify-content-around align-items-center mb-2 mt-3'>
          <button  className="col-5 btn btn-success  " type="submit">Crear</button>
          <ButtonVolver tm={5} donde='/cita'/>
        </div>

      </form>
    </div>
  )
}

export default CitaFormCreate
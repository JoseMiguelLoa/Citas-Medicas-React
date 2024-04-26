import { useParams } from 'react-router-dom';
import MedicoFormUpdate from '../../../components/MedicoComponents/MedicoFormUpdate/MedicoFormUpdate';

interface Props  {}

const MedicoUpdatePage = (props: Props) => {
  const { id } = useParams();
  const idnul = id ? parseInt(id) : undefined

  
  return (
    <div className="row justify-content-center align-items-center mt-5 ">
      <div className="bordered col-5">
        <MedicoFormUpdate id={idnul} />
      </div>
    </div>
  )
}

export default MedicoUpdatePage
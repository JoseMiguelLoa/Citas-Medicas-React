import React from 'react'
import CitaFormUpdate from '../../../components/CitaComponents/CitaFormUpdate/CitaFormUpdate'
import { useParams } from 'react-router';

interface Props  {
    
}

const CitaUpdatePage = (props: Props) => {
  const { id } = useParams();
  const idnul = id ? parseInt(id) : undefined

  return (
    <>
      <div className="row justify-content-center align-items-center mt-5 ">
        <div className="bordered col-5">
          <CitaFormUpdate id={idnul} />
        </div>
    </div>
    </>
  )
}

export default CitaUpdatePage
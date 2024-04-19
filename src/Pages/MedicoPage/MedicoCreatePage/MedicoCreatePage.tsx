import React from 'react'
import MedicoForm from '../../../components/MedicoFormCreate/MedicoFormCreate'
import { Link } from 'react-router-dom'
import ButtonVolver from '../../../components/ButtonVolver/ButtonVolver'

type Props = {}

const MedicoCreatePage = (props: Props) => {
  return (
    <>
      <div className="row justify-content-center align-items-center mt-5 ">
        <div className="bordered col-auto">
                  <MedicoForm />
        </div>
      </div>
      
      <ButtonVolver donde='/medico'/>
    </>
  )
}

export default MedicoCreatePage
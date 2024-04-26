import React from 'react'
import MedicoFormCreate from '../../../components/MedicoComponents/MedicoFormCreate/MedicoFormCreate'
import { Link } from 'react-router-dom'
import ButtonVolver from '../../../components/ButtonVolver/ButtonVolver'

type Props = {}

const MedicoCreatePage = (props: Props) => {
  return (
    <>
      <div className="row justify-content-center align-items-center mt-5 ">
        <div className="bordered col-5">
                  <MedicoFormCreate />
        </div>
      </div>
      
    </>
  )
}

export default MedicoCreatePage
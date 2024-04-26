import React from 'react'
import PacienteFormCreate from '../../../components/PacienteComponents/PacienteFormCreate/PacienteFormCreate'

interface Props  {}

const PacienteCreatePage = (props: Props) => {
  return (
    <>
        <div className="row justify-content-center align-items-center mt-2 ">
            <div className="bordered col-6">
                <PacienteFormCreate />
            </div>
        </div>
    </>
  )
}

export default PacienteCreatePage
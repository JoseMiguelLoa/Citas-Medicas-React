import React from 'react'
import CitaFormCreate from '../../../components/CitaComponents/CitaFormCreate/CitaFormCreate'

interface Props  {}

const CitaCreatePage = (props: Props) => {
  return (
    <>
    <div className="row justify-content-center align-items-center mt-2 ">
        <div className="bordered col-6">
            <CitaFormCreate />
        </div>
    </div>
</>
  )
}

export default CitaCreatePage
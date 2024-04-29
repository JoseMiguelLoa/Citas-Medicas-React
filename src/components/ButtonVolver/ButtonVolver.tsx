import React from 'react'
import { Link } from 'react-router-dom'

interface Props  {

    donde : string
    tm :number;
}

const ButtonVolver = ({donde , tm}: Props)  => {
  return (
    <Link id="volver" to={donde} className={`btn btn-warning col-${tm}`}>Volver</Link>
  )
}

export default ButtonVolver
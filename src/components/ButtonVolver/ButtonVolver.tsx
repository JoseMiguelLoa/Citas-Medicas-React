import React from 'react'
import { Link } from 'react-router-dom'

interface Props  {

    donde : string
}

const ButtonVolver = ({donde}: Props)  => {
  return (
    <Link to={donde} className='btn btn-danger'>Volver</Link>
  )
}

export default ButtonVolver
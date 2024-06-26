import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';
interface Props  {
    foto: string;
    tipo : string;
    donde: string;
    id : number;
}

const Card : React.FC<Props> = ({ foto,tipo,donde,id}:  Props) : JSX.Element=> {
  return (
    <Link id={String(id)} to={donde}>
      <div className='cartaAnim col-auto mt-3 mb-3'>
        <div className="card h-100 g-0">
          <img className="card-img-top" src={foto} alt={foto} />
          <div className="card-body">
            <h2 className='card-title text-center'>{tipo}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default Card
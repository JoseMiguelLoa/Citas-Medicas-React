import React from 'react'
import './Footer.css'
interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="container-fluid  mt-3">
        <div className="row align-items-top justify-content-around  ">

            <div className="col-12 text-center col-sm-5 text-sm-start col-md-2 ">
                <h3> <strong>Dirección</strong></h3>
                <p>Camino los Patos, 21, Las Torres de Cotillas, Murcia, España</p>
            </div>
            <div className="col-12 text-center col-sm-5 text-sm-start col-md-2 ">
                <h3> <strong>Teléfono</strong></h3>
                <p>+34 123-456-789</p>
            </div>
            <div className="col-12 text-center col-sm-5 text-sm-start col-md-2">
                <h3> <strong>Email</strong></h3>
                <a href="mailto:HospitalCKA@gmail.com">HospitalCKA@gmail.com</a>
            </div>

            <div className="col-12 text-center col-sm-5 text-sm-start col-md-2 ">
                <h3> <strong>Derechos de autor</strong></h3>
                <a href='#'>Pagina de acreditación</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
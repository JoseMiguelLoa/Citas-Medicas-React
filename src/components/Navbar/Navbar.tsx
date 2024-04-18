import React from 'react'
import logo from "../../imgs/IconoH.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
interface Props  {}

const Navbar : React.FC<Props> = (props: Props) : JSX.Element =>  {
  return (
    
    <nav className="navbar navbar-expand-sm  navbar-dark">
		<div className="container-fluid">
			
			<Link className="navbar-brand" to=""><img src={logo} alt="" width="50px" /></Link>

			
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_plegable">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbar_plegable">
				
				<ul className="navbar-nav me-auto">
					<li className="nav-item"><Link className="nav-link " to="">Inicio</Link></li>
					<li className="nav-item"><Link className="nav-link" to="medico">Médicos</Link></li>				
					<li className="nav-item"><Link className="nav-link" to="paciente">Pacientes</Link></li>
					<li className="nav-item"><Link className="nav-link" to="cita">Citas</Link></li>
				</ul>

				<ul className="navbar-nav ">
					<li className="nav-item"><Link className="nav-link active" to="login">Login</Link></li>
				</ul>
			</div>
		</div>
	</nav>
  )
}

export default Navbar
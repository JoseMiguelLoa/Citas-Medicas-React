import React from 'react'
import logo from "../../imgs/IconoH.png"
import "./Navbar.css"
interface Props  {}

const Navbar : React.FC<Props> = (props: Props) : JSX.Element =>  {
  return (
    
    <nav className="navbar navbar-expand-sm  navbar-dark">
		<div className="container-fluid">
			
			<a className="navbar-brand" href="#"><img src={logo} alt="" width="50px" /></a>

			
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_plegable">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbar_plegable">
				
				<ul className="navbar-nav me-auto">
					<li className="nav-item"><a className="nav-link " href="#">Inicio</a></li>
					<li className="nav-item"><a className="nav-link" href="#">Médicos</a></li>				
					<li className="nav-item"><a className="nav-link" href="#">Pacientes</a></li>
					<li className="nav-item"><a className="nav-link" href="#">Citas</a></li>
				</ul>

				<ul className="navbar-nav ">
					<li className="nav-item"><a className="nav-link active" href="#">Login</a></li>
				</ul>
			</div>
		</div>
	</nav>
  )
}

export default Navbar
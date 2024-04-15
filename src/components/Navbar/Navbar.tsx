import React from 'react'
import logo from "../../imgs/IconoH.png"

interface Props  {}

const Navbar = (props: Props) => {
  return (
    
    <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
		<div className="container-fluid">
			
			<a className="navbar-brand" href="#"><img src={logo} alt="" width="50px" /></a>

			
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_plegable">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbar_plegable">
				
				<ul className="navbar-nav me-auto">
					<li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
					<li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
					
					<li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
				</ul>

				<form className="d-flex" action="#">
					<input className="form-control me-2" type="text" placeholder="Buscar..." />
					<button className="btn btn-outline-light" type="submit">Buscar</button>
				</form>
			</div>
		</div>
	</nav>
  )
}

export default Navbar
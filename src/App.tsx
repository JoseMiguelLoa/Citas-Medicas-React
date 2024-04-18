import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';

function App() {


  return (
    <>
      <div className='todo'>
        <Navbar />
        <div className="container content ">

          <Outlet />
        </div>
        
        <Footer />
      </div>
    </>
  );
}
<div>
  <a href="https://www.flaticon.es/iconos-gratis/medico" title="médico iconos">Médico iconos creados por Freepik - Flaticon</a>
  <a href="https://www.flaticon.es/iconos-gratis/paciente" title="paciente iconos">Paciente iconos creados por monkik - Flaticon</a>
  <a href="https://www.flaticon.es/iconos-gratis/cita-medica" title="cita medica iconos">Cita medica iconos creados por photo3idea_studio - Flaticon</a>
  <a href="https://www.flaticon.es/iconos-gratis/hospital" title="hospital iconos">Hospital iconos creados por Freepik - Flaticon</a>
</div>
export default App;
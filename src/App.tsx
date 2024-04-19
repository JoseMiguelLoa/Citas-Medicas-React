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

</div>
export default App;
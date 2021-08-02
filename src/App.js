import logo from './logo.svg';
import './App.css';
import GlassComponent from './components/GlassComponent';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarComponent from './choose-car-components/CarComponent';

function App() {
  return (
   <div>
     <GlassComponent/>

     <CarComponent/>
   </div>
  );
}

export default App;

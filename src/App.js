import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import City from './Components/City';
import Cities from './Components/Cities';
import Nursery from './Components/Nursery';
function App() {
  return (
    <>
    <div className='FullScreen'>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/cities" element={<Cities/>}/>
          <Route path="/nurseries/:cityId" element={<City/>} />
          <Route path="/nursery/:nurseryId" element={<Nursery/>} />
        </Routes>    
      </div>
    </div>
    </>
  );
}

export default App;

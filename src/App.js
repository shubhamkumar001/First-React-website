import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Service from './Components/Service';
import Navbar from './Components/Navbar';
import {Routes, Route, } from 'react-router-dom'

function App() {
  return (<>
    <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/service' element={<Service />} />
    <Route path='/about' element={<About />} />
    <Route path='*' element={<Home />} />
  </Routes>
  </>
  ); 
}

export default App;

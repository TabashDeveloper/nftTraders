import { Nav } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Footer from './components/Footer';
import Mytrades from './pages/Mytrades';
import { Route, Routes } from 'react-router-dom';
import Nav1 from './components/nav/Index';
function App() {
  const [wallet, setWallet] = useState(false)

  const connectWallet = () =>{
   
    setWallet(!wallet)
  }

  return (
    <div className="App">
    <Navbar  connectWallet={connectWallet}/>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/Mytrades' element={<Mytrades wallet={wallet}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

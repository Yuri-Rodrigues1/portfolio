
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projetos from './pages/projetos/Projetos';

function App() {
  return (
    <div className="App">
      <Home/> 
      <Projetos/>
    </div>
  );
}   

export default App;

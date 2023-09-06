
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projetos from './pages/projetos/Projetos';

function App() {
  return (
    <div className="App">
      <Router basename='/portfolio'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projetos' element={<Projetos/>}/>
        </Routes>
      </Router>
    </div>
  );
}   

export default App;

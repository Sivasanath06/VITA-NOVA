import {Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Board from './components/Board';
import './components/style.css';
import EWasteFacilityLocators from './EWasteFaciltyLocators';
import Calculator from './components/Calculator';
import Calciresult from './components/Calciresult';

function App() {
  return (
   <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/leaderboard' element={<Board/>}/>
    <Route path='/locate' element={<EWasteFacilityLocators/>}/>
    <Route path='/calci' element={<Calculator/>}/>
    <Route path='/calciresult' element={<Calciresult/>}/>



    </Routes>
    <Footer/>
   </>
   
  );
}

export default App;

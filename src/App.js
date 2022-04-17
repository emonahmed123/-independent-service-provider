import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Cheakout from './Pages/Cheakout/Cheakout';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/Abot/About';
import Sigup from './Pages/Login/Sigup/Sigup';

function App() {
  return (
    <div >
     <Header></Header>
   <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/cheakout' element={<Cheakout></Cheakout>}></Route>
         <Route path='/sigup' element={<Sigup></Sigup>}></Route>
         <Route path='/about' element={<About></About>}></Route>
   </Routes>
<Footer></Footer>
    </div>
  );
}

export default App;

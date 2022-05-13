import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Auctions from './Pages/Home/Auctions/Auctions';
import Exclusive from './Pages/Home/Exclusive';
import Login from './Pages/Shared/Login';
import Signup from './Pages/Shared/Signup';
import RequireAuth from './Pages/RequireAuth';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="bg-primary overflow-hidden">
      <Header ></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/auctions' element={
          <RequireAuth>
            <Auctions></Auctions>
          </RequireAuth>
        }></Route>
        <Route path='/exclusives' element={
          <RequireAuth>
            <Exclusive></Exclusive>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

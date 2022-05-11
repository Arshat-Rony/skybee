import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="bg-primary overflow-hidden">
      <Header ></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
     <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;

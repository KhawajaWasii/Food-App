import './App.css';
import Home from './pages/home/index';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Cart from './pages/cart/index';

function App() {
  return (
    <div className="App max-w-[1140px] my-[0px] mx-[auto] w-[95%]">
      <Router>
    <Routes>
      <Route  exact path="/" element={<Home/>} />
      <Route  path="/cart" element={<Cart/>} />
      <Route path="*"  element={<Navigate to="/" />} />

    </Routes>

      </Router>
    </div>
  );
}

export default App;

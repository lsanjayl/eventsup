import logo from './logo.svg';
import './App.css';
import Eventslist from "./Pages/Eventslist/Eventslist"
import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Eventslist />}></Route>
      <Route path="/register" element={<Registration/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

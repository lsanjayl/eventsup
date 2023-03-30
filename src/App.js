import logo from './logo.svg';
import './App.css';
import Eventslist from "./Pages/Eventslist/Eventslist"
import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import Signup from './Pages/signup/signup';
import Signin from './Pages/Signin/Signin';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signin />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
      <Route path="/events" element={<Eventslist />}></Route>
      <Route path="/register" element={<Registration/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import Home from './home'
import Plans from './pages/services';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './pages/contactUs';
function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/plans' element={<Plans/>} />
      <Route path='/contact' element={<ContactUs/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App

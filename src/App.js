import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Admin from './components/Admin';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Inspector from './components/Inspector';
import LoginRegistration from './components/LoginRegistration';
import Residents from './components/Residents';
import Services from './components/Services';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/login_registration' element={<LoginRegistration />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/inspector' element={<Inspector />}/>
        <Route path='/resident' element={<Residents />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav'
import Footer from './component/Footer'
import Home from './component/Home'
import About from './component/About'
import Ourpackages from './component/Ourpackages'
import Contact from './component/Contact'
import Sign from './component/Sign'
import Login from './component/Login'
import Book from './component/Book'


function App() {
  return (
 <>
 <BrowserRouter>
 <Nav/>
 <Routes >
  <Route path='/' element={<Home/>} />
   <Route path='/About' element={<About/>} />
  <Route path='/Ourpackages' element={<Ourpackages/>} />
  <Route path='/Contact' element={<Contact/>} />
   <Route path='/Sign' element={<Sign/>} />
      <Route path='/Login' element={<Login/>} />
       <Route path='/Book' element={<Book/>} />

  
 </Routes>
 <Footer/>
 </BrowserRouter>
 </>
  );
}

export default App;

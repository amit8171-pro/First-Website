import logo from './logo.svg';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Details from './Pages/Details';
import "./style/style.scss";
import "./style/banner.scss"
import Women from './Pages/Women';
import Footer from './Component/Footer';
import Form from './Component/Form';
import Shoes from './Component/Shoes';
function App() {
  return (
<>
<Navbar/>
<Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category' element={<Category/>}/>   
      <Route path='/women' element={<Women/>}/>  
      <Route path='/form' element={<Form/>}/>  
      <Route path='/shoes' element={<Shoes/>}/>  
</Routes>
<Footer/>
</>
  );
}

export default App;

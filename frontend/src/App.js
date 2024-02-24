
import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Update from './components/Update';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route element={ <PrivateComponent/>} >  
                  <Route path="/" element={<ProductList/>}/>
                    <Route path="/add" element={<AddProduct />} />
                    <Route path="/update/:id" element={<Update />} />
                    <Route path="/profile" element={<Profile />} />
             </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />  
        </Routes>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;

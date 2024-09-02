import './App.css';
import {Shop} from './Components/Shop';
import { Header } from './Components/Header';
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import { Cart } from './Components/Cart';
import { NotFound } from './Components/NotFound'; 
function App() {
  const [cart,setCart] = useState([]);

  return (
    <div className=" col-10 App">
      <Header cart={cart} setCart ={setCart}/>
      <main>
        <Routes>
           <Route  path="/" element={<Shop cart={cart} setCart ={setCart}/>}/>
           <Route path='cart' element={<Cart cart={cart} setCart ={setCart}/>}></Route>
           <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

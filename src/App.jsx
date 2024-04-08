import Navbar from './components/Nabvar/Navbar'
import classes from './App.module.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartView from './components/CartView/CartView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './components/Checkout/Checkout'


const App = () =>{

   
  return (
    <div className={classes.body}>  
    <BrowserRouter>
      <ToastContainer />           
       <CartProvider>             
          <Navbar/>
            <Routes>
             <Route path='/' element ={<ItemListContainer greeting={'¡Hola! ¿Qué comemos hoy?'} />}/>
             <Route path='/category/:categoryId' element ={<ItemListContainer />}/>
             <Route path='/item/:itemId' element ={<ItemDetailContainer />}/>
             <Route path='/cart' element ={<CartView/>}/>
             <Route path='/checkout' element ={<Checkout/>}/>
             <Route path='*' element = {<h4>404 NOT FOUND</h4>}/>
            </Routes>         
        </CartProvider>        
      
    </BrowserRouter>
      <Footer/> 
         
    </div>
  )
}

export default App

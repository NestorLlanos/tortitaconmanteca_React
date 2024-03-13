
import Navbar from './components/Nabvar/Navbar'
import classes from './App.module.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className={classes.body}>
      <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route path='/' element ={<ItemListContainer greeting={'¡Hola! ¿Qué comemos hoy?'} />}/>
          <Route path='/category/:categoryId' element ={<ItemListContainer />}/>
          <Route path='/item/:itemId' element ={<ItemDetailContainer />}/>
          <Route path='*' element = {<h4>404 NOT FOUND</h4>}/>
        </Routes>
                
      </BrowserRouter>
      <Footer/>
      
       
      
    </div>
  )
}

export default App

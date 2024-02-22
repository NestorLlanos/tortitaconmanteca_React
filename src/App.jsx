import './App.css'
import Navbar from './components/Nabvar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Buttom from './components/Buttom/Buttom'

function App() {
  
  return (
    <>
      
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos'} />
      <Buttom label='Inicio' className= 'btn btn-outline-secondary' callBack = {() => console.log('Hice click en Inicio')}/>
      <Buttom label='Historia' className= 'btn btn-outline-secondary' callBack ={() =>console.log('Hice click en Historia')}/>
      <Buttom label='Contacto' className= 'btn btn-outline-secondary'callBack ={() =>console.log('Hice click en Contacto')}/>
    </>
  )
}

export default App

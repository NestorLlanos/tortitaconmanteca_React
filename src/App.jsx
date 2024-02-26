
import Navbar from './components/Nabvar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
      
      <Navbar/>
      <ItemListContainer greeting={'Ahora podes hacer tu compra desde la web y retiras por nuestro local...'} />
      <ItemCount initialValue={0} min={0} max={20}/>
      <ItemCount initialValue={0} min={0} max={10}/>
  
      <Footer label='Inicio' className= 'btn' callBack = {() => console.log('Hice click en Inicio')}/>
      <Footer label='Historia' className= 'btn' callBack ={() =>console.log('Hice click en Historia')}/>
      <Footer label='Contacto' className= 'btn'callBack ={() =>console.log('Hice click en Contacto')}/>
    </>
  )
}

export default App

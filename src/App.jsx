
import Navbar from './components/Nabvar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  
  return (
    <div>
      
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos a nuestro sitio...'} />
      <ItemDetailContainer />
       
      <Footer label='Inicio' className= 'btn' callBack = {() => console.log('Hice click en Inicio')}/>
      <Footer label='Historia' className= 'btn' callBack ={() =>console.log('Hice click en Historia')}/>
      <Footer label='Contacto' className= 'btn'callBack ={() =>console.log('Hice click en Contacto')}/>
    </div>
  )
}

export default App

import { useState } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Buenasss bienvenidos a mi ecommerce, gracias por todo."/>
    </>
  )
}

export default App

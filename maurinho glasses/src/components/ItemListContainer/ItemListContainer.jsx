import { ItemList } from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { getProductos, getProductosPorCategoria} from '../../asyncmock';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import "./ItemListContainer.css";



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))

  }, [idCategoria])

  return (
    <>
       <img className='banner' src="../img/gatinho.jpg" alt="" />
    <Container>
       <h5>CATÁLOGO</h5>
      <ItemList productos={productos}/>
    </Container>
    </>
    
  )
}

export default ItemListContainer
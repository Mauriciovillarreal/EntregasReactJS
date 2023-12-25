import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { Glasses } from '../Glasses/Glasses';

export const NavBar = () => {
  return (
    <header>
        <h1>M A U R I N H O<br/> 
            <span>glasses</span>  
        </h1>
        <nav>
            <Glasses/>
            <ul>
                <i></i>
                <li><i>ECO GAFAS</i></li>
                <li><i>SOL</i></li>
                <li><i>ARMAZONES</i></li>
                <li><i>24/7</i></li>
                <li><i>PREMIUM SERIES</i></li>
            </ul>
            <CartWidget/>
        </nav>
    </header>
  )
}

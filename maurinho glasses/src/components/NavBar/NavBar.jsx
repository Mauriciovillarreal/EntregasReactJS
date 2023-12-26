import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { Glasses } from '../Glasses/Glasses';

export const NavBar = () => {
  return (
    <header>
        <h1>
          <i>MAURINHO</i>
        

        </h1>
        <nav>
            <Glasses/>
            <ul>
                <i></i>
                <li>ECO GAFAS</li>
                <li>SOL</li>
                <li>ARMAZONES</li>
                <li>24/7</li>
                <li>PREMIUM SERIES</li>
            </ul>
            <CartWidget/>
        </nav>
    </header>
  )
}

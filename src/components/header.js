import Logo from '../pictures/logo.png';
import '../SASS/index.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header"> 
            <img src={Logo} className="header__logo" alt='Logo Kasa'/>
            <div className="header__nav"> 
                <Link to="/" ><p>Accueil</p></Link>
                <Link to="/DApropos"><p>A propos</p></Link>
            </div>

        </header>
    )
}

export default Header;
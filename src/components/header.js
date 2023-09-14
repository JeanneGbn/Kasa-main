import Logo from '../pictures/logo.png';
import '../SASS/index.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header"> 
            <img src={Logo} className="header__logo"/>
            <div className="header__nav-min"> 
                <Link to="/" ><p>Accueil</p></Link>
                <Link to="/DApropos"><p>A propos</p></Link>
            </div>
            <div className="header__nav-maj"> 
                <Link to="/" ><p>ACCUEIL</p></Link>
                <Link to="/DApropos"><p>A PROPOS</p></Link>
            </div>

        </header>
    )
}

export default Header;
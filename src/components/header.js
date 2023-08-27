import Logo from "../pictures/logo.png";
import '../styles/index.css'

function Header() {
    return (
        <header className="banner"> 
            <img src={Logo} className="banner_logo"/>
            <div className="banner_nav"> 
                <a href="#"> Accueil </a>
                <a href="#"> A Propos </a>
            </div>

        </header>
    )
}

export default Header;
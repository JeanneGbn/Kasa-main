import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/D404.scss';
import { Link } from "react-router-dom";


function D404() {
    return (
        <div>
            <Header />
            <main className="D404">
                <h1>404</h1>
                <p className="D404__text">Oups! La page demandez n'existe pas.</p>
                <Link to="/">
                  <p className="D404__link">Retourner sur la page d'accueil</p>
                </Link>
            </main>
            <Footer />
        </div>
    );
};

export default D404;
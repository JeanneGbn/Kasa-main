import annonces from '../annonces.json';
import { Link } from 'react-router-dom';


function Card() {
    return (
        <ul className='card'>
            {annonces.map((annonces) => (
                <li key={annonces.id}>
                <Link to={`/D_Fiche-Logement/${annonces.id}`}>
                <div className='card__div' >
                    
                        <img src={annonces.cover} alt={annonces.title}></img>
                        <div className='card__overlay'>
                        <p className='card__title'>{annonces.title}</p>
                        </div>
                    
                </div>
                </Link>
                </li>

            ))}
        </ul>
    )
}
export default Card
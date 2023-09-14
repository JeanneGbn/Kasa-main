import annonces from '../annonces.json';
import { Link } from 'react-router-dom';


function Card() {
    return (
        <div className='card'>
            {annonces.map((annonces) => (
                <div className='card__div' key={annonces.id}>
                    <Link to={`/D_Fiche-Logement/${annonces.id}`}>
                        <img src={annonces.cover} alt={annonces.title}></img>
                        <div className='card__overlay'>
                        <p className='card__title'>{annonces.title}</p>
                        </div>
                    </Link>
                </div>

            ))}
        </div>
    )
}
export default Card
import Header from '../components/header';
import Footer from '../components/footer';
import '../SASS/ficheLogement.scss';
import '../styles/collapse.scss';
import Collapse from '../components/Collapse';
import Carrousel from '../components/Carrousel';
import ActiveStar from '../pictures/star-active 1.png';
import EmptyStar from '../pictures/star-inactive 1.png';
import {Navigate, useParams} from 'react-router-dom';
import useAnnonce from '../components/useAnnonce';
import annonces from '../annonces.json';




const FicheLogement = (props) => {
    const annonce = useAnnonce()
    const { id } = useParams()
    const logement = annonces.find((item) => item.id === id)

    if (!logement){
      return <Navigate to="/D404"/>
    }
    
    const rating = annonce.rating;
    const maxStars = 5;
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      stars.push(
          <img
              key={i}
              src={i <= rating ? ActiveStar : EmptyStar}
          />
      )
  }


    return (
        <div>
          <Header/>
          <main>
           <Carrousel/>
            <div className='main_div'>
                <div key={annonce.id}    >
                    <div className='presentation'>
                       <div className='presentation__name_and_place'>
                            <h1> {annonce.title} </h1>
                            <p> {annonce.location} </p>
                        </div>
                        <div className='presentation__host'>
                            <p> {annonce.host.name} </p>
                            <img src={annonce.host.picture} alt={annonce.host.name}></img>
                        </div>
                    </div>
                    <div className='description'>
                      <div className='description__tags'>
                        {annonce.tags.map((tag, index) => (
                           <p key={index}>{tag}</p>
                        ))}
                      </div >
                      <div className='description__stars'> 
                      {stars}
                      </div>
                    </div>
                    <div className='logements_collapse_main_div'>
                      <div className='logements_collapse'>
                        <Collapse text="Description">
                            <p>{annonce.description}</p>
                        </Collapse>
                      </div>
                      <div className='logements_collapse'>
                        <Collapse text="Equipement">
                            {<ul>{annonce.equipments.map((equipement) =>
                                <li key={equipement}>{equipement}</li>)}
                            </ul>}
                        </Collapse>
                      </div>
                    </div>
                </div>
            </div>

          </main>
          <Footer/>
        </div>
    )

};

export default FicheLogement; 
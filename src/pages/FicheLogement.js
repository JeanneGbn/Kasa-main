import Header from '../components/header';
import Footer from '../components/footer';
import annonces from "../annonces.json";


import { useParams, useNavigate } from "react-router-dom";




const FicheLogement = () => {
    return (
        <div>
          <Header/>
          <main>
            <div className='main_div'>
                {annonces.map((annonces) => (
                <div>
                    <div className='presentation'>
                    <div className='name_and_place'>
                            <h1> {annonces.title} </h1>
                            <p> {annonces.location} </p>
                        </div>
                        <div className='host'>
                            <p> {annonces.host.name} </p>
                            <img src={annonces.host.picture} alt={annonces.host.name}></img>
                        </div>
                    </div>
                    <div className='tags_and_stars'>
                        <div className='tags'>
                          <p className='first_tag'> </p>
                          <p className='second_tag'> </p>
                          <p className='third_tag'> </p>
                        </div>
                        <div className='stars'>
        
                        </div>
                    </div>
                    <div className='collapse_div'>
                        <button className='description_collapse'> </button>
                        <button className='equipements_collapse'> </button>
                    </div>
                </div>
                ))}
            </div>

          </main>
          <Footer/>
        </div>
    )

};

export default FicheLogement; 
import picture from '../pictures/ImgMontagnes.png';
import Header from '../components/header';
import Footer from '../components/footer';
import BannerPicture from '../components/BannerPicture';
import '../styles/collapse.scss';
import '../SASS/aPropos.scss';
import Collapse from "../components/Collapse";



function A_propos() {
    return (
        <div>
            <Header />
            <main >
                <BannerPicture picture={picture}/>
                <section className='section_collapse'>
                    <div className='section_collapse__collapse_apropos'> 
                    <Collapse text="Fiabilité">
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes
                                aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                            </p>
                        </Collapse>
                        <Collapse text="Respect">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                                ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                            </p>
                        </Collapse>
                        <Collapse text="Service">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                                ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                            </p>
                        </Collapse>
                        <Collapse text="Sécurité">
                            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                                correspond aux crutères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
                                qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous
                                organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                            </p>
                        </Collapse>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default A_propos;
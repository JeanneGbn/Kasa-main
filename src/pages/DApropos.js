import Picture from './assets/ImgMontagnes.png';
import Header from '../header.js';
import Footer from '../../components/footer.js';
import BannerPicture from '../BannerPicture.js';



function A_propos() {
    return (
        <div>
            <Header />
            <main >
                <BannerPicture banner={Picture}/>
                <section>
                    <div>
                        <div text="Fiabilité">
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes
                                aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                            </p>
                        </div>
                        <div text="Respect">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                                ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                            </p>
                        </div>
                        <div text="Service">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                                ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                            </p>
                        </div>
                        <div text="Sécurité">
                            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                                correspond aux crutères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
                                qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous
                                organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default A_propos;
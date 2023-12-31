import { useState } from 'react';
import useAnnonce from './useAnnonce';
import leftArrow from '../pictures/arrow_left.png';
import rightArrow from '../pictures/arrow_right.png';
import '../SASS/ficheLogement.scss';


function Carrousel() {
	const logement = useAnnonce();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [key, setKey] = useState(0);
    const getPictureCounter = () => {
        return `${currentImageIndex + 1} / ${logement.pictures.length}`;
    };
    function nextImage() {
        setCurrentImageIndex((nextIndex) => (nextIndex + 1) % logement.pictures.length);
        setKey((prevKey) => prevKey + 1);
    };

    function previousImage() {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? logement.pictures.length - 1 : (prevIndex - 1) % logement.pictures.length
        );
        setKey((prevKey) => prevKey + 1);
    };
    const currentImage = logement.pictures[currentImageIndex]

   
    if (logement.pictures.length === 1) {
        return (
            <section className="carrousel">
                <img src={currentImage} alt="Photo du logement" className="carrousel__style" />
            </section>
        );
    }
    return (
        <section className="carrousel" key={key}>
            <img src={currentImage}  className="carrousel__style" alt='Photo du logement.' />
            <img src={rightArrow}  onClick={nextImage} className="carrousel__right_arrow" alt='Flèche droite'></img>
            <img src={leftArrow}  onClick={previousImage} className="carrousel__left_arrow" alt='Flèche gauche'></img>
            <div className="carrousel__counter"> {getPictureCounter()}</div>
        </section>
    )
}

export default Carrousel;


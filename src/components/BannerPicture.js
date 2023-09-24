
import '../SASS/index.scss'
import '../SASS/aPropos.scss';

function BannerPicture(props) {
    return (
        <section className='banner'>
            <img src={props.picture} className="banner__img" alt='Photo de nature'/>
            <h1> {props.text} </h1>
        </section>
    );
};

export default BannerPicture;
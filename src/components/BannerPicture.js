import Banner from "../pictures/ImgBanner.png";
import '../styles/home.css'

function BannerPicture() {
    return (
        <section className='banner_img'>
            <img src={Banner}/>
            <h1> Chez vous, partout et ailleurs </h1>
        </section>
    );
};

export default BannerPicture;
import React from "react";
import Header from "../components/header"
import PictureBanner from "../components/BannerPicture"
import CardsBox from "../components/CardsBox.js"
import Card from "../components/Card.js"
import Footer from "../components/footer"
import Picture from '../pictures/ImgMontagnes.png'
import '../styles/index.css'


const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <PictureBanner banner={Picture} alt="Photos de montagne" className="picture__banner--home" title="Chez vous, partout et ailleurs" />
                <CardsBox />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
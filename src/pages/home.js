import React from "react";
import Header from "../components/header"
import PictureBanner from "../components/BannerPicture"
import CardsBox from "../components/CardsBox.js"
import Card from "../components/Card.js"
import Footer from "../components/footer"
import picture from '../pictures/ImgBanner.png'
import '../styles/index.scss'


const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <PictureBanner picture={picture} alt="Photos de montagne"  text="Chez vous, partout et ailleurs">
                <h1> Chez vous, partout et ailleurs </h1>
                </PictureBanner>
                <CardsBox />
            </main>
            <Footer />
        </div>
    );
};

export default Home;